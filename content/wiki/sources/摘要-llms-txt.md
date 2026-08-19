---
title: "摘要-llms-txt"
type: source
tags: [web, standard, llm]
sources: [raw/01-articles/ai-news-2026-08-19-llms-txt.md]
last_updated: 2026-08-19
---

# 摘要：llms.txt 的 2026 年实测——无平台承诺，但仍值得部署

> 来源：Geojacker（GEOJACKING），2026-08-18。原文见 `raw/01-articles/ai-news-2026-08-19-llms-txt.md`

## 核心摘要

- **llms.txt 是什么**：提议中的站点根目录 Markdown 文件，列出最重要的页面供 AI 系统优先读取；**不是标准**，且目前影响 AI 引用的证据很弱。
- **2026 实测数据**：
  - 采用率约 1/10（SE Ranking 30 万域名研究：10.13%；50 个最常被 AI 引用域名中只有 1 个有该文件）；
  - 爬虫几乎不读（Limy.ai 5 亿+ AI bot 事件中，直接请求 /llms.txt 的仅数百次；GPTBot/ClaudeBot/PerplexityBot/OAI-SearchBot/Google-Extended 主要爬 HTML）；
  - Google 明确不支持（Gary Illyes 确认；John Mueller 比作已失信的 keywords meta 标签）；
  - 截至 2026 无任何主要 AI 平台承诺在生产中读取/执行 llms.txt；
  - HTTP Archive 2025 Web Almanac：约 40% 已发布文件是插件生成的默认模板。
- **仍建议部署的理由**：成本近零（20 分钟）且期权真实（若 agentic 路由标准化）；写作过程是很好的内容审计强迫机制；本质是"面向智能体的业务界面"而非 SEO 工具。建议精心维护 10-40 个真正重要的页面，而非 sitemap 倾倒。

## 关联连接

- [[OpenAI]] — GPTBot/OAI-SearchBot 运营方
- [[Anthropic]] — ClaudeBot 运营方
- [[LLM投毒]] — 同属"LLM 如何采信网络内容"议题
