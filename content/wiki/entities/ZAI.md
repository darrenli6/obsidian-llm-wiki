---
title: "ZAI"
type: entity
tags: [glm, company, china]
sources: [raw/01-articles/ai-news-2026-08-19-glm-5-3-benchmarks.md, raw/01-articles/ai-news-2026-08-19-glm-agent-loops.md, raw/01-articles/ai-news-2026-08-22-patronus-glm52-nvfp4.md, raw/01-articles/ai-news-2026-08-22-netic-agent-graph.md]
last_updated: 2026-08-22
---

## 定义

GLM 系列大模型的开发商（智谱 AI，z.ai），中国头部 AI 公司，2026 年以 [[GLM-5.3]] 冲击前沿模型市场，同时以开源权重路线提供低成本推理。

## 关键信息

- **旗舰模型**：GLM-5.3 (max)（2026-08-18）——AA 智能指数 60 分（第 8/181），1M 上下文，闭源纯文本推理模型。
- **开源权重路线**：GLM 5.2 为开源权重模型，可经 Fireworks/Together/Baseten 等第三方推理商服务，单价约为前沿闭源模型的 1/3；Unblocked 实测迁移后单任务成本降 68%。
- **市场地位**：与 DeepSeek、Kimi 等中国厂商一同压低推理价格，构成 OpenAI/Anthropic 价格战的外部压力（FT 报道背景）。
- **工程生态**："OpenAI-compatible" API 各家推理商实现不一，工程团队需要一致性测试与多供应商池化（见 [[摘要-glm-agent-loops]]）。
- **语音 agent 采用**（2026-08-20，Netic）：语音 agent 公司 Netic 用单个开源权重 GLM 5.2（+ Kimi K2.6）替换 223 节点对话图后，containment/预定率各 +15 点、TTFT 减半至 ~500ms——开源权重模型"单模型+全上下文"架构成为生产级语音 agent 的可行路线（见 [[摘要-netic-agent-graph]]）。
- **NVFP4 后训练生态**（2026-07，Patronus AI）：NVIDIA 发布 NVFP4 4-bit GLM-5.2（744B MoE）checkpoint 后，[[PatronusAI]] 用 bf16 LoRA + DAPO 成功做 RL 后训练，证明 4-bit 对 SFT/RL 几乎无损；GLM-5.2 亦采用 DeepSeek Sparse Attention（DSA）。

## 关联连接

- [[GLM-5.3]] — 旗舰模型
- [[开源权重AI]] — 相关分发模式
- [[OpenAI]] — 主要竞争对象
- [[编码智能体]] — 应用生态
- [[DeepSeek]] — 中国同行
- [[摘要-patronus-glm52-nvfp4]] — NVFP4 后训练来源
- [[摘要-netic-agent-graph]] — 语音 agent 采用来源
