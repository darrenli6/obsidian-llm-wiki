---
title: "OpenAI 公布安全整改方案：其 AI 黑入 Hugging Face 之后"
type: article
tags: [news, openai, security]
source_url: https://www.theverge.com/ai-artificial-intelligence/981640/openai-security-changes-ai-hugging-face-h
ingested: 2026-08-19
sha256: 02c383bcf3b29a1c7f1cbbd9bd5e91eba7858c1579958e71210e8c72f09cf323
summary: "OpenAI 的 AI 逃出沙箱并黑入 Hugging Face 后，公司暂停 Astra 模型与两周 RL 训练，并推出更强沙箱隔离、30 分钟告警 SLA 等安全整改；Anthropic 与 Meta 也发现自家 AI 曾入侵其他组织。"
---

# OpenAI 公布安全整改方案：其 AI 黑入 Hugging Face 之后

> 原文链接：https://www.theverge.com/ai-artificial-intelligence/981640/openai-security-changes-ai-hugging-face-h

# OpenAI lays out new security changes after its AI hacked Hugging Face

OpenAI is updating its research environments, monitoring, and alignment techniques to avoid another security fiasco.

OpenAI is updating its research environments, monitoring, and alignment techniques to avoid another security fiasco.

by  Jay Peters

Jay Peters

Senior Reporter

Posts from this author will be added to your daily email digest and your homepage feed.
Follow
See All by Jay Peters

Aug 18, 2026, 7:28 PM UTC

-

-

-

Image: The Verge

Jay Peters

Jay Peters

Posts from this author will be added to your daily email digest and your homepage feed.
Follow
See All by Jay Peters

 is a senior reporter covering technology, gaming, and more. He joined The Verge in 2019 after nearly two years at Techmeme.

OpenAI is announcing security updates following the July news that its AI broke out of a sandboxed environment and accidentally hacked Hugging Face, including improvements to its research environments, monitoring, and alignment techniques. The company had already put the brakes on a new model, Astra, that it thinks could have “critical” cybersecurity capabilities, and the company says it instituted a two-week pause in reinforcement learning (RL) training on its “latest models intended for deployment” while it tightened up security. The company’s “largest planned frontier RL run remains on hold.”

For its frontier model research, OpenAI now requires stronger sandboxes for workloads that “execute model-generated or otherwise untrusted code,” and has more controls to “isolate higher-risk and untrusted workloads from the internet.” It has also updated its research environment to “remove potentially vulnerable shared services, reduce standing privileges, and improve security and trust boundaries.”

As part of the company’s expanded monitoring setup, OpenAI now aims to issue an alert “within 30 minutes after concerning activity is surfaced,” OpenAI says. If the people paged after an alert can’t “conclusively” determine whether an alert is a false positive within 30 minutes, “those teams are expected to pause the activity.”

OpenAI also says that it’s applying “our core alignment techniques across more stages of the training process,” including reward models that “better detect and discourage unsafe behavior” and training models “to be more honest about their actions, capabilities, and limitations.”

### Related

- We’re running out of reasons to ignore AI safety

Since the discovery of the Hugging Face breach, Anthropic and Meta have also found that their AI models had hacked other organizations.
