---
title: "摘要-frontier-roundup-aug2026"
type: source
tags: [benchmark, model, frontier]
sources: [raw/01-articles/ai-news-2026-08-21-frontier-roundup-aug2026.md]
last_updated: 2026-08-21
---

# 摘要：Quesma 8 月前沿模型横评——Gemini 3.7 Flash / Grok 4.6 / DeepSeek V4 Pro 0813 加入前沿梯队

> 来源：Quesma Blog（Baba Is Bench 系列，2026-08-20）。原文见 `raw/01-articles/ai-news-2026-08-21-frontier-roundup-aug2026.md`

## 核心摘要

- **测评方法**：Baba Is Bench——用拼图游戏《Baba Is You》改编的 agent 基准（Stage 0: The Intro 8 关；Stage 1: The Lake 15 关），两轮制，考察 pass@1、pass@3、turns、输出 token 与总成本；作者称未发现模型\"背题\"迹象。
- **新模型阵容**：8 月中旬发布潮——Grok 4.6、Gemini 3.7 Flash、DeepSeek V4 Pro 0813，以及开源权重 Qwen3.8 Max、Qwen3.8 27B、GLM-5.3。
- **Gemini 3.7 Flash**：Intro 100% 全过，Lake 14/15，成本约为前代 Gemini 3.6 Flash 的 1/20 以下，成为最便宜梯队之一（仅略贵于 DeepSeek Pro），且解题速度快（多数关卡仅 Claude Fable 5 更快）。
- **Grok 4.6**：Intro 96%（8/8 pass@3），Lake 13/15，从 Grok 4.5 明显跃升（4.5 只过 6 关 Intro），成本降 3 倍以上；作者称\"第二梯队实验室追上了前沿\"。
- **DeepSeek V4 Pro 0813**：Intro 75%→Lake 13/15，是**第一个进入顶级梯队（Lake 13+ 关）的开源权重模型**，且全部模型中最便宜（Lake 阶段 $8.48）；此前 DeepSeek V4 Pro 只能过 3/8。
- **GLM-5.3**：与 GLM-5.2 结果几乎相同（Intro 96%，Lake 12/15），仅多解一关，但成本比前代便宜 2 倍。
- **Qwen3.8**：Max 比 3.7 Max 好但远未通关；27B 表现反而略降（在实验噪声内），作者引 Simon Willison 观察称其\"默认过度思考\"。
- **其余顶级对照**：Claude Fable 5 / Opus 5、GPT-5.5、GPT-5.6 Sol（Lake 14/15，成本仍最低之一）、Kimi K3、Gemini 3.1 Pro 等。
- **结论**：进展很快——更多玩家加入前沿竞赛，开源权重模型以前所未有的低价达到前沿水平；期待首个本地模型通关 The Lake。

## 关联连接

- [[Grok 4.6]] — 新晋前沿模型
- [[Gemini 3.7 Flash]] — 新晋前沿模型
- [[DeepSeek]] — 新晋前沿模型（开源权重）
- [[GLM-5.3]] — 参测模型
- [[GPT-5.6]] — 参测对照
- [[开源权重AI]] — 开源模型进前沿的意义
