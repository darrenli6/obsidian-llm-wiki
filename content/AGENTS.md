
## 仓库性质

这是一个 **Obsidian 知识库**（第二大脑），使用 Claude Code 作为知识编译引擎。核心逻辑是"原材料 → 编译 → 结构化知识网络"：

- `raw/` — 待处理收件箱（原始资料）
- `wiki/` — 编译输出层（结构化知识）

## 技能命令

| 命令               | 功能                                                    |
| ---------------- | ----------------------------------------------------- |
| `/ingest`        | 扫描 `raw/` 下所有待处理文件，编译进 `wiki/`，并归档到 `raw/09-archive/` |
| `/ingest <path>` | 仅处理指定单个文件                                             |
| `/lint`          | 扫描 `wiki/` 检测死链、孤儿页面、未同步索引、知识冲突                       |
| `/query <问题>`    | 从 `wiki/index.md` 出发检索并回答，禁止凭模型记忆直接回答                 |

技能详细实现在 `.claude/skills/` 下各自的 `SKILL.md` 中。

## 目录结构约定

```
raw/
  01-articles/     # 网页剪藏
  02-papers/       # 论文 / PDF
  03-transcripts/  # 视频转录稿
  09-archive/      # ⛔ 已处理归档，禁止读取
wiki/
  index.md         # 全局注册表（每次新增页面必须更新）
  log.md           # 操作日志（Append-only）
  sources/         # 来源摘要页面
  entities/        # 实体页面（人物、公司、工具、产品）
  concepts/        # 概念页面（框架、方法论、理论）
  syntheses/       # 综合分析页面（/query 高价值回答固化）
```

## Frontmatter 规范

所有 `wiki/` 页面必须包含以下 frontmatter：

```yaml
---
title: "页面名称"
type: source | entity | concept | synthesis
tags: [标签列表]
sources: [关联的原始文件路径]
last_updated: YYYY-MM-DD
---
```

## 命名约定

- **实体页面**（`wiki/entities/`）：TitleCase，例：`TwoMinutePapers.md`、`亦仁.md`
- **概念页面**（`wiki/concepts/`）：中文或 PascalCase，例：`GraphRAG.md`、`AI技能侵蚀.md`
- **来源摘要**（`wiki/sources/`）：`摘要-{文件slug}.md`（kebab-case slug）

## Wiki 页面结构

每类页面必须包含的 Markdown 区块：

**sources 页面：**
```markdown
## 核心摘要
## 关联连接
```

**entities / concepts 页面：**
```markdown
## 定义
## 关键信息
## 关联连接
```

**`## 关联连接` 是硬性要求**，所有页面都必须包含，不能产生孤岛页面。

## index.md 注册格式

```markdown
- [[PageName]] — 单行描述（实体：身份定义；概念：核心含义；来源：核心主旨）
```

三个分类区块：`## Sources（来源摘要）`、`## Entities（实体）`、`## Concepts（概念）`。

## log.md 格式

```markdown
## [YYYY-MM-DD] <技能名> | <操作简述>
- **变更**: 新增/更新 [[PageName]]
- **冲突**: 无（或描述冲突）
```

Append-only，新条目追加到**顶部**（最新在上）。

## 核心约束

1. **禁止读取** `raw/09-archive/` 下的任何文件
2. **禁止修改**源文件内部文字（ingest 时仅移动文件）
3. 所有 wiki 页面内容使用**简体中文**
4. 发现知识冲突时**立即暂停**，向用户报告后再继续
5. `/lint` 报告生成后**等待用户确认**再执行修复
