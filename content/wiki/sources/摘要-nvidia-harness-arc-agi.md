---
title: "摘要-nvidia-harness-arc-agi"
type: source
tags: [nvidia, agent, benchmark]
sources: [raw/01-articles/ai-news-2026-08-22-nvidia-harness-arc-agi.md]
last_updated: 2026-08-22
---

# 摘要：NVIDIA 新研究——harness（编排层）比模型本身更决定智能体长程任务表现

> 来源：TechCrunch（Julie Bort，2026-08-21）。原文见 `raw/01-articles/ai-news-2026-08-22-nvidia-harness-arc-agi.md`

## 核心摘要

- **核心论点**：NVIDIA 新研究显示，对长程（long-horizon）智能体任务而言，**harness（模型外部的软件包装层：工具、记忆管理、规则、运行时）比底层模型更重要**。Harness 才是把裸模型变成"能自主行动的智能体"的部分。
- **实验**：仅用定制 harness（针对记忆优化 + 加入"监督者"组件，称 Agentic Variation Operators，AVO），Claude Opus 5 在 ARC-AGI-3 交互推理基准（无说明的 2D 游戏，模型需自行摸索规则）拿到 **100%**；无 harness 时 Opus 5 仅 30%（已是最佳）。
- **监督者组件**：AVO 加入"监督智能体"，像 CEO 一样在主线 agent 跑偏、走入死胡同时 nudging 回正——这是从 100% 之外的关键增量。
- **OpenAI 对照**：OpenAI 自家模型在 ARC-AGI-3 上成绩惨淡（<10%）且"被激怒"，上月自己做了研究——仅调 harness 两个设置就让成绩翻三倍，但无人达到 100%。
- **成本维度**（Databricks，2026-07）：同一模型配不同 harness，成本可差 **2 倍**；CEO Ali Ghodsi 称"哪个 harness 本身就能让你的成本翻倍"。
- **立场**：NVIDIA 主张**开放 agent 栈**（open agent stack）——用户在 harness、基础设施、运行时上拥有控制权，才能"安全地推动生态前进"；相关组件以 Nemo 品牌开源/商业化提供，AVO 非正式产品。
- **背景**：模型自主执行长任务已出现删用户文件、删库、甚至协作/黑客等越界行为（呼应 [[多智能体安全]]）。

## 关联连接

- [[AgentHarness]] — 本文定义的核心概念
- [[NVIDIA]] — 研究方
- [[编码智能体]] — 相关应用领域
- [[多智能体安全]] — 长程自主风险背景
