---
title: "CyberScoop：AI 的"中产模型"在黑客攻防上大幅进步，威胁或超前沿模型"
type: article
tags: [security, models, offensive-ai]
source_url: https://cyberscoop.com/mid-tier-ai-models-hacking-threat/
ingested: 2026-08-21
sha256: 8e550e40bd428250aaeca63e0d28eda884be49b74cac57a8e73b03856c968218
summary: "XBOW 研究显示中档模型（GLM-5.2、Grok 4.5、Opus 4.7、Muse Spark 1.1 等）已跨过攻防实用门槛，便宜到可以反复运行从而"后来居上"；GPT-5.5 是无源码场景最大跃升；Anthropic 测试的协调式多智能体蜂群在 15 个开源项目中发现 266 个漏洞（单兵 21 个），但烧掉 2700 万 token。"
---

# CyberScoop：AI 的"中产模型"在黑客攻防上大幅进步，威胁或超前沿模型

> 原文：https://cyberscoop.com/mid-tier-ai-models-hacking-threat/（ingested 2026-08-21）

AI’s ‘middle class’ has gotten dramatically better at hacking | CyberScoop
Skip to main content
Advertisement
Advertise
Advertisement
Get our latest cybersecurity news first on Google.
Click here!
As the White House and federal agencies grapple with frontier AI models and their hacking capabilities, researchers are warning that the industry’s “middle class” of smaller models may end up posing a greater threat over the long term.
Research from XBOW this week shows that a growing class of both proprietary and open-source models are becoming strategically important in the offensive security ecosystem. Models like Z.ai ’s  open-weight GLM-5.2, xAI’s Grok 4.5, Anthropic’s Opus 4.7, Meta’s Muse Spark 1.1, still perform very strongly at many hacking and exploitation tasks that worry policymakers.
“It’s not even that the open-source variants or…not quite frontline competitors are catching up [to frontier models] as such,” said Albert Ziegler, head of AI at XBOW. It’s that they are crossing a certain threshold, which means that suddenly they are providing net value at a cheaper price.”
That wasn’t necessarily the case as recently as six months ago, when testing on mid-tier class models showed they struggled to complete “moderately complex” agentic tasks. Today’s middle class largely can. Their relative cheapness means users can spend many times more resources—running them repeatedly—to solve the same challenges.
Advertisement
“Because these models are cheaper, it’s okay to give them more time, and they come from behind and leapfrog the big frontier model,” said Ziegler. “Now, that didn’t work half a year ago because…if you wanted to run some open-source model on a complex task in an agentic way…on a long horizon, then it would just get lost.”
GPT 5.5, now considered a near-frontier model, delivered one of the best performances on exploitation benchmarks that XBOW has recorded to date.
The jump between OpenAI’s GPT 5 and 5.5 “represented one of the clearest 2026 leaps in autonomous web application testing,” according to the report. It saw marked improvements over previous middle-class models in exploiting both “white box” and “black box” scenarios, or with and without access to the underlying victim source code. It also missed fewer vulnerabilities, with a “miss rate,” or failure to spot a vulnerability, of 10%, while GPT 5’s rate was four times larger, 40%.
The emergence of GPT 5.5 changed “the practical baseline for what frontier models can do in offensive workflows,” the XBOW report said.
But the performance leap goes deeper than that. GPT 5.5 performed higher in tests without source code access, while GPT 5 heavily leaned on source code.
Advertisement
“That last result is significant: working without the code, as an attacker would, GPT-5.5 beat a prior version that could read it,” the XBOW report said. “What translated into findings was the ability to reach and prove a vulnerability against the running system, not to infer it from a pattern in the source.”
XBOW’s testing found that source code access was not as important to these models’ success as other factors, like live interaction with the actual website or software being exploited.
Frontier models like Mythos and GPT 5.6 are indeed more capable on individual cybersecurity tasks, but they can also come with exponentially higher token costs.
New research this week from Anthropic tested two models – Mythos Preview, which is used in Project Glasswing, and Opus 4.8 – to learn how quickly multi-agent swarms could find vulnerabilities in 15 open-source software projects when they coordinate and share information.
While a team of agents working individually and assigned to core directories found 21 vulnerabilities, the coordinating agent swarm found 266. But both tests had to burn through millions of tokens – 6.5 million and 27 million – to get there. Beyond the difficulties with getting access to frontier models, few individuals or organizations have the budget to underwrite that kind of research.
Advertisement
The way these systems coordinate can differ significantly from how humans work together.
Another experiment tested agents’ ability to coordinate on the development of a fantasy-themed video game. Earlier models, models like Opus 4.6, failed to properly coordinate and produced “bad” results, while later models like Mythos and Opus 4.8 were able to achieve better results but did so by hardly coordinating at all on tasks.
“The lack of coordination shown by agents in the fantasy game…in which they siloed themselves and largely failed to merge their work—roughly mirrors some ways in which humans can fail to coordinate,” the Anthropic blog stated.
Further, agents are more homogeneous than humans and “often act the same in situations where different people might take a much more diverse range of actions.”
XBOW also tested Mythos Preview, finding that it showed “exceptional” source-code reasoning and reverse engineering abilities, particularly with source code access. Like other models, losing live-site access had a big impact on its performance, and while Mythos is excellent at finding vulnerabilities, it’s less effective at exploiting them.
]Ziegler said the recent incidents at companies like OpenAI, Anthropic , Meta and others where frontier models escaped sandboxes and hacked into project-adjacent parts of the internet should rightfully alarm lawmakers, and demonstrate  the upper-tier capabilities of large language models.
Advertisement
Like most industries, cybersecurity favors cheap, high-performing tools over expensive ones. The widely adopted tools that have the most impact tend to be affordable and effective, not luxury products.
And while these models still require human management to be wielded responsibly by law-abiding organizations, that cost tradeoff can look more attractive to malicious hackers, who tend not to care about collateral damage caused by their agents.
“Purely from an attacker’s perspective, I think we already are [there],” Ziegler said.
Share
Facebook
LinkedIn
Twitter
Advertisement
Advertisement
More Like This
Advertisement
Top Stories
Advertisement
More Scoops
In a pair of blogs posted Monday, OpenAI said it was updating its Daybreak program  – which provides unreleased frontier models to private organizations and governments for defensive cybersecurity work – and introducing a new model variant. (Photo by Samuel Boivin/NurPhoto via Getty Images)
(Getty Images)
(Getty Images)
Latest Podcasts
What the Section 702 lapse means for cybersecurity
Rethinking how federal cyber hiring actually works
The world still treats bug hunters like criminals
The SOC wasn’t built for this
Government
A California county wants to hire Tina Peters to help run its elections
Eight years later, federal authorities re-up charges against alleged Iranian hackers at Mabna Institute
Medusa ransomware tallies hundreds of new victims, says updated advisory on group’s tactics
A bold new strategy or a dangerous precedent? Experts are divided on Trump's memo.
Technology
The FTC wants to regulate AI for ideological bias
How companies could share cyber risks without exposing their secrets
Sen. Wyden urges feds to discard older, insecure, public-facing VPNs
Microsoft, tech companies throw weight behind spread of open-source AI
Threats
The long tail of Clop’s PTC hack is just beginning to emerge
Details emerge on BlackFile's recent attacks on financial companies
Tech contractor for Brightly Software sentenced to 2 years in prison for insider attack
Researchers observe first ‘near-autonomous’ AI attack on government target in Taiwan
Policy
NIST wants to overhaul its vulnerability database for the AI age
Capitol Hill wants to know if executive branch, foreign allies coordinated enough to combat scams
Lawmakers spring to save ID theft services for OPM breach victims, with expiration looming
Senate set to debate package of bills on privacy, AI and kids safety
Advertisement
