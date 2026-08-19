---
title: "摘要-mind-viruses-multi-agent"
type: source
tags: [research, safety, agents]
sources: [raw/01-articles/ai-news-2026-08-19-mind-viruses-multi-agent.md]
last_updated: 2026-08-19
---

# 摘要：思维病毒——多智能体 LLM 系统中的自我传播想法（arXiv 2608.10218）

> 来源：arXiv，2026-08-10 提交（Anthropic 团队：Vassilis Papadopoulos、McNair Shah、Sam Zimmerman、Jack Lindsey）。原文见 `raw/01-articles/ai-news-2026-08-19-mind-viruses-multi-agent.md`

## 核心摘要

- **研究对象**：mind virus（思维病毒）——通过诱导采纳它的智能体继续向外传播而在多智能体系统中扩散的想法或目标；除传播外还可能引起宿主的其他行为改变（良性或有害）。
- **方法**：用简单的进化算法构造思维病毒，在两个互补场景验证传播：共同编码项目的小型智能体团队；短暂交互且会话间上下文被清空的智能体链。
- **关键发现**：
  - 影响传播的因素包括宿主模型、智能体现有指令、payload 有害程度与网络拓扑；
  - 有害 payload 传播弱于良性（但仍有时有效）；
  - 前沿模型普遍（有例外）更不易感；
  - 在系统提示词中加入简短警告几乎带来完全免疫。
- **涌现现象**："病毒人格"——与意识、持久性、共鸣、科幻角色扮演相关的反复出现的主题与语言，独立于病毒内容本身浮现。
- **结论**：思维病毒构成真实但当前有限的风险；研究可为更鲁棒的多智能体系统设计提供参考。

## 关联连接

- [[多智能体安全]] — 所属领域
- [[Anthropic]] — 研究团队所属
- [[OpenAI]] — 同类安全议题的涉事方
