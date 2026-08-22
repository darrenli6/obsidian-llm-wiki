---
title: "Quesma 8 月前沿模型横评：Gemini 3.7 Flash、Grok 4.6、GLM-5.3、DeepSeek V4 Pro 0813 加入前沿梯队"
type: article
tags: [benchmark, model, frontier]
source_url: https://quesma.com/blog/baba-is-aug-2026/
ingested: 2026-08-21
sha256: ec8a953891525560f97b4178f3839d8c681b7badb5bf0cfe8f5c730c9fb0cba3
summary: "Quesma 用 Baba Is Bench 拼图游戏基准横评 8 月中旬新发布模型：Gemini 3.7 Flash 全过且比前代便宜 20 倍、Grok 4.6 升入顶级梯队、DeepSeek V4 Pro 0813 成为首个进入顶级梯队的开源权重模型且最便宜，GLM-5.3 与 Qwen3.8 进步有限。"
---

# Quesma 8 月前沿模型横评：Gemini 3.7 Flash、Grok 4.6、GLM-5.3、DeepSeek V4 Pro 0813 加入前沿梯队

> 原文：https://quesma.com/blog/baba-is-aug-2026/（ingested 2026-08-21）

Gemini 3.7 Flash, Grok 4.6, GLM-5.3 and DeepSeek V4 Pro joined the frontier - Quesma Blog
Skip to main content
This mid August is as hot as July when it comes to LLM releases: Grok 4.6 , Gemini 3.7 Flash , DeepSeek V4 Pro 0813 as well as open-weight models: Qwen3.8 Max , Qwen3.8 27B , and GLM-5.3 .
Intelligence Index vs. Cost per Intelligence Index Task
from Artificial Analysis . Note that it is based on score of benchmarks like
Terminal-Bench v2.1, SciCode, Humanity’s Last Exam, GPQA Diamond - not necessarily fluid intelligence like in abstract
puzzle games of ARC-AGI-3 or Baba is You.
Since these models are smart, I decided to rerun the Baba Is Bench , to see how the models fare on a puzzle game. Even though the game is popular, we check for spoilers - and to our surprise, there are no signs of models knowing solutions ahead - unlike in SWE-bench Verified .
Results are stunning for Grok, Gemini Flash or DeepSeek. Don’t get deceived by minor version changes - they all give qualitatively different results! For both GLM and Qwen the progress was more gradual.
As previously, we do it in two rounds. First, asking to play the initial stage the Intro , then for those who pass at least 7/8 levels, also the next one the Lake .
Stage 0: The Intro
We show the models we analyze, against dimmed previous ones.
Model 00 baba is you 01 where do i go? 02 now what is this? 03 out of reach 04 still out of reach 05 volcano 06 off limits 07 grass yard pass@1 ↓ pass@3 ↓ Turns ↓ Output tokens ↓ Total cost ↑
Gemini 3.7 Flash 100% 100% 53 22k $5.38
Claude Opus 5 100% 100% 7 23k $17.15
GPT-5.5 100% 100% 8 15k $13.62
Claude Fable 5 100% 100% 6 29k $40.98
GPT-5.6 Sol 100% 100% 11 10k $11.91
Grok 4.6 96% 100% 25 52k $14.01
GLM-5.3 96% 100% 13 47k $6.20
Kimi K3 96% 100% 9 29k $12.56
Claude Opus 4.8 96% 100% 35 46k $63.14
GLM-5.2 96% 100% 12 75k $6.20
Gemini 3.1 Pro 92% 100% 8 38k $12.41
Gemini 3.6 Flash 88% 100% 92 82k $124.31
GPT-5.6 Terra 88% 100% 41 55k $34.28
DeepSeek V4 Pro 0813 75% 88% 18 130k $2.94
DeepSeek V4 Flash 75% 100% 55 190k $2.82
Grok 4.5 75% 88% 86 68k $50.66
DeepSeek V4 Flash 0731 75% 88% 22 156k $1.16
Claude Sonnet 5 67% 88% 22 151k $42.21
GPT-5.6 Luna 63% 88% 118 129k $59.32
Qwen3.8 Max 58% 75% 9 66k $10.75
Qwen3.6 27B 29% 38% 24 82k $5.59
DeepSeek V4 Pro 29% 38% 37 183k $11.49
Qwen3.7 Max 25% 38% 21 132k $16.98
Qwen3.8 27B 21% 38% 9 134k $9.07
solved timeout wrong answer not solved
The results are nothing short of stunning, as both results went up and prices went down significantly.
Gemini 3.7 Flash now solves every trial, and is over 20x cheaper than its predecessor, Gemini 3.6 Flash.
Grok 4.6 solved all but one attempt (vs Grok 4.5 that missed 6 attempts and one level), while being over 3x cheaper.
DeepSeek V4 Pro 0813 solved 7/8 levels vs its previous version that solved only 3/8 - and while being 4x cheaper.
Gemini 3.6 Flash Gemini 3.7 Flash Grok 4.5 Grok 4.6 DeepSeek V4 Pro DeepSeek V4 Pro 0813 DeepSeek V4 Flash 0731 GLM-5.3
With the GLM and Qwen family there is less success:
GLM-5.3 got exactly the same result as GLM-5.2.
Qwen3.8 Max is better than Qwen3.7 Max (way more attempts solved), but still far from completing all levels.
Qwen3.8 27B has worse results than Qwen3.6 27B - though, all within experimental noise.
I was surprised that it didn’t do better. Especially as Qwen3.8 27B scores 52 on Artificial Analysis . From what I’ve seen in the transcripts, it tried to solve in one go, without actually exploring the board. It matches Simon Willison’s experience that Qwen3.8 27B defaults to wildly overthinking things . While Baba Is You clearly needs thinking, it is a balance of thinking and testing. Compare and contrast with previous Grok and Gemini Flash models that were doing a lot and thinking too little.
Gemini 3.7 Flash Claude Opus 5 GPT-5.5 Claude Fable 5 GPT-5.6 Sol Grok 4.6 GLM-5.3 Kimi K3 Claude Opus 4.8 GLM-5.2 Gemini 3.1 Pro Gemini 3.6 Flash GPT-5.6 Terra DeepSeek V4 Pro 0813* DeepSeek V4 Flash Grok 4.5* DeepSeek V4 Flash 0731* Claude Sonnet 5* GPT-5.6 Luna*
It is interesting to look at the chart of agent turns and price. Grok and Gemini Flash moved from trigger-happy models, to more moderate ones, resulting in a significantly reduced cost.
Stage 1: The Lake
For models that passed at least 7 out of 8 intro levels, we run them on the next stage, the Lake .
Only one attempt per level, as it is costly. Or at least - it used to be costly with the previous models, as now it is getting significantly better.
Model Harness Solved Total time Output tokens Total cost
Claude Fable 5 Claude Code 14 2h 36m 10.7M $53.25
Claude Opus 5 Claude Code 14 6h 46m 16.3M $61.96
Gemini 3.7 Flash Terminus-2 14 9h 11m 1023.1M $55.76
GPT-5.6 Sol Codex 14 9h 16m 16.4M $31.42
GPT-5.5 Codex 13 8h 57m 50.1M $102.08
Grok 4.6 Terminus-2 13 20h 16m 38.6M $46.20
DeepSeek V4 Pro 0813 Claude Code 13 22h 7m 75.6M $8.48
Claude Opus 4.8 Claude Code 12 9h 7m 49.9M $107.76
GLM-5.3 Terminus-2 12 24h 57m 9.6M $16.85
GLM-5.2 Claude Code 11 23h 41m 62.9M $37.51
Kimi K3 kimi-cli 11 29h 34m 129.5M $78.15
Gemini 3.1 Pro Terminus-2 8 5h 58m 41.8M $58.17
Gemini 3.6 Flash Terminus-2 6 7h 46m 1118.1M $269.48
DeepSeek V4 Flash 0731 Claude Code 6 24h 11m 92.8M $4.31
solved stopped failed
Time
First, let’s look at the wall time, for models run via APIs.
While it might change with providers, or model bandwidth at a given time, it gives a ballpark estimate of effective model speed. In everyday software engineering it is what we care for, anyway.
Gemini 3.7 Flash Grok 4.6 DeepSeek V4 Pro 0813 DeepSeek V4 Flash 0731 Claude Opus 5 Kimi K3 Gemini 3.6 Flash GPT-5.6 Sol GPT-5.5 Claude Fable 5 Claude Opus 4.8 GLM-5.2 GLM-5.3 Gemini 3.1 Pro
And wow, Gemini 3.7 Flash is fast - not only per token (which is widely cited but largely irrelevant), but per problem solved. Here, for most levels, only Claude Fable 5 is faster.
Grok 4.6, while 2x slower than GPT-5.6 Sol, still manages to solve 13 of 15 levels (GPT-5.6 Sol solves 14). It’s a promotion to the league of top models.
DeepSeek V4 Pro 0813 might be the slowest of the top models - but it is the first open-weight model that finally reached the same top league. It is way beyond GLM-5.2 or Kimi K3 results.
GLM-5.3 was almost the same as GLM-5.2, to the point that two lines overlap; though, it solved one more level.
Cost
Now let’s look at costs. It’s beautiful.
Gemini 3.7 Flash Grok 4.6 DeepSeek V4 Pro 0813 DeepSeek V4 Flash 0731 Claude Opus 5 Kimi K3 Gemini 3.6 Flash GPT-5.6 Sol GPT-5.5 Claude Fable 5 Claude Opus 4.8 GLM-5.2 GLM-5.3 Gemini 3.1 Pro
Grok 4.6 is cheaper than Fable 5, but more expensive than GPT-5.6 Sol or Opus 5.
While Gemini 3.6 Flash was ridiculously expensive , Gemini 3.7 Flash is one of the cheapest models. At 12 levels, it is twice as cheap as GPT-5.6 Sol, the previous cheapest model. At 13 tasks it is still twice as cheap. Only vs DeepSeek Pro is it slightly more expensive.
What happens with DeepSeek V4 Pro 0813 is a pure wonder. Not only is it open-weight, but also the cheapest of all.
GLM-5.3 was 2x cheaper than its predecessor.
Some lessons about harnesses
In previous experiments we used various harnesses. Here we used Harbor -default Terminus-2, except DeepSeek, which we ran on Claude Code. While there are Grok Build and DeepSeek Harness , results were slightly worse (Grok) or vastly inferior (DeepSeek). That said, these are newer tools, and likely to get improved in the future. If there is interest, we’re happy to share more insight on running with various harnesses — they influence both cost and results.
Conclusion
Progress is fast - with more players joining the frontier game, and open-weight models reaching frontier-level results at a much lower price. And I am looking forward to seeing more models in the coming months. And to the first local model solving the Lake.
As my colleague Piotr Grabowski noticed:
“Second-tier labs caught up with the frontier” matches my experience: last few days I’ve been using Grok 4.6 or GLM-5.3 for easy/medium difficulty tasks and couldn’t see major difference between them and Opus 5/GPT-5.6 Sol (for harder tasks yes, there’s still gap).
And what is your experience?
Previous
HN
Claude Code pricing: same tokens, same model, up to 40x the price
Claude Code buyer’s guide, August 2026: what Max, Team, and Enterprise cost, how to get the best deal, and how Uber and Shopify cap the spend.
Related
Kimi K3 is Open, Opus 5 is Good, DeepSeek V4 Flash is Cheap: LLMs on Baba Is You
We evaluate July 2026 fresh releases Kimi K3, Claude Opus 5, Grok 4.5, Gemini 3.6 Flash, and DeepSeek V4 Flash 0731 on Baba Is Bench, an LLM agent benchmark based on the puzzle game Baba Is You, comparing pass rate, speed, and cost with Claude Fable 5 and GPT-5.6.
Related
Baba Is Solved by Fable 5 and GPT-5.6 Sol, but at what cost?
We ported the puzzle game Baba Is You to the Harbor framework, and benchmarked current models, including Claude, GPT, Gemini, GLM, and DeepSeek. A human Twitch streamer is 4x faster than Claude Fable 5.
