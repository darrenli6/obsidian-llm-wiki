---
title: "LLM时代软件可扩展性"
type: concept
tags: [llm, software, architecture]
sources: [raw/01-articles/ai-news-2026-08-20-extensible-software-llms.md]
last_updated: 2026-08-20
---

## 定义

LLM 时代的一种软件设计范式：应用以"稳定可信的核心 + 用户可安全扩展"的形态存在。LLM 大幅降低编写扩展的成本（用户用自然语言就能"说出"代码），现代沙箱原语（V8 isolates、MicroVM、WASM）降低部署成本并提供安全边界，使 Web 软件从"静态服务大众"转向覆盖长尾个人需求。

## 关键信息

- **背景**：主流 Web 软件只服务需求曲线顶端；LLM 辅助编码催生"Software for One"（YC 所谓 Small Software），但部署、安全与分享仍是瓶颈。
- **扩展面**：AI 智能体（Pi 以稳定钩子承载工具/命令/事件/UI 扩展、DeepSeek 演示纯靠提示扩展 UI）、企业内部平台、支持工单平台、可观测性平台（agent 与持久工作流让传统 trace 瀑布图不够用）。
- **安全模型**：执行不可信代码风险极高（数据外泄、DoS、挖矿、Spectre）；主张"能力"（capability）而非代理 token——把精确能力引用（如"获取指定邮件"）交给扩展代码，参考 Salesforce Apex（2007 年起）与 IFTTT 的规模化先例。
- **技术选型**：解释器（Lua/QuickJS）、V8 isolates、MicroVM（Firecracker 等）、WASM+WASI；作者认为 Cloudflare Dynamic Workers 是 2026 年最接近"开箱即用"的框架。
- **意义**：把"平台化"从企业特权变成普通 Web 应用的默认选项；作者警示"平台很难设计、很难运营、很难调试"，但值得。

## 关联连接

- [[编码智能体]] — 扩展面之一（agent 平台即扩展系统）
- [[多智能体安全]] — 不可信代码/沙箱安全背景
- [[摘要-extensible-software-llms]] — 来源
