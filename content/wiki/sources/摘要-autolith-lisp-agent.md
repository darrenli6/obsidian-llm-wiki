---
title: "摘要-autolith-lisp-agent"
type: source
tags: [coding-agents, open-source, lisp, tool]
sources: [raw/01-articles/ai-news-2026-08-21-autolith-lisp-agent.md]
last_updated: 2026-08-21
---

# 摘要：Autolith——带实时运行时的 Common Lisp 编程智能体

> 来源：Lambda Symbolics OÜ（项目主页，2026-08-20 上 HN）。原文见 `raw/01-articles/ai-news-2026-08-21-autolith-lisp-agent.md`

## 核心摘要

- **定位**：终端编程智能体，直接工作在仓库里：可读写文件、搜索工作区、运行命令与测试、保持项目上下文，无需离开对话即可使用 Common Lisp。
- **实时 Lisp 运行时**：内置 SBCL 运行时可供其检视、测试与扩展——能热替换运行中的函数/方法/类/宏/条件/全局设置，改动即时生效并记录在 append-only 变更日志中；可用改动可固化为\"私有镜像提交\"（含完整可执行 Lisp 重放脚本，保存在独立私有 Git 历史中）。
- **单进程设计**：agent 与其工具运行在同一进程（Common Lisp 镜像内含 provider 客户端、终端界面、工具注册表、会话状态、持久记忆、工作区议程与决策代码）；直接对接 ChatGPT Codex 订阅服务，不启动 Codex CLI。
- **状态分层**：源码、对话、记忆、实时变更、精确堆、可丢弃实验各有不同生命周期与持久化表面（对话/记忆/议程/私有镜像提交/世代/worker 镜像/恢复镜像）。
- **恢复能力**：可移植会话（append-only S-expressions、精确恢复命令、崩溃尾部修复）；独立构建的 pristine 镜像可在不加载损坏 core 的情况下检查崩溃并选择已知可用世代。
- **安全边界**：明确警告——模型生成代码以用户权限执行，进程边界只保护可靠性、不防恶意代码；\"用作开发 agent，不是安全沙箱\"；提供 `--immutable` 只读模式。
- **安装**：Linux x86-64，二进制自带 SBCL 依赖；推荐 Nix 路线；源码在 github.com/luciusmagn/autolith。

## 关联连接

- [[编码智能体]] — 所属类别
- [[LLM时代软件可扩展性]] — 相关范式（可检视/可扩展的 agent 结构）
- [[llama.cpp]] — 本地推理基础设施对照
