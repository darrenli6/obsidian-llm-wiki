---
title: "Unblocked 实践：把 agent 循环从 Claude 迁到 GLM 的经验"
type: article
tags: [news, glm, engineering]
source_url: https://getunblocked.com/blog/moving-agent-loops-from-anthropic-to-glm/
ingested: 2026-08-19
sha256: c420cb7eeaf93933256936a6cacf6f57c192b1505e5b9322396ec1b5bbd308d9
summary: "Unblocked 将代码审查/问答 agent 流量从 Claude Opus 迁至开源权重 GLM 5.2：按任务算成本降 68%（按 token 算宣称 95%）；"OpenAI-compatible" API 一致性、多供应商池化与盲测评价是真正的工作量所在。"
---

# Unblocked 实践：把 agent 循环从 Claude 迁到 GLM 的经验

> 原文链接：https://getunblocked.com/blog/moving-agent-loops-from-anthropic-to-glm/

# What We Learned Moving Our Agent Loops from Anthropic to GLM

Why we moved most of Unblocked's agent traffic from Claude Opus to GLM 5.2, what the blind A/Bs and the ledger actually showed, and what broke on the way.

Dennis PilarinosAug 13, 2026Engineering Insights

TL;DR: We moved most of Unblocked's agent traffic from Claude Opus to GLM 5.2.

“Per-token” math promised 95% savings; per-task production reality delivered 68%. Getting there took blind A/B evaluation on real code reviews, a circuit-broken multi-provider serving pool, and weeks of "OpenAI-compatible" surprises.

Background: Unblocked gives agents the organizational understanding of your best engineers. Its context engine connects and reconciles knowledge across your code, conversations, issues, documentation, and production systems, then makes that understanding available wherever work happens. Agents access context through MCP/CLI/APIs and Unblocked products like Code Review and Unblocked Code apply that context directly to reviewing and writing code. The result is better software, produced with fewer tokens, fewer iterations, and less back-and-forth.

For most of the last two years, Unblocked ran on Anthropic models. Our product is a set of agentic loops: answering engineering questions, reviewing code, searching across an organization's institutional knowledge. Claude Opus sat in the outer loop of nearly all of it.

This summer we moved most of that traffic to GLM, an open-weight model served by third-party inference providers. This post covers why we did it, what we measured, what broke, and where we've landed. We're not going to describe our system internals, but the findings should transfer to anyone running agent loops at scale.

## The problem#

When we audited our AI spend, one number stood out: over 80% of it came from frontier model usage in our main agent loops, almost entirely Opus.

We listed the knobs available to us:

- Model. The single biggest factor in output quality for code review, less so for Q&A.

- Turns. Less important than expected once caching is optimized for long loops.

- Tools. Variable, and growing as features ship.

- Caching. Already optimized. Aggressive prompt caching holds us above a 95% cache hit rate turn-over-turn, so there was nothing meaningful left to reclaim there.

- Prompts. Mostly optimized, and mattering less with every model generation.

Caching and prompts were tapped out. Deleting features wasn't on the table. That left the model itself, and the gap between frontier pricing and open-weight pricing had become impossible to ignore. GLM 5.2 was billed at less than a third of frontier rates, and on raw per-token pricing across serving providers the savings looked closer to 95% against Opus.

The question was whether the quality held up in production, on real workloads, judged by real users. Benchmarks weren't going to answer that.

## Per-token pricing is a lie you tell yourself#

The first correction came fast. One of our engineers pulled real usage off the Fireworks dashboard: 2.35 billion tokens served for roughly 5% of what the same volume would have cost on Opus, with caching accounted for on both sides. A 95% cost reduction, on paper.

Then we ran the same code review on the same commit, same PR, same prompt, once with Opus and once with GLM. The real-world saving was 68%, not 95%.

The arithmetic is multiplicative, and only one of the two terms is printed on the rate card:

Copy
texteffective cost = token price × tokens required per task

On price alone, GLM looked like a 20× improvement. On the bill it was about 3.1×.

The gap is behavioral. GLM uses far more tokens per task than Opus does:

- It makes more tool calls. It explores more aggressively, which is sometimes good and sometimes waste.

- It makes more mistakes, and mistakes cost turns. A malformed search or an empty result means another round trip through the loop.

- It ingests larger tool results and spends more tokens reasoning about them.

- It's more talkative in general.

This isn't an anecdote from a handful of samples. In our search flow, average tokens per call rose from about 18,500 to about 24,700 (up a third) over the migration window, and GLM was only serving around 45% of those calls. The exploration overhead is visible in the fleet-wide ledger.

So the metric that matters is cost per task, not cost per token. Any team evaluating a model swap should run identical workloads end to end and compare invoices, not rate cards. A 68% reduction is still an enormous win. It's just not the win the rate card promised.

## How we evaluated quality#

We didn't trust internal vibes, and we didn't trust public benchmarks. We built the comparison into the product.

For code review, we set up dual pipelines that run two models on the exact same PR, same commit, same prompt, and publish both sets of comments. End users can't tell which model produced which comment. We already recorded reaction sentiment on review comments and could attribute it per pipeline, so every reaction became a blind vote.

Sentiment measures precision: of the comments that got a reaction, what fraction were negative? Across thousands of production reviews, three models sorted cleanly:

ModelReviewsCommentsComments per review

Claude Opus3,7081,1460.31

GLM 5.23,3841,5680.46

GPT-based alternative7226170.85

On precision, Opus ranked best, GLM close behind, and the GPT-based alternative far behind despite posting nearly triple Opus's comment volume per review. GLM was simply more willing to speak. In code review that's dangerous: a reviewer that posts weak findings trains developers to ignore it, which is the worst possible shape for the tool. GLM's precision was within a tolerance we could accept for the price. The third model wasn't.

Be honest about what this measures, though. Only a fraction of comments ever draw a reaction, and a bad comment is more motivating to react to than a good one, so the absolute sentiment numbers are biased and only the ordering is trustworthy. Comments per review is not recall either — a model can write more comments without finding more real bugs. We used this as a deployment signal for our workload, not as proof of equal capability. "Can this model find bugs?" stopped being the question. The questions were: how often is a finding actionable, how many false positives ride along with it, does the model know when not to comment, and does its output build or erode developer trust?

We ran the same play for Q&A: enable GLM for our own organization first, tell everyone to flag bad answers, watch for a week. Then roll out gradually, free tier first, largest customers last.

## "OpenAI-compatible" is a spectrum, not a standard#

This is where most of the engineering time actually went. Every open-weight serving provider advertises an OpenAI-compatible API. In practice, compatibility ends where the interesting features begin.

Things we hit, all in production or in the week before it:

Reasoning has no standard wire format. Fireworks returns thinking output in a reasoning_content field, Together returns it in reasoning, and first-party OpenAI doesn't put it in chat completions at all. If you run multi-turn tool-calling loops, you also need to replay reasoning content back onto prior assistant turns, and each host has its own expectations about that.

Reasoning effort mappings can silently max out your bill. GLM's chat template treated any effort value other than the literal string high as maximum effort. We had been sending a value we thought meant "minimal" and were paying for maximum-effort reasoning on every call until we caught it.

Prompt caching is keyed differently everywhere. First-party OpenAI uses a dedicated cache-key field. Fireworks and Together ignore that field entirely and key the cache off the user field. Until we discovered this, multi-turn sessions were missing cache on every request on those hosts. Note what that failure looks like: successful responses, correct output, no errors anywhere. Without per-provider cache-hit metrics it reads as ordinary cost variance.

Usage accounting is inconsistent. Some OpenAI-compatible APIs include cached tokens inside prompt_tokens. If your cost pipeline assumes disjoint buckets, you double-bill yourself and every dashboard downstream is wrong.

Structured output support varies per host, and fails loudly only if you're watching. Baseten rejected response_format: json_schema outright. The result: zero of 336 structured calls succeeded over seven days, silently pinning that traffic entirely to Fireworks. Related: sending tool definitions alongside a structured-output request caused hard 400s on some providers and unparseable tool-call responses on others.

Streaming usage stats differ in shape. Baseten, which serves on vLLM, reports cumulative token counts on every streamed chunk rather than a single final total. Aggregate naively and you multiply your recorded usage by the chunk count. Fireworks returns 400 if you even request that option.

Prompts don't transfer verbatim. Prompts tuned for Claude accumulate chain-of-thought scaffolding, Anthropic-flavored structured-output instructions, and Anthropic-shaped tool definitions. On models where reasoning is a first-class API knob, "think step by step" scaffolding is over-specified and counterproductive. We built a deterministic adapter layer that restructures prompts per target model family instead of passing them through. Deterministic is the operative word: there is no model-generated translation in that path, so a given input, target model, and provider always produce the same request.

None of these are exotic, and the lesson isn't that one provider implemented the API correctly and the others didn't. There is no shared behavior at the edges. What you actually need is a conformance suite over every combination you depend on — model × provider × streaming mode × reasoning mode × tool use × structured output — because each of these failures quietly corrupts either your quality or your unit economics for weeks if you aren't measuring both.

## You're not buying a model, you're buying a serving stack#

With Anthropic, the model and the serving infrastructure come from one company. With open-weight models, the weights are a commodity and the serving stack is the product. We ran the same GLM 5.2 across Fireworks, Together, and Baseten, and it behaved differently on each in latency, stability, feature support, and price. Over our migration window, Fireworks averaged roughly 30% higher latency on our workloads than our Opus serving paths — enough of a gap to show up in user-visible response times.

So we stopped thinking of GLM as a provider and started treating it as a pool:

- Multiple independent serving providers behind one routing layer, each wrapped in a circuit breaker. When a provider degrades, its breaker opens and traffic shifts to healthy legs; breaker state propagates across our fleet so every node reacts together.

- We started with an even round-robin across Fireworks and Together, added Baseten as a third leg for its compliance-friendly static infrastructure, and eventually dropped Together. Then we realized even rotation was wrong: Baseten undercut Fireworks on every line of the rate card (roughly 20% cheaper) and ran faster at baseline, so an even split was buying more expensive, slower requests for zero reliability gain. We moved to priority routing: Baseten as primary, Fireworks as failover. Failover is deliberately not sticky, so a transient blip diverts one request instead of migrating the whole caller.

- Hand-picked priority is still a static answer to a moving question — rate cards change, and a provider that is fastest this month may not be next month. Which is why we eventually moved to adaptive routing: continuously sampling each provider's cost, reliability, and speed in production and sending the majority of traffic to whichever provider is currently winning on that blend, instead of waiting for a human to notice and re-rank the list.

- Claude remains wired in as the deep fallback. If the entire GLM pool is exhausted, traffic diverts to the Claude pool rather than failing.

The payoff from that machinery is as much diagnostic as it is uptime. On August 11, GLM code review threw more than 500 failures in a day, and the first instinct in the room was to move the whole workload back to Claude. It wasn't the model. A burst of 429s from one leg of the pool was short-lived, and the other leg's materially worse latency stretched the visible impact well past the actual outage. Without per-provider failover and per-provider metrics, every provider incident looks like a model-quality incident — and you end up making an expensive, permanent routing decision off a bad diagnosis.

Cost accounting had to change too. With one vendor per model, model + tokens = cost works. With a pool, the same model has a different rate card per provider, so every usage record has to carry the provider that actually served it, or your dashboards drift from your invoices.

And reliability cuts in every direction. We've had Fireworks suspend our account mid-day over a spending limit, taking a slice of production capability with it until we flipped that traffic back to Anthropic for a few hours. But we've also, earlier this year, moved traffic off Anthropic's direct API to Bedrock because of Anthropic-side reliability issues. Nobody in this market is stable enough to be a single point of failure. The failover machinery isn't GLM-specific insurance; it's just what running on anyone's inference looks like now.

## The regression, and what it taught us#

About a week after moving a major workload to GLM, our latency and quality metrics dipped. Two changes had shipped close together: the model swap, and an increase in the loop's turn budget. Untangling them took real aggregate analysis, not spot checks.

The root cause decomposed into exactly the behavioral differences from earlier: GLM explores more, errs more, and therefore consumes more turns per task, all on serving infrastructure that was already slower per call. The turn increase permitted the behavior but didn't cause it; the model's shape did. Framed precisely, GLM's weakness here isn't intelligence — it's exploration discipline and tool-call correctness.

That distinction matters when you're debugging an agent, because "the answers got worse after the model swap" is five failures:

- the model reasoned poorly;

- the model used tools differently;

- the loop gave that behavior too much room;

- the serving provider was slow or partially incompatible;

- the cost and latency instrumentation was wrong.

Telling them apart requires model output, tool behavior, provider health, latency, and cost measured together. Any one of those signals alone will point you at the wrong culprit.

The interesting outcome was a design question we're still working through: turn budgets were tuned for a model that averaged 2.4 tool calls per answer. A model that naturally explores more may deserve a tool-call budget instead of a turn budget, one that treats parallel tool calls as a single unit so the model is incentivized to batch its exploration rather than meander through it. Budgets designed around one model's temperament don't transfer to another's.

## The ledger, five weeks in#

We track unit cost per call for every agent flow, normalized per weekday, and decompose each week-over-week cost change into a volume effect (traffic moved) and a unit-cost effect (economics moved). Here's the window from mid-July, before the defaults flipped, through this week:

FlowGLM share of callsUnit cost per callChange vs pre-migration

Code review6% → 86%$0.089 → $0.027down 68%

Search agent2% → 43%$0.052 → $0.029down 43%

Internal MCP search (never migrated)0%~$0.024 → ~$0.024within a few percent

Three things worth pulling out:

- The drop is step-shaped and it holds. Code review's unit cost fell 68% in the single week the default flipped and has stayed there since. That fleet-wide number landing on the same 68% we measured in the controlled same-PR experiment is exactly what you want to see: the A/B predicted production.

- The control flow didn't move. The one flow still running entirely on Claude Sonnet and Haiku held its unit cost within a few percent across all five weeks. Whatever moved the other two lines, it wasn't seasonality or traffic mix.

- Volume grew while spend fell. In the search flow's migration week, call volume rose about 20% and per-weekday cost still fell 28%, because the unit-cost effect was more than twice the size of the volume effect. Search is only partway migrated: Opus still serves roughly a quarter of those calls, largely for compliance-constrained organizations, so the 43% is a blended number with room left in it.

One caveat on the unit: these are ledger calls, not completed reviews or answered questions. Calls are the right unit for infrastructure accounting and the wrong unit for product economics, so we watch both — cost per call, and end-to-end cost per completed task including retries, failed calls, cached input, and tool results.

## Where we are#

As of August 2026:

- Code review and Q&A default to GLM 5.2. Free-tier users moved first, then nearly all customers.

- Organizations with data processing agreements, or with contractual model-vendor or region restrictions, stay on Claude. Routing enforces this at request time: for a restricted org, a GLM-targeted request is rewritten to the Claude pool and never touches a GLM provider.

- Claude remains the failover pool and the compliance pool. This was never a full divorce.

- The split isn't only about compliance. Frontier models hold the core paths, where precision and instruction-following dominate; GLM takes the high-volume leaf work, where good enough is genuinely good enough. Model choice is a per-task policy now, not an application setting.

- For our single largest code-review customer, daily cost dropped 68% the day after the switch, with sentiment holding within our acceptance band.

- Provider selection inside the GLM pool is adaptive, continuously-sampling to determine the best provider on cost/reliability/speed dimensions

The evaluation harness has become permanent infrastructure. We continuously run candidate models through the same blind-sentiment pipeline, which is how we caught that a fashionable GPT-based alternative was far worse than either incumbent before any customer saw it, and it's how we'll judge GLM 5.3 and whatever comes after. Model choice stopped being a decision we made once and became a system we operate.

## What we'd tell anyone considering this#

- Measure cost per task, not cost per token. Per-token math promised 95% savings; per-task reality delivered 68%.

- Blind, production-grade evaluation beats benchmarks. Sentiment on real work, attributed per model, settled arguments that benchmark charts never could.

- Budget serious engineering time for the "compatible" API surface: reasoning formats, cache keys, structured output, usage accounting. Each provider differs, and the failures are silent.

- Treat providers as a pool with circuit breakers and priority routing from day one. You will need it in the first month.

- Keep a frontier model wired in as fallback and for compliance-constrained customers. Partial migration is a feature, not a compromise.

- Loop budgets encode a model's temperament. Swap the model and the budgets are wrong.

The frontier models are still better. Opus wins our precision measurements, makes fewer mistakes per task, and needs less babysitting. But for well-instrumented agent loops with tight evaluation feedback, the quality gap is now small enough, and the cost gap large enough, that defaulting to frontier models everywhere is hard to justify. The work is in the measurement and the serving infrastructure. That work turned out to be the actual migration.
