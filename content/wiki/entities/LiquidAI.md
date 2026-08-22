---
title: "LiquidAI"
type: entity
tags: [company, model, inference]
sources: [raw/01-articles/ai-news-2026-08-22-liquidai-lfm25-dspark.md]
last_updated: 2026-08-22
---

## 定义

Liquid AI——Liquid Foundation Models（LFM）系列模型的开发商，MIT 衍生公司，主打"AI 运行在任何地方"的开放权重路线，聚焦端侧/边缘推理与 agentic 负载。

## 关键信息

- **模型家族**：LFM2.5 系列（2026-08）——LFM2.5-1.2B-Instruct（非推理）、LFM2.5-2.6B（推理）、LFM2.5-8B-A1B（MoE 推理）；全部开放权重，可自由下载/微调/部署。
- **DSpark 投机解码**（2026-08-21）：为 LFM2.5 发布首批公开投机解码草稿模型（~300M 参数），H100 吞吐最高 3.18x、M4 Max 端侧最高 2.87x，llama.cpp（GGUF）与 SGLang 首日支持。
- **端侧定位**：LFM2.5-2.6B 目标为"首个可用的端侧 agentic 模型"——函数调用场景延迟降 57%，M4 Max 上 ~140 tok/s 超过多数专有云模型交互水平。
- **工程特色**：训练与消融在 AMD 硬件上完成；与 [[llama.cpp]]、SGLang 生态深度集成；8B-A1B 的 MoE 在 Metal 后端端侧加速有限（~18%），团队公开数据待优化。

## 关联连接

- [[投机解码]] — 核心技术路线
- [[llama.cpp]] — 集成生态
- [[开源权重AI]] — 分发模式
- [[摘要-liquidai-lfm25-dspark]] — 来源
