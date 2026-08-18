---
title: "OpenRouter"
type: entity
tags: [openrouter, tool, api, platform]
sources: [raw/01-articles/ai-news-2026-08-18-gpt56-sol-price-cut.md]
last_updated: 2026-08-18
---

## 定义

多模型 API 聚合与路由平台，一个 OpenAI 兼容接口接入数百家模型供应商，并提供价格、延迟、吞吐、可用性与基准的横向对比数据。

## 关键信息

- **路由模式**：Balanced（价格+速度均衡）、Nitro（最快）、Exacto（工具调用准确率最高）；上游出错时自动切换健康供应商。
- **价格情报**：2026-08-17 显示 GPT-5.6 Sol 降价 50%（2.5/15 美元每百万 token，缓存 0.25 美元）；实际支付价常低于挂牌价。
- **生态信号**：流量最大的 Sol 调用方为 Codex（376B tokens）、Hermes Agent（207B）、pi、Claude Code 等编码/Agent 应用，反映真实生产负载。
- **可观测性**：提供逐供应商 uptime、吞吐（最高 61 tok/s）与基准分（GPQA Diamond 90.6-92.3%）数据。

## 关联连接

- [[GPT-5.6]] — 在平台托管的旗舰模型
- [[OpenAI]] — 模型来源方
- [[摘要-gpt56-sol-price-cut]] — 来源
