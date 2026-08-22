---
title: "摘要-liquidai-lfm25-dspark"
type: source
tags: [model, inference, open-source]
sources: [raw/01-articles/ai-news-2026-08-22-liquidai-lfm25-dspark.md]
last_updated: 2026-08-22
---

# 摘要：Liquid AI 发布 LFM2.5 DSpark 投机解码模型——推理提速最高 3.2 倍

> 来源：Liquid AI 官方博客（2026-08-21 上 HN）。原文见 `raw/01-articles/ai-news-2026-08-22-liquidai-lfm25-dspark.md`

## 核心摘要

- **发布内容**：为 LFM2.5 家族三个模型（LFM2.5-1.2B-Instruct、LFM2.5-2.6B、LFM2.5-8B-A1B）发布 **DSpark 草稿模型**（~300M 参数），这是 LFM 首次公开投机解码模型；当日即获 llama.cpp（GGUF）与 SGLang 支持。
- **原理**：decode 阶段受显存带宽限制（从 DRAM 读权重比计算更耗时）。投机解码用轻量草稿模型先生成候选 token，目标模型一次前向批量验证；DSpark 组合三组件：DFlash 风格并行主干 + 马尔可夫链顺序头 + 置信度调度验证器。
- **实测提速**：H100 上最高 **3.18x**（8B-A1B MATH500：428→1362 tok/s）、M4 Max 端侧最高 **2.87x**（1.2B HumanEval：136→389 tok/s）；LFM2.5-2.6B 在 BFCL 函数调用场景平均**降低 57% 延迟**——"推理前思考"正是 agentic 负载痛点。
- **质量无损**：贪心解码下草稿 token 必须与目标分布一致才被接受，输出序列与基线逐位相同，基准准确率不变。
- **端侧定位**：LFM2.5-2.6B 目标为"**首个可用的端侧 agentic 模型**"；M4 Max 上可达 ~140 tok/s（超过多数专有云模型的交互水平）。
- **开源**：全部开放权重；训练与消融在 AMD 硬件上完成；MoE 模型（8B-A1B）在 llama.cpp Metal 后端端侧加速有限（仅 18%，MoE 权重流量所致），团队公开数据以待后续优化。

## 关联连接

- [[LiquidAI]] — 出品公司
- [[投机解码]] — 核心技术
- [[llama.cpp]] — 首日集成方
- [[开源权重AI]] — 分发模式
