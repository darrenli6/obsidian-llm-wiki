# Ingest 操作日志

## [2026-08-22] update | Index refreshed

- **变更**: 扫描文件系统（sources/、entities/、concepts/、syntheses/）与 [[index.md]] 比对，索引已与页面完全同步
  - 新增索引 0 条（文件系统中无 index 缺失页面）
  - 移除索引 0 条（index 中无指向不存在页面的死链）
  - 当前总页数 83（Sources 45 / Entities 27 / Concepts 11 / Syntheses 0）
  - index 头部 Last updated / Total pages 已为最新（2026-08-22 / 83），无需修改
- **冲突**: 无

## [2026-08-22] ingest | AI News 日报（6 篇文章）

- **来源文件**:
  - `raw/01-articles/ai-news-2026-08-22-nvidia-harness-arc-agi.md`
  - `raw/01-articles/ai-news-2026-08-22-zdnet-ai-coding-addictive.md`
  - `raw/01-articles/ai-news-2026-08-22-liquidai-lfm25-dspark.md`
  - `raw/01-articles/ai-news-2026-08-22-patronus-glm52-nvfp4.md`
  - `raw/01-articles/ai-news-2026-08-22-leiden-declaration-ai-math.md`
  - `raw/01-articles/ai-news-2026-08-22-netic-agent-graph.md`
- **变更**:
  - 新增来源摘要 [[摘要-nvidia-harness-arc-agi]], [[摘要-zdnet-ai-coding-addictive]], [[摘要-liquidai-lfm25-dspark]], [[摘要-patronus-glm52-nvfp4]], [[摘要-leiden-declaration-ai-math]], [[摘要-netic-agent-graph]]
  - 新增实体 [[LiquidAI]], [[PatronusAI]], [[Suno]], [[DeepSeek]]
  - 新增概念 [[AgentHarness]], [[投机解码]], [[AI训练数据版权]]
  - 更新实体 [[NVIDIA]]（AVO harness 研究）、[[ZAI]]（语音 agent 采用/NVFP4 生态）、[[GLM-5.3]]（开源权重同系）、[[llama.cpp]]（DSpark 集成）
  - 更新概念 [[编码智能体]]（成瘾/倦怠、编排层之争）、[[AI信任危机]]（开发者倦怠、莱顿宣言）、[[开源权重AI]]（可训练性、端侧落地）
  - 更新 [[index.md]]（83 页）
- **冲突**: 无（"AI 编码成瘾 vs 生产力提升"为新增视角，与既有 Linear 正面数据分条并列，未覆盖旧结论）
- **归档**: 6 个新源文件 + 17 个 08-20/08-21 已处理遗留文件一并移入 `raw/09-archive/01-articles/`

## [2026-08-22] update | 索引同步与死链修复（补 08-21 遗留）

- **变更**:
  - 索引补录 4 个 Sources：[[摘要-ai-generated-mathematics]], [[摘要-autolith-lisp-agent]], [[摘要-cyberscoop-mid-tier-models]], [[摘要-roundhill-suno-anthropic]]（页面已存在但未入索引）
  - 索引补录 2 个 Entities：[[Gemini 3.7 Flash]], [[Grok 4.6]]（同上）
  - 新建 [[Suno]], [[DeepSeek]], [[AI训练数据版权]] 三个页面，修复 08-21 建页遗留的 3 个死链
  - 为 4 个遗留孤立来源页补入链：[[OpenAI]]（rogue-agent/zero-data-retention）、[[Anthropic]]（india-economic）、[[编码智能体]]（autolith）
- **冲突**: 无

## [2026-08-21] update | Index refreshed

- **变更**: 扫描文件系统（sources/、entities/、concepts/、syntheses/）与 [[index.md]] 比对，索引已与页面完全同步
  - 新增索引 4 条（文件系统中存在但 index 缺失：Sources 4）
  - 移除索引 0 条（index 中无指向不存在页面的死链）
  - 当前总页数 64（Sources 35 / Entities 21 / Concepts 8 / Syntheses 0）
  - index 头部 Last updated / Total pages 已更新（2026-08-21 / 64）
- **冲突**: 无

## [2026-08-20] update | Index refreshed

- **变更**: 扫描文件系统（sources/、entities/、concepts/、syntheses/）与 [[index.md]] 比对，索引已与页面完全同步
  - 新增索引 13 条（文件系统中存在但 index 缺失：Sources 9 / Entities 4）
  - 移除索引 0 条（index 中无指向不存在页面的死链）
  - 当前总页数 58（Sources 31 / Entities 21 / Concepts 6 / Syntheses 0）
  - index 头部 Last updated / Total pages 已更新（2026-08-20 / 58）
- **冲突**: 无

## [2026-08-19] update | Index refreshed

- **变更**: 扫描文件系统（sources/、entities/、concepts/、syntheses/）与 [[index.md]] 比对，索引已与页面完全同步
  - 新增索引 0 条（文件系统中无 index 缺失页面）
  - 移除索引 0 条（index 中无指向不存在页面的死链）
  - 当前总页数 45（Sources 22 / Entities 17 / Concepts 6 / Syntheses 0）
  - index 头部 Last updated / Total pages 已为最新（2026-08-19 / 45），无需修改
- **冲突**: 无

## [2026-08-19] ingest | AI News 日报（8 篇文章）

- **来源文件**:
  - `raw/01-articles/ai-news-2026-08-19-openai-security-changes.md`
  - `raw/01-articles/ai-news-2026-08-19-glm-5-3-benchmarks.md`
  - `raw/01-articles/ai-news-2026-08-19-anthropic-revenue-65b.md`
  - `raw/01-articles/ai-news-2026-08-19-mind-viruses-multi-agent.md`
  - `raw/01-articles/ai-news-2026-08-19-claude-watermark.md`
  - `raw/01-articles/ai-news-2026-08-19-linear-ai-usage.md`
  - `raw/01-articles/ai-news-2026-08-19-glm-agent-loops.md`
  - `raw/01-articles/ai-news-2026-08-19-llms-txt.md`
- **变更**:
  - 新增来源摘要 [[摘要-openai-security-changes]], [[摘要-glm-5-3-benchmarks]], [[摘要-anthropic-revenue-65b]], [[摘要-mind-viruses-multi-agent]], [[摘要-claude-watermark]], [[摘要-linear-ai-usage]], [[摘要-glm-agent-loops]], [[摘要-llms-txt]]
  - 新增实体 [[GLM-5.3]], [[ZAI]], [[HuggingFace]], [[Linear]]
  - 新增概念 [[多智能体安全]], [[AI水印]], [[编码智能体]]
  - 更新实体 [[OpenAI]]（智能体安全事件、营收对比 $40B vs $65B）、[[Anthropic]]（$65B 营收/IPO/水印/政策摩擦）
  - 更新概念 [[开源权重AI]]（GLM 开源权重工程实践）、[[AI信任危机]]（安全事件与水印争议）
  - 更新 [[index.md]]（45 页）
- **冲突**: 无（本次为新建页面 + 既有页面增量合并；OpenAI 页原有"HTB 基准中拒绝安全提示"与今日"智能体黑入 Hugging Face"属不同事件，均已如实分条记录）
- **归档**: 八个源文件已移入 `raw/09-archive/01-articles/`

## [2026-08-18] update | Index refreshed

- **变更**: 重写 [[index.md]]，与文件系统对齐
  - 新增索引 0 条（文件系统中无 index 缺失页面）
  - 移除索引 102 条（页面文件已不存在：Syntheses 6 / Sources 20 / Entities 39 / Concepts 37）
  - 当前总页数 30（Sources 14 / Entities 13 / Concepts 3 / Syntheses 0）
  - 更新 index 头部 Last updated / Total pages；修正 [[OpenAI]]、[[NVIDIA]]、[[Anthropic]] 摘要（对齐当前页面内容）
- **冲突**: 无（与同日 lint 死链清理结果一致，均保留 30 条有效链接）

## [2026-08-18] lint | 清理 index.md 死链（102 条）

- **原因**: index.md 中大量 `[[wikilink]]` 指向的文件在 vault 中不存在（页面从未创建或已被删除）
- **变更**:
  - 删除 102 条指向不存在页面的索引行（Syntheses 6 条、Sources 20 条、Entities 53 条、Concepts 23 条）
  - 删除空分区 `## Syntheses（综合创作）`
  - 保留 30 条有效链接（Sources 14、Entities 13、Concepts 3）
- **注意**: 被删条目对应页面文件缺失，如后续恢复页面需重新加回 index

## [2026-08-18] ingest | AI News 日报（8 篇文章）

- **来源文件**:
  - `raw/01-articles/ai-news-2026-08-18-nvidia-openai-ohio-datacenter.md`
  - `raw/01-articles/ai-news-2026-08-18-deepmind-weathernext.md`
  - `raw/01-articles/ai-news-2026-08-18-llamacpp-v010.md`
  - `raw/01-articles/ai-news-2026-08-18-gpt56-sol-price-cut.md`
  - `raw/01-articles/ai-news-2026-08-18-israel-fake-think-tank.md`
  - `raw/01-articles/ai-news-2026-08-18-fastai-returning-to-ai.md`
  - `raw/01-articles/ai-news-2026-08-18-deepmind-sl2t.md`
  - `raw/01-articles/ai-news-2026-08-18-openai-talent-exodus.md`
- **变更**:
  - 新增来源摘要 [[摘要-nvidia-openai-ohio-datacenter]], [[摘要-deepmind-weathernext]], [[摘要-llamacpp-v010]], [[摘要-gpt56-sol-price-cut]], [[摘要-israel-fake-think-tank]], [[摘要-fastai-returning-to-ai]], [[摘要-deepmind-sl2t]], [[摘要-openai-talent-exodus]]
  - 新增实体 [[GoogleDeepMind]], [[SamAltman]], [[OpenRouter]], [[llama.cpp]], [[AnswerAI]]
  - 更新实体 [[OpenAI]], [[NVIDIA]], [[GPT-5.6]]（增量合并 2026-08-18 新闻）
  - 新增概念 [[LLM投毒]]
  - 更新概念 [[AI信任危机]]（补充从业者内部反思视角）
  - 更新 [[index.md]]
- **冲突**: 无（本次为新建页面 + 既有页面增量合并，无矛盾；唯一需注意：llama.cpp v0.1.0 为误发标签，已如实记录）
- **归档**: 八个源文件已移入 `raw/09-archive/01-articles/`

## [2026-08-17] ingest | AI News 日报（6 篇文章）

- **来源文件**:
  - `raw/01-articles/ai-news-2026-08-17-openai-gpt-5.6-sol-vision.md`
  - `raw/01-articles/ai-news-2026-08-17-anthropic-ceo-ai-backlash-trust.md`
  - `raw/01-articles/ai-news-2026-08-17-gpt-5.6-hackthebox-benchmark.md`
  - `raw/01-articles/ai-news-2026-08-17-jensen-huang-open-weight-ai.md`
  - `raw/01-articles/ai-news-2026-08-17-young-people-ai-ceos-poll.md`
  - `raw/01-articles/ai-news-2026-08-17-anthropic-apple-of-ai.md`
- **变更**:
  - 新增来源摘要 [[摘要-gpt56-sol-vision]], [[摘要-anthropic-ceo-trust]], [[摘要-gpt56-htb-benchmark]], [[摘要-jensen-huang-open-weight]], [[摘要-young-people-ai-ceos]], [[摘要-anthropic-apple-of-ai]]
  - 新增实体 [[GPT-5.6]], [[Roboflow]], [[DarioAmodei]], [[JensenHuang]], [[NVIDIA]], [[HackTheBox]]
  - 更新实体 [[OpenAI]], [[Anthropic]]（补充 2026-08 新闻信息）
  - 新增概念 [[AI信任危机]], [[开源权重AI]]
  - 更新 [[index.md]]
- **冲突**: 无（本次为新建页面，与已有内容互补；OpenAI/Anthropic 为增量合并）
- **归档**: 六个源文件已移入 `raw/09-archive/01-articles/`

## [2026-08-08] ingest | 处理一堂第257/258场直播转录稿（讲香基本功 + Feature思维）

- **来源文件**:
  - `raw/03-transcripts/一堂/第257场：重讲十指讲香模型  ​.md`
  - `raw/04-course/直播Live第258场：AI基本功第一课.md`
- **变更**:
  - 新增来源摘要 [[摘要-第257场-重讲讲香模型]]
  - 新增来源摘要 [[摘要-第258场-ai基本功第一课]]
  - 新增实体 [[一堂]]（教育机构，两篇均涉及）
  - 新增实体 [[YAI]]（一堂自研AI工具）
  - 新增概念 [[讲香基本功]]（价值感传递方法论）
  - 新增概念 [[Feature思维]]（AI最小实践单位框架，含Feature周期律）
  - 更新 [[index.md]]
- **冲突**: 无（全新实体/概念，与已有内容互补；Feature思维中提到的RAG/Agent与已有概念页方向一致）
- **归档**: 待下一步移入 `raw/09-archive/`

## [2026-07-22] ingest | 处理 RAG 学术综述 PDF（arXiv 2312.10997v5）

- **来源文件**: `raw/02-papers/2312.10997v5.pdf`（同济+复旦，2024年3月，RAG for LLMs: A Survey）
- **变更**:
  - 新增来源摘要 [[摘要-rag-survey-2312.10997]]
  - 更新概念 [[AgenticRAG]]（增补 Adaptive Retrieval 学术视角：Self-RAG/FLARE/WebGPT，三类增强过程对比表）
  - 更新概念 [[向量数据库]]（增补检索粒度/DenseX Proposition/Chunking策略/混合检索/嵌入模型选型）
  - 更新 [[index.md]]
- **冲突**: 无（新内容为已有 RAG 概念补充学术视角，无矛盾）
- **归档**: PDF 已移入 `raw/09-archive/02-papers/`

## [2026-07-23] ingest | 处理梁文锋投资者交流会 PDF（录音文字稿 + 精排版）

- **来源文件**:
  - `raw/02-papers/梁文锋投资者交流会-录音文字稿(1).pdf`（主要来源，42页，3h44min）
  - `raw/02-papers/梁文锋投资者交流会_商业书籍精排版(1).pdf`（同一会议精排版，合并处理）
- **变更**:
  - 新增来源摘要 [[摘要-梁文锋投资者交流会-2026-0520]]
  - 新增实体 [[梁文锋]], [[DeepSeek]]
  - 新增概念 [[DeepSeek克制哲学]], [[DeepSeek组织管理]], [[AGI技术路线图-梁文锋]]
  - 更新 [[index.md]]
- **冲突**: 无（全新实体/概念，与已有内容互补）
- **归档**: 两个 PDF 已移入 `raw/09-archive/02-papers/`

## [2026-07-23] ingest | 处理 CFA Institute Naqvi PDF（AI 与金融的未来）

- **来源文件**: `raw/02-papers/rpc_naqvi_ai-and-the-future-of-finance_online.pdf`
- **变更**:
  - 更新来源摘要 [[摘要-rpc-naqvi-ai-future-of-finance]]（从占位页更新为完整内容）
  - 新增实体 [[MonaNaqvi]], [[CFAInstitute]]
  - 新增概念 [[AI资本市场结构性变革框架]]（四力模型、四种未来状态、认知趋同、五大张力、治理三优先）
  - 更新 [[index.md]]
- **冲突**: 无（金融治理视角为全新领域，与已有 RAG/Agent/FDE 技术内容互补）
- **归档**: PDF 已移入 `raw/09-archive/02-papers/`

## [2026-07-23] ingest | 处理 YC Startup School AI 原生服务公司转录稿 + Naqvi PDF

- **来源文件**:
  - `raw/03-transcripts/youtube/How to Build an AI-Native Services Company.md`
  - `raw/02-papers/rpc_naqvi_ai-and-the-future-of-finance_online.pdf`（PDF 无法解析，仅记录元信息）
- **变更**:
  - 新增来源摘要 [[摘要-ai-native-services-company-yc]], [[摘要-rpc-naqvi-ai-future-of-finance]]
  - 新增实体 [[YCombinator]], [[CharlieWarren]], [[Panacea]], [[GeneralLegal]]
  - 新增概念 [[AI原生服务公司]], [[AI运营杠杆]], [[早期需求陷阱]]
  - 更新 [[index.md]]
- **冲突**: 无（AI 原生服务公司与已有 FDE/OPC 概念互补，从"公司形态"维度补充了新视角）
- **待处理**: PDF 需安装 `brew install poppler` 后重新执行 `/ingest raw/02-papers/rpc_naqvi_ai-and-the-future-of-finance_online.pdf`
- **归档**: YouTube 转录稿已移入 `raw/09-archive/03-transcripts/youtube/`；PDF 暂留原位待解析

## [2026-07-22] allin | 生成公众号长文《大模型幻觉与RAG》

- **变更**: 新增 [[公众号-大模型幻觉与RAG]]（约 3000 字，幻觉根源→RAG 逻辑→RAG 上限→生产级输出检查）；更新 [[index.md]]
- **冲突**: 无（已有公众号-rag进化论关注演进架构，本文聚焦机制原理与幻觉根源，角度互补）

## [2026-07-22] allin | /query RAG增强检索是如何工作的？+ 拆公众号/知识星球

- **变更**: 新增 [[rag-工作原理-query]]（综合 向量数据库、大模型幻觉、GraphRAG、AgenticRAG、RAG与微调决策框架 的机制解析）；更新 [[index.md]]
- **冲突**: 无（已有公众号-rag进化论关注演进路径，本次聚焦底层机制，角度互补）

## [2026-07-22] ingest | 处理 AI老兵文哲视频号合辑转录稿

- **来源文件**: `raw/03-transcripts/视频号/AI老兵文哲.md`
- **变更**:
  - 新增来源摘要 [[摘要-ai老兵文哲]]
  - 新增实体 [[AI老兵文哲]]
  - 新增概念 [[大模型微调]], [[RAG与微调决策框架]], [[大模型幻觉]], [[向量数据库]]
  - 更新概念 [[GraphRAG]]（增补社区挖掘机制、GraphRAG vs 传统RAG对比表、落地挑战）
  - 更新 [[index.md]]
- **冲突**: 无（新内容为 GraphRAG 落地细节和微调知识，与已有 GraphRAG 摘要互补，无矛盾）
- **归档**: 源文件已移入 `raw/09-archive/03-transcripts/视频号/`

## [2026-07-21] ingest | 处理哥飞北京线下分享会转录稿（上半场 + 下半场）

- **来源文件**:
  - `raw/03-transcripts/线下/哥飞1.md`
  - `raw/03-transcripts/线下/哥飞2.md`
- **变更**:
  - 新增来源摘要 [[摘要-哥飞1]], [[摘要-哥飞2]]
  - 新增实体 [[哥飞]], [[火山引擎]], [[即梦]]
  - 新增概念 [[AI出海]], [[谷歌SEO出海策略]], [[话题权重]], [[程序化SEO]]
  - 更新 [[index.md]]
- **冲突**: 无（AI出海方向为全新知识领域，与已有 FDE/RAG 内容互补不重叠）
- **归档**: 两个源文件已移入 `raw/09-archive/03-transcripts/线下/`

## [2026-07-18] ingest | 处理 Luke Finance 两个 Claude 财务 Agent 教程

- **来源文件**:
  - `raw/03-transcripts/youtube/How to Build Claude Managed Agents for Finance (Full Tutorial).md`
  - `raw/03-transcripts/youtube/I Built an Entire AI Finance Team With Claude (Full Tutorial).md`
- **变更**:
  - 新增来源摘要 [[摘要-claude-managed-agents-finance]], [[摘要-ai-finance-team-claude]]
  - 新增实体 [[LukeFinance]], [[Jamie]], [[Zapier]]
  - 新增概念 [[Claude管理型Agent]], [[AI财务团队架构]]
  - 更新 [[index.md]]
- **冲突**: 无（财务 Agent 场景与已有 Agent/MCP 概念互补，未重叠）
- **归档**: 两个源文件已移入 `raw/09-archive/youtube/`

## [2026-07-19] allin | 生成并保存朋友圈文案 12 条

- **变更**: 新增 [[朋友圈-agentic-rag-12条]]（12 条混合风格，覆盖 Agentic RAG 原理、工具选型、Claude Code 工作流）
- **冲突**: 无

## [2026-07-19] allin | 生成并保存知识星球帖子 20 条

- **变更**: 新增 [[知识星球-agentic-rag-20条]]（20 条 × 约 600 字，覆盖 Agentic RAG 原理、技术选型、Claude Code 工作流）
- **冲突**: 无

## [2026-07-19] allin | 生成并保存公众号长文《RAG 进化论》

- **变更**: 新增 [[公众号-rag进化论]]（约 3800 字，公众号长文，基于 [[AgenticRAG]] + [[摘要-agentic-rag-knowledge-graph-cole-medin]]）
- **冲突**: 无

## [2026-07-19] query+allin | 检索 Agentic RAG + Knowledge Graph（Cole Medin）

- **输出**: 即时回答未保存（已有 [[摘要-agentic-rag-knowledge-graph-cole-medin]] + [[AgenticRAG]]）；Phase 1 确认完整，等待用户决策 Phase 2

## [2026-07-18] ingest | 处理 Agentic RAG 2.0 教程（Cole Medin）

- **来源文件**: `raw/03-transcripts/youtube/Introducing RAG 2.0_ Agentic RAG + Knowledge Graphs (FREE Template).md`
- **变更**:
  - 新增来源摘要 [[摘要-agentic-rag-knowledge-graph-cole-medin]]
  - 新增实体 [[ColeMedin]], [[Graphiti]], [[Neon]], [[PydanticAI]]
  - 新增概念 [[AgenticRAG]]
  - 更新实体 [[Neo4j]]（增补 Graphiti 集成信息）
  - 更新 [[index.md]]
- **冲突**: 无（AgenticRAG 与已有 GraphRAG 概念不同，已在页面中明确区分）
- **归档**: 源文件已移入 `raw/09-archive/`

## [2026-07-18] ingest | 处理 RAG+SQL Agent LangGraph 教程（AI RoundTable）

- **来源文件**: `raw/03-transcripts/youtube/Chat with Multiple_Large SQL and Vector Databases using LLM agents (Combine RAG and SQL-Agents).md`
- **变更**:
  - 新增来源摘要 [[摘要-rag-sql-agent-langgraph]]
  - 新增实体 [[LangGraph]], [[LangSmith]]
  - 新增概念 [[RAG与SQL-Agent决策框架]], [[大型SQL数据库Agent策略]]
  - 更新 [[index.md]]
- **冲突**: 无（与现有 LangChain、知识图谱、GraphRAG 页面信息互补，未重叠）
- **归档**: 源文件已移入 `raw/09-archive/`

## [2026-07-18] query | FDE 口播稿扩写并保存

- **输出**: 更新 [[达轮说-fde口播稿]]（700字旧版 → 2200字长稿，约12分钟），新增三大案例（央企投标、连锁餐饮、奶茶门店），补充刺激段（Palantir起源、微软25亿/6000 FDE、OpenAI+Anthropic同天宣布）及完整方案段（8步路线图+15天上线规则）
- **引用页面**: [[FDE]], [[隐性信息]], [[街头智慧]], [[摘要-fde-rolling-ai-podcast]], [[摘要-260718-fde]], [[摘要-fde-roadmap-abhishek]]

## [2026-07-18] ingest | 处理 FDE 技术路线图视频（Abhishek Veeramalla）

- **来源文件**: `raw/03-transcripts/youtube/Forward Deployed Engineer (FDE) Roadmap in 20 Minutes.md`
- **变更**:
  - 新增来源摘要 [[摘要-fde-roadmap-abhishek]]
  - 新增实体 [[AbhishekVeeramalla]], [[MicrosoftFoundry]], [[MicrosoftFrontierCompany]]
  - 新增概念 [[FDE技术路线图]]
  - 更新概念 [[FDE]]（追加技术路径视角与路线图引用）
  - 更新 [[index.md]]
- **冲突**: 无（技术视角与已有商业落地视角互补）
- **归档**: 源文件已移入 `raw/09-archive/`

## [2026-07-18] ingest | 处理 Rolling AI FDE 播客转录稿

- **来源文件**: `raw/03-transcripts/youtube/FDE.txt`
- **变更**:
  - 新增来源摘要 [[摘要-fde-rolling-ai-podcast]]
  - 新增实体 [[RollingAI]], [[阿甘]], [[刘开]], [[Palantir]]
  - 新增概念 [[街头智慧]], [[AI落地三大坑]], [[负能一线]]
  - 更新概念 [[FDE]]（增量合并：公投比喻、15天规则、技术占比1/3、Rolling AI 案例群）
  - 更新 [[index.md]]
- **冲突**: 无
- **归档**: 源文件已移入 `raw/09-archive/`

## [2026-07-18] query | 生成达轮说 FDE 口播稿并保存为 synthesis

- **输出**: 新增 [[达轮说-fde口播稿]]；更新 [[index.md]]（新增 Syntheses 分类）
- **引用页面**: [[FDE]], [[隐性信息]], [[摘要-260718-fde]], [[摘要-260718-yiren-luyinjiyao]]

## [2026-07-18] ingest | 处理 YouTube 转录：AI 技能侵蚀研究

- **来源文件**: `raw/03-transcripts/youtube/Claude Just Revealed AI's Biggest Problem.md`
- **变更**:
  - 新增来源摘要 [[摘要-ai-reveals-biggest-problem]]
  - 新增实体 [[Anthropic]], [[TwoMinutePapers]]
  - 新增概念 [[AI技能侵蚀]]
  - 更新 [[index.md]]
- **冲突**: 无
- **归档**: 源文件已移入 `raw/09-archive/`

## [2026-07-18] ingest | 首次构建 wiki，处理 2 个原始文件

- **来源文件**:
  - `raw/03-transcripts/视频号/260718-FDE.md`
  - `raw/02-papers/260718-亦仁录音纪要.md`
- **变更**:
  - 新增 [[摘要-260718-fde]]
  - 新增 [[摘要-260718-yiren-luyinjiyao]]
  - 新增实体 [[亦仁]], [[生财有术]], [[OpenAI]], [[飞书]]
  - 新增概念 [[FDE]], [[隐性信息]], [[Agent]], [[MCP]], [[OPC]]
  - 新增 [[index.md]]（全局索引）
  - 新增 [[log.md]]（本日志）
- **冲突**: 无（首次构建，无既有页面）
- **归档**: 两个源文件已移入 `raw/09-archive/`

## [2026-07-18] ingest | 处理 2 个原始文件，扩展实体/概念网络

- **来源文件**:
  - `raw/03-transcripts/线下/260715-松月.md`
  - `raw/03-transcripts/youtube/Extracting Knowledge Graphs From Text With GPT4o.md`
- **变更**:
  - 新增来源摘要 [[摘要-260715-songyu]], [[摘要-extracting-knowledge-graphs]]
  - 新增实体 [[松月]], [[原点学堂]], [[ThuVu]], [[Neo4j]], [[LangChain]]
  - 新增概念 [[知识图谱]], [[GraphRAG]], [[一鱼多吃]], [[虚拟产品]], [[Obsidian]]
  - 更新概念 [[OPC]]（增加松月的内容/产品 OPC 分类 + 四阶段模型）
  - 更新概念 [[Agent]]（增加 Agent 连排概念）
  - 更新 [[index.md]]
- **冲突**: 无
- **归档**: 两个源文件已移入 `raw/09-archive/`
