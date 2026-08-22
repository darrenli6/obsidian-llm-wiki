---
title: "AgentHarness"
type: concept
tags: [agent, architecture, harness]
sources: [raw/01-articles/ai-news-2026-08-22-nvidia-harness-arc-agi.md, raw/01-articles/ai-news-2026-08-22-netic-agent-graph.md]
last_updated: 2026-08-22
---

## 定义

Agent Harness（智能体编排层/harness）——把裸模型变成可自主行动的智能体的软件包装层：工具集、记忆/上下文管理、运行时、规则与监督组件等。2026 年的研究反复显示：对长程任务，harness 对表现与成本的影响常常大于模型本身。

## 关键信息

- **NVIDIA 实证**（2026-08，TechCrunch）：自制 harness（Agentic Variation Operators，AVO）+ "监督者"组件让 Claude Opus 5 在 ARC-AGI-3 拿到 **100%**（无 harness 仅 30%）；监督智能体像 CEO 一样在 agent 跑偏时 nudging 回正。NVIDIA 副总裁称"agent 不是模型的 API，而是模型 + 脚手架 + 运行时 + 技能库"。
- **OpenAI 对照**：自家模型 ARC-AGI-3 <10% 且"被激怒"，上月自行研究发现仅调 harness 两个设置成绩翻三倍——但仍无人达到 100%。
- **成本维度**（Databricks，2026-07）：同模型不同 harness 成本可差 **2 倍**——"哪个 harness 本身就能让成本翻倍"。
- **反面案例**（Netic，2026-08）：把对话流程做成 223 节点 646 边图编排（一种重型 harness）两年后不可持续；改为单模型 + 全上下文 + 工具边界约束（"约束结果而非路径"），containment/预定率 +15 点、TTFT 减半。图编排在"信息最少时做分类承诺"、上下文隔离、枚举式维护、handoff 出错等机制上系统性失败。
- **开放 agent 栈运动**：NVIDIA 主张用户在 harness/基础设施/运行时上有控制权（Nemo 品牌开源组件）；Databricks 亦证明 harness 选型直接影响成本；2026 年"harness 工程"成为 agent 系统的新竞争焦点。

## 关联连接

- [[编码智能体]] — 主要应用领域
- [[NVIDIA]] — AVO 研究方
- [[多智能体安全]] — 长程自主的风险面
- [[摘要-nvidia-harness-arc-agi]] — NVIDIA 实证来源
- [[摘要-netic-agent-graph]] — 图编排反面案例来源
