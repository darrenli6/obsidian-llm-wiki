---
title: "llama.cpp"
type: entity
tags: [llama-cpp, open-source, tool, inference]
sources: [raw/01-articles/ai-news-2026-08-18-llamacpp-v010.md]
last_updated: 2026-08-18
---

## 定义

Georgi Gerganov（ggerganov）发起的开源 LLM 推理引擎（C/C++ 实现，GitHub 约 124k star），主打在消费级硬件上本地运行大模型，是开源权重模型生态的核心基础设施之一。

## 关键信息

- **定位**：本地/边缘推理，支持量化（GGUF）、多后端（CPU/GPU/Metal/CUDA），以低门槛运行 Llama 等开源模型著称。
- **版本混乱**：项目以每日多次提交著称，GitHub Actions 自动打标签造成版本号混乱；2026-08-17 误发 v0.1.0 标签引发 HN 热议，维护者澄清"请忽略"。
- **版本规划**：官方语义化版本管理（SemVer）即将就绪（讨论见 ggml discussions/1579），源码内部版本为 v0.20.1。

## 关联连接

- [[开源权重AI]] — 生态背景
- [[摘要-llamacpp-v010]] — 来源
