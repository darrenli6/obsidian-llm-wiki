---
title: "LLM投毒"
type: concept
tags: [misinformation, llm-poisoning, influence, security]
sources: [raw/01-articles/ai-news-2026-08-18-israel-fake-think-tank.md]
last_updated: 2026-08-18
---

## 定义

LLM poisoning（LLM 投毒）：通过批量制造**符合 LLM 采信偏好**的伪权威内容（假智库报告、带脚注的"研究"、中立语气的文章），利用检索增强与模型训练链路，间接影响 ChatGPT / Gemini / Claude 等聊天机器人回答的实践。它不是直接攻击模型，而是"给 AI 喂故事"。

## 关键信息

- **采信机制**：LLM 倾向引用具体数据、强引用与可靠来源——投毒内容正是"完美模仿典型可信美国智库"（NewsGuard 语）：通用名、标准布局、红白蓝色系。
- **典型案例**：以色列政府资助的"汉诺威公共政策研究所"假智库，8 月 6 日起发布 100+ 份以巴主题报告；制作方 Piro 公司自称提供"AI 故事优化"，收取 90 万美元，GPTZero 检测 11/12 篇为高置信 AI 生成。
- **相关手法**：Brad Parscale 以 4650 万美元合同建亲以网站，据调查已被 Microsoft Copilot、Gemini 等聊天机器人采信引用。
- **治理空白**：此类内容未在合同中披露用途，游走在"公关"与"信息战"之间，是 AI 信任危机的重要来源。

## 关联连接

- [[AI信任危机]] — 加剧的信任问题
- [[OpenAI]] — ChatGPT 是被影响对象之一
- [[摘要-israel-fake-think-tank]] — 来源
