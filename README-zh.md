# Obsidian LLM Wiki

[English README](./README.md)

Obsidian LLM Wiki 是一个自托管知识库系统，可以把 Obsidian 笔记发布成可搜索的网站。它会将 Markdown 笔记转换为 Next.js 页面，并支持 Wiki 链接、全文搜索、主题切换和交互式三维知识图谱。

项目地址：[github.com/darrenli6/obsidian-llm-wiki](https://github.com/darrenli6/obsidian-llm-wiki)

## 运行截图

### 笔记页面

![笔记页面](./public/page.png)

### 三维知识图谱

![三维知识图谱](./public/graph.png)

## 功能

- 根据 `content/` 目录结构自动生成页面路由。
- 支持 Obsidian Markdown 和 MDX。
- 支持 `[[AgenticRAG]]`、`[[AgenticRAG|相关概念]]` 等 Wiki 链接。
- 支持全文模糊搜索，并在构建时自动生成搜索索引。
- 根据 `content/wiki` 中的 Wiki 链接自动生成 Three.js 三维知识图谱。
- 支持节点标签、分类颜色、三维旋转、缩放、悬停反馈和点击跳转笔记。
- 支持左侧 Directory 导航、浅色主题和深色主题。
- 支持代码高亮、GFM 表格和 KaTeX 数学公式。
- 可部署到 Vercel 或其他 Node.js 主机。

## 技术栈

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Three.js · next-mdx-remote · next-themes

## 快速开始

```bash
git clone https://github.com/darrenli6/obsidian-llm-wiki.git
cd obsidian-llm-wiki
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)。

将 Obsidian Markdown 笔记放入 `content/` 目录。设置 `publish: false` 可以隐藏笔记；没有设置该字段的笔记默认发布。

```yaml
---
title: Agentic RAG
type: concept
tags: [RAG, AI]
publish: true
---
```

## 知识图谱

知识图谱读取 `content/wiki` 下的 Markdown 文件：

- 文件会生成节点。
- frontmatter 中的 `type` 决定节点分类和颜色。
- `[[WikiLink]]` 会生成节点之间的关系。
- 点击节点可以打开对应笔记。
- 拖拽可以旋转三维场景，滚轮可以缩放。
- 使用全屏按钮可以获得更大的图谱视图。

支持的分类包括：`entity`、`concept`、`source` 和 `synthesis`。

## 项目结构

```text
app/                         Next.js 路由和布局
components/                  UI 和交互式图谱组件
content/                     Obsidian Markdown 内容
data/                        内容目录配置
lib/content.ts               内容加载和路由工具
lib/knowledge-graph.ts       知识图谱提取
lib/remark-obsidian-links.ts Obsidian 链接转换
public/                      静态资源和运行截图
scripts/                     搜索索引生成脚本
```

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 在 Vercel 中导入该仓库。
3. 使用 `pnpm build` 作为构建命令。
4. 完成部署。

[使用 Vercel 部署](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdarrenli6%2Fobsidian-llm-wiki)

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
