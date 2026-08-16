# Obsidian LLM Wiki

[English](#english) · [中文 README](./README-zh.md)

<a id="english"></a>

## English

Obsidian LLM Wiki is a self-hosted knowledge base for publishing an Obsidian vault as a searchable website. It turns Markdown notes into routed Next.js pages and adds Wiki-style links, full-text search, theme switching, and an interactive 3D knowledge graph.

Repository: [github.com/darrenli6/obsidian-llm-wiki](https://github.com/darrenli6/obsidian-llm-wiki)

## Preview

### Published note

![Published note page](./public/page.png)

### Interactive 3D knowledge graph

![Interactive 3D knowledge graph](./public/graph.png)

## Features

- File-based routing from `content/`.
- Obsidian Markdown and MDX rendering.
- Wiki links such as `[[AgenticRAG]]` and `[[AgenticRAG|related concept]]`.
- Full-text fuzzy search with a generated search index.
- Interactive Three.js 3D knowledge graph built from `content/wiki` relationships.
- Node labels, category colors, orbit controls, zoom, hover feedback, and note navigation.
- Directory navigation with a dedicated graph entry point.
- Light and dark themes.
- Syntax highlighting, GFM tables, and KaTeX math rendering.
- Vercel-ready deployment.

## Tech Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Three.js · `next-mdx-remote` · `next-themes`

## Getting Started

```bash
git clone https://github.com/darrenli6/obsidian-llm-wiki.git
cd obsidian-llm-wiki
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Place your Obsidian Markdown files inside `content/`. The folder structure becomes the URL structure. Set `publish: false` to hide a note; notes are published by default unless they explicitly set this flag.

```yaml
---
title: Agentic RAG
type: concept
tags: [RAG, AI]
publish: true
---

Related notes: [[GraphRAG]] and [[Knowledge Graph|knowledge graphs]].
```

## Knowledge Graph

The graph is generated from Markdown files under `content/wiki`.

- Files become graph nodes.
- The frontmatter `type` controls the node category and color.
- `[[WikiLink]]` references become graph edges.
- Click a node to open the related note.
- Drag to rotate the 3D scene; scroll to zoom.
- Use the fullscreen control for a larger graph view.

Supported categories include `entity`, `concept`, `source`, and `synthesis`.

## Project Structure

```text
app/                         Next.js routes and layouts
components/                  UI and interactive graph components
content/                     Obsidian Markdown content
data/                        Content directory configuration
lib/content.ts               Content loading and routing helpers
lib/knowledge-graph.ts       Wiki graph extraction
lib/remark-obsidian-links.ts Obsidian link transformation
public/                      Static assets and screenshots
scripts/                     Search index generation
```

## Deployment

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Use `pnpm build` as the build command.
4. Deploy.

[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdarrenli6%2Fobsidian-llm-wiki)

## Scripts

```bash
pnpm dev          # Generate the search index and start the dev server
pnpm build:index  # Generate the search index
pnpm build        # Build the production application
pnpm start        # Start the production server
pnpm lint         # Run Biome linting
pnpm format       # Format the project with Biome
```

## License

MIT License. See [LICENSE](./LICENSE).

<a id="中文"></a>

## 中文

Obsidian LLM Wiki 是一个自托管知识库系统，可以把 Obsidian 笔记发布成可搜索的网站。它会将 Markdown 笔记转换为 Next.js 页面，并支持 Wiki 链接、全文搜索、主题切换和交互式三维知识图谱。

项目地址：[github.com/darrenli6/obsidian-llm-wiki](https://github.com/darrenli6/obsidian-llm-wiki)

## 功能

- 根据 `content/` 目录结构自动生成页面路由。
- 支持 Obsidian Markdown 和 MDX。
- 支持 `[[AgenticRAG]]`、`[[AgenticRAG|相关概念]]` 等 Wiki 链接。
- 支持全文模糊搜索。
- 根据 `content/wiki` 中的 Wiki 链接自动生成 Three.js 三维知识图谱。
- 支持节点标签、分类颜色、旋转、缩放、悬停反馈和点击跳转笔记。
- 支持左侧 Directory 导航、浅色主题和深色主题。
- 支持代码高亮、GFM 表格和 KaTeX 数学公式。

## 快速开始

```bash
git clone https://github.com/darrenli6/obsidian-llm-wiki.git
cd obsidian-llm-wiki
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 即可访问。

将 Obsidian 笔记放入 `content/` 目录。设置 `publish: false` 可以隐藏笔记；没有设置该字段的笔记默认发布。

## 知识图谱

知识图谱读取 `content/wiki` 下的 Markdown 文件：

- 文件会生成节点。
- frontmatter 中的 `type` 决定节点分类和颜色。
- `[[WikiLink]]` 会生成节点之间的关系。
- 点击节点可以打开对应笔记。
- 拖拽可以旋转三维场景，滚轮可以缩放。
- 使用全屏按钮可以获得更大的图谱视图。

支持的分类包括 `entity`、`concept`、`source` 和 `synthesis`。

## 常用命令

```bash
pnpm dev          # 生成搜索索引并启动开发服务器
pnpm build:index  # 生成搜索索引
pnpm build        # 构建生产版本
pnpm start        # 启动生产服务器
pnpm lint         # 执行 Biome 检查
pnpm format       # 使用 Biome 格式化
```

## 许可证

本项目使用 MIT License，详见 [LICENSE](./LICENSE)。
