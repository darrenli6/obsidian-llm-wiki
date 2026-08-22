---
title: "DeepSeek"
type: entity
tags: [company, model, china]
sources: [raw/01-articles/ai-news-2026-08-21-frontier-roundup-aug2026.md, raw/01-articles/ai-news-2026-08-22-patronus-glm52-nvfp4.md]
last_updated: 2026-08-22
---

## 定义

深度求索（DeepSeek）——中国头部 AI 公司，DeepSeek 系列模型开发者，以开源权重与极低推理成本著称；DeepSeek V4 Pro 0813 成为首个进入 Quesma 前沿梯队的开源权重模型。

## 关键信息

- **前沿突破**（2026-08，Quesma Baba Is Bench）：DeepSeek V4 Pro 0813 全过 Intro、Lake 13/15，与 Grok 4.6 / Gemini 3.7 Flash 同列顶级梯队，且是其中**最便宜**的——首个进入前沿梯队的开源权重模型。
- **技术贡献**：DeepSeek-V3.2 引入 DeepSeek Sparse Attention（DSA，lightning indexer + 细粒度 token 选择，注意力从 O(L²) 降到 O(Lk)）；DSA 被 [[ZAI]] GLM-5.2 采用（Patronus AI 后训练博客实证）。
- **生态影响**：与 GLM、Kimi 等中国厂商一同压低推理价格，构成对 OpenAI/Anthropic 定价的外部压力；开源权重路线让"主权 AI"与低成本推理成为可能。

## 关联连接

- [[开源权重AI]] — 核心路线
- [[ZAI]] — 中国同行/竞品
- [[Grok 4.6]] — 同级竞品
- [[摘要-frontier-roundup-aug2026]] — 基准来源
- [[摘要-patronus-glm52-nvfp4]] — DSA 技术来源
