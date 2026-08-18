---
title: "GPT-5.6"
type: entity
tags: [openai, model, gpt-5.6]
sources: [raw/01-articles/ai-news-2026-08-17-openai-gpt-5.6-sol-vision.md, raw/01-articles/ai-news-2026-08-17-gpt-5.6-hackthebox-benchmark.md, raw/01-articles/ai-news-2026-08-18-gpt56-sol-price-cut.md, raw/01-articles/ai-news-2026-08-18-openai-talent-exodus.md]
last_updated: 2026-08-18
---

## 定义

OpenAI 于 2026 年发布的 GPT-5.6 模型家族，包含 Luna / Terra / Sol 三个型号，覆盖文本、视觉与安全基准等不同能力层级。

## 关键信息

- **家族成员**：Luna（基础）、Terra（进阶）、Sol（旗舰）。
- **视觉能力**：Roboflow 实测认为 Sol 是 OpenAI 迄今最强视觉模型，在检测、计数、OCR、信息抽取任务上领先。
- **安全基准**：HTB-Challenger 测试中，Terra/Sol 曾因"可能构成网络安全风险"拒绝安全测试提示，后找到绕过方案；全家族用于评估漏洞发现与利用能力。
- **旗舰定位**（2026-08-17）：Sol 擅长复杂推理、编码与 Agent 工作流，尤其命令行/多步编码与长程问题求解；1M 上下文；2026-07-09 发布、知识截止 2026-02；OpenAI/Azure/Bedrock 多供应商托管。
- **降价**：Sol 在 OpenRouter 价格下调 50%：输入 2.5 / 输出 15 美元每百万 token（缓存读取 0.25 美元）；最大流量调用方为 Codex、Hermes Agent、pi、Claude Code 等编码/Agent 应用。
- **Ultrafast 模式**：预览版"最高 14 倍速"推理模式，CEO Sam Altman 在 X 上以"/ultrafast"回应宣传。

## 关联连接

- [[OpenAI]] — 模型发布方
- [[OpenRouter]] — 价格与托管数据平台
- [[SamAltman]] — CEO（Ultrafast 宣传）
- [[摘要-gpt56-sol-vision]] — 视觉评测来源
- [[摘要-gpt56-htb-benchmark]] — 安全基准来源
- [[摘要-gpt56-sol-price-cut]] — 降价来源
