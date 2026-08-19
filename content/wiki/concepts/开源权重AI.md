---
title: "开源权重AI"
type: concept
tags: [open-weight, ai-policy, sovereignty]
sources: [raw/01-articles/ai-news-2026-08-17-jensen-huang-open-weight-ai.md, raw/01-articles/ai-news-2026-08-19-glm-agent-loops.md]
last_updated: 2026-08-19
---

## 定义

Open-Weight AI：公开模型权重、允许自由部署与二次开发的前沿 AI 分发模式，与闭源 API 模式相对。

## 关键信息

- **黄仁勋立场**：NVIDIA CEO 签署《Open Weights and American AI Leadership》公开信，主张"世界需要前沿闭源模型，也需要前沿开源模型"，称开源可支持创新、安全与主权。
- **核心争议**：开源权重 AI 与国家安全、监管、智能基础设施控制权之间的张力；谁拥有智能、谁控制 AI 基础设施成为政策焦点。
- **相关背景**：开源模型（如 DeepSeek、Llama 系）推动推理成本下降，让"主权 AI"成为可能，也引发出口管制与安全辩论。
- **GLM 工程实践**（2026-08）：Unblocked 将 agent 流量从 Claude Opus 迁至开源权重的 GLM 5.2（经 Fireworks/Together/Baseten 等第三方推理商服务），单任务成本降 68%，验证开源权重模型"工程上可替代前沿闭源模型"的高性价比路径；但"OpenAI-compatible" API 一致性（reasoning 字段、缓存键、结构化输出、用量统计）仍是工程痛点，需要一致性测试与多供应商池化。

## 关联连接

- [[JensenHuang]] — 公开信签署者
- [[NVIDIA]] — 立场相关公司
- [[摘要-jensen-huang-open-weight]] — 来源
- [[ZAI]] — 开源权重实践者
- [[GLM-5.3]] — 相关模型
- [[编码智能体]] — 应用场景
- [[摘要-glm-agent-loops]] — 工程实践来源
