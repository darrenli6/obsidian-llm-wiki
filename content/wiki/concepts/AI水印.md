---
title: "AI水印"
type: concept
tags: [watermark, transparency, policy]
sources: [raw/01-articles/ai-news-2026-08-19-claude-watermark.md]
last_updated: 2026-08-19
---

## 定义

在 AI 生成内容（文本、图像、文件）中嵌入不可见标识、以便区分人机产出的技术实践；2026 年因欧盟透明度准则成为主流厂商标配，也伴随误报与污名化争议。

## 关键信息

- **Anthropic 方案**（2026-08-02 起发布模型，全球适用）：文本水印基于 Google SynthID 思路（2024 Nature 论文）——词序、间距等统计模式，复制粘贴/轻度编辑不易去除、完全重写可去除；图像/文件采用 C2PA 加密签名元数据，篡改即破签。
- **合规驱动**：欧盟《AI 生成内容透明度行为准则》要求告知用户是否在与 AI 交互、为 AI 内容加水印；近 200 个组织签署。
- **能力边界**：只能证明"Claude 可能参与过"，无法区分"写的"与"重度编辑的"；内容量过小、截图重存、重度改写可能无水印。
- **争议**：Copyleaks CEO 批评水印是二元的、误报率高（用 AI 润色语法即全文被标 AI）；部分用户担忧"猩红字母"效应而退订；市场已出现去水印服务；检测工具本身可靠性存疑（非母语者内容易被误判）。
- **行业趋势**：Substack+Pangram、Suno、Spotify AI Persona 等均在推进 AI 内容透明化。

## 关联连接

- [[Anthropic]] — 主要实施方
- [[AI信任危机]] — 争议与信任背景
- [[摘要-claude-watermark]] — 来源
