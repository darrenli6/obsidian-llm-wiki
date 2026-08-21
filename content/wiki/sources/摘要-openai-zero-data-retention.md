---
title: "摘要-openai-zero-data-retention"
type: source
tags: [openai, privacy, enterprise, safety]
sources: [raw/01-articles/ai-news-2026-08-21-openai-zero-data-retention.md]
last_updated: 2026-08-21
---

# 摘要：OpenAI 为前沿模型推出 Zero Data Retention（ZDR）并预览 Private Safety Processing（PSP）

> 来源：Techstrong.ai（Steven Vaughan-Nichols，2026-08-20）。原文见 `raw/01-articles/ai-news-2026-08-21-openai-zero-data-retention.md`

## 核心摘要

- **ZDR 是什么**：面向合规敏感的 API 客户（医疗、金融、商业机密、专有研究）的请求式数据控制选项——请求处理完成后不保留提示与输出，也不进入滥用监控日志；企业 API 数据默认不用于训练（除非客户显式选择加入）。
- **部署形态**：客户内容可留在客户控制的基础设施上；另有开发中的方案把内容放在 OpenAI 基础设施但用客户持有的密钥加密，OpenAI 员工不持有密钥副本。
- **限制与例外**：OpenAI 保留\"对特定客户使模型不适用 ZDR\"的权利；向量存储、线程等服务端状态仍会保留；法律义务（如疑似 CSAM）仍需人工审查与报告；ZDR 允许瞬时内存处理与自动滥用筛查，并非\"绝不保留任何数据\"。
- **安全张力**：ZDR 无法发现跨多轮提示/多账号/agentic 工作流的复杂风险——\"ZDR 找不到高级风险\"；这是所有 AI 厂商在隐私与安全之间的共同难题。
- **Private Safety Processing（PSP）**：预览功能，跨相关交互分析模式并返回窄范围的可疑活动信号，号称不向 OpenAI 员工暴露产生这些行为的提示/响应；技术白皮书预计 2026 年 9 月发布。
- **背景**：前沿模型安全监控（要求保留敏感内容）与数据最小化合规义务冲突，ZDR/PSP 是 OpenAI 对\"监控 vs 隐私\"矛盾的回应；同时把更多安全责任转移给客户。

## 关联连接

- [[OpenAI]] — 发布方
- [[多智能体安全]] — 安全监控与智能体风险的张力背景
- [[AI信任危机]] — 信任与数据治理背景
