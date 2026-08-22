---
title: "llama.cpp"
type: entity
tags: [llama-cpp, open-source, tool, inference]
sources: [raw/01-articles/ai-news-2026-08-18-llamacpp-v010.md, raw/01-articles/ai-news-2026-08-22-liquidai-lfm25-dspark.md]
last_updated: 2026-08-22
---

## 定义

Georgi Gerganov（ggerganov）发起的开源 LLM 推理引擎（C/C++ 实现，GitHub 约 124k star），主打在消费级硬件上本地运行大模型，是开源权重模型生态的核心基础设施之一。

## 关键信息

- **定位**：本地/边缘推理，支持量化（GGUF）、多后端（CPU/GPU/Metal/CUDA），以低门槛运行 Llama 等开源模型著称。
- **版本混乱**：项目以每日多次提交著称，GitHub Actions 自动打标签造成版本号混乱；2026-08-17 误发 v0.1.0 标签引发 HN 热议，维护者澄清"请忽略"。
- **版本规划**：官方语义化版本管理（SemVer）即将就绪（讨论见 ggml discussions/1579），源码内部版本为 v0.20.1。
- **生态集成**（2026-08-21）：[[LiquidAI]] 的 LFM2.5 DSpark 投机解码模型首日支持 GGUF 格式（实验性 Metal 内核）；M4 Max 端侧实测 1.2B 模型最高 2.87x 吞吐提升，是端侧 [[投机解码]] 的关键载体（MoE 的 8B-A1B 在 Metal 后端端侧加速有限，仅 ~18%）。

## 关联连接

- [[开源权重AI]] — 生态背景
- [[投机解码]] — 新集成能力
- [[LiquidAI]] — DSpark 集成方
- [[摘要-llamacpp-v010]] — 来源
- [[摘要-liquidai-lfm25-dspark]] — DSpark 集成来源
