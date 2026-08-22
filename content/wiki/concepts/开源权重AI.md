---
title: "开源权重AI"
type: concept
tags: [open-weight, ai-policy, sovereignty]
sources: [raw/01-articles/ai-news-2026-08-17-jensen-huang-open-weight-ai.md, raw/01-articles/ai-news-2026-08-19-glm-agent-loops.md, raw/01-articles/ai-news-2026-08-20-hetzner-inference-experiment.md, raw/01-articles/ai-news-2026-08-22-patronus-glm52-nvfp4.md, raw/01-articles/ai-news-2026-08-22-liquidai-lfm25-dspark.md, raw/01-articles/ai-news-2026-08-22-netic-agent-graph.md]
last_updated: 2026-08-22
---

## 定义

Open-Weight AI：公开模型权重、允许自由部署与二次开发的前沿 AI 分发模式，与闭源 API 模式相对。

## 关键信息

- **黄仁勋立场**：NVIDIA CEO 签署《Open Weights and American AI Leadership》公开信，主张"世界需要前沿闭源模型，也需要前沿开源模型"，称开源可支持创新、安全与主权。
- **核心争议**：开源权重 AI 与国家安全、监管、智能基础设施控制权之间的张力；谁拥有智能、谁控制 AI 基础设施成为政策焦点。
- **相关背景**：开源模型（如 DeepSeek、Llama 系）推动推理成本下降，让"主权 AI"成为可能，也引发出口管制与安全辩论。
- **GLM 工程实践**（2026-08）：Unblocked 将 agent 流量从 Claude Opus 迁至开源权重的 GLM 5.2（经 Fireworks/Together/Baseten 等第三方推理商服务），单任务成本降 68%，验证开源权重模型"工程上可替代前沿闭源模型"的高性价比路径；但"OpenAI-compatible" API 一致性（reasoning 字段、缓存键、结构化输出、用量统计）仍是工程痛点，需要一致性测试与多供应商池化。
- **推理需求实证**（2026-08-17，Hetzner）：德国云服务商 Hetzner 免费开放开源权重模型推理 API（Qwen 3.6、Kimi-K2.7-Code、GLM-5.2、DeepSeek-V4-Flash），上线数小时即触容量上限、99 分位 TTFT 峰值近 10 分钟，一周后被迫缩减至仅服务小模型——证明开源权重推理需求远超基础设施预期；许可条款（如 Kimi K3 不允许免费提供）也会限制开源模型的分发方式。
- **可训练性实证**（2026-07，[[PatronusAI]]）：开源权重的 GLM-5.2（744B MoE）即便经 NVIDIA NVFP4 4-bit 量化，仍可用 bf16 LoRA + RL（DAPO）在 8×B200 上后训练且质量几乎无损——开源权重意味着"谁都能微调"，包括低成本量化适配路线。
- **端侧与生产落地**（2026-08）：[[LiquidAI]] 的 LFM2.5 全系开放权重并首发 DSpark 投机解码（端侧提速最高 2.87x，见 [[投机解码]]）；Netic 用开源权重 GLM 5.2/Kimi K2.6 支撑生产级语音 agent（自持推理满足延迟预算，累计 $500M+ 自主预约）。

## 关联连接

- [[JensenHuang]] — 公开信签署者
- [[NVIDIA]] — 立场相关公司
- [[摘要-jensen-huang-open-weight]] — 来源
- [[ZAI]] — 开源权重实践者
- [[GLM-5.3]] — 相关模型
- [[编码智能体]] — 应用场景
- [[DeepSeek]] — 开源权重前沿代表
- [[LiquidAI]] — 开源权重新玩家
- [[投机解码]] — 端侧推理技术
- [[摘要-glm-agent-loops]] — 工程实践来源
- [[摘要-hetzner-inference-experiment]] — 推理需求来源
- [[摘要-patronus-glm52-nvfp4]] — 可训练性来源
- [[摘要-liquidai-lfm25-dspark]] — 端侧落地来源
- [[摘要-netic-agent-graph]] — 生产落地来源
