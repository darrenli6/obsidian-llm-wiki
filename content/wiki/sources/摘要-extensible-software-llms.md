---
title: "摘要-extensible-software-llms"
type: source
tags: [llm, software, architecture, news]
sources: [raw/01-articles/ai-news-2026-08-20-extensible-software-llms.md]
last_updated: 2026-08-20
---

# 摘要：LLM 时代的可扩展软件（Jeremy Morrell 长文）

> 来源：jeremymorrell.dev（Cloudflare 工程师），2026-08-18。原文见 `raw/01-articles/ai-news-2026-08-20-extensible-software-llms.md`

## 核心摘要

- **论点**：主流 Web 软件是"静态"的，只服务需求曲线顶端；LLM 辅助编码让"一个人的软件"（Software for One / YC 所谓 Small Software）成为可能，但部署、安全、分享仍是瓶颈。
- **新机会**：可扩展软件（Extensible Software on the web）——应用以"稳定可信的核心 + 用户可安全扩展"形态存在，LLM 大幅降低编写扩展的成本，现代沙箱原语降低部署成本并提供安全边界。
- **扩展面**：AI 智能体（Pi 提供工具/命令/事件/UI 稳定钩子、DeepSeek 演示纯靠提示扩展 UI）、企业内部平台、支持工单平台、可观测性平台（非确定性 agent 与持久工作流让传统 trace 瀑布图不够用）。
- **安全模型**：执行不可信代码风险极高（数据外泄、DoS、加密货币挖矿、Spectre 等）；主张"能力"（capability）而非代理 token——给扩展代码精确的能力引用（如"获取指定邮件"），参考 Salesforce 自 2007 年 Apex 的规模化先例与 IFTTT 模式。
- **技术选型**：解释器（Lua/QuickJS）、V8 isolates、MicroVM（Firecracker 等）、WASM+WASI；作者认为 Cloudflare Dynamic Workers 是 2026 年最接近"开箱即用的可扩展 Web 应用框架"。

## 关联连接

- [[LLM时代软件可扩展性]] — 对应概念页
- [[编码智能体]] — 扩展面之一
- [[多智能体安全]] — 沙箱/不可信代码执行背景
