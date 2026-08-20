---
title: "摘要-hetzner-inference-experiment"
type: source
tags: [open-weight, inference, cloud, news]
sources: [raw/01-articles/ai-news-2026-08-20-hetzner-inference-experiment.md]
last_updated: 2026-08-20
---

# 摘要：Hetzner 推理实验一周复盘——开源权重模型需求远超预期

> 来源：Hetzner 工程博客，2026-08-17。原文见 `raw/01-articles/ai-news-2026-08-20-hetzner-inference-experiment.md`

## 核心摘要

- **实验**：德国云服务商 Hetzner 推出"推理实验"——免费开放其自建基础设施上的开源权重 LLM 推理 API（OpenAI 兼容），供任意 agent/工具接入；模型含 Qwen3.6-35B-A3B、Kimi-K2.7-Code、GLM-5.2、DeepSeek-V4-Flash-0731（Kimi K3 因许可要求无法免费提供）。
- **需求爆发**：8 月 7 日开放模型、8 月 10 日开始宣传，数小时内即触及容量上限；99 分位首 token 延迟（TTFT）一度飙至近 10 分钟，API 几乎不可用。
- **使用画像**：DeepSeek 最受关注、请求最复杂（大量输入输出 token）；Qwen 请求量最大但单个请求小；GLM 延迟最高、最需调优；一周后实验缩减规模，暂停大模型、仅继续服务 Qwen 3.6/3.8 等小模型。
- **信号**：验证了开源权重模型推理需求的真实规模远超基础设施预期；开源权重"免费/低成本推理"是真实增长市场；欧洲数据主权（"完全欧盟境内"）成为差异化卖点。

## 关联连接

- [[开源权重AI]] — 核心概念
- [[ZAI]] — GLM-5.2 模型来源方
- [[多智能体安全]] — 实验观察到的恶意/滥用流量与限流
