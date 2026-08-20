---
title: "stealing-reasoning-traces"
type: article
tags: [arxiv, security, llm]
source_url: https://arxiv.org/abs/2608.09867
ingested: 2026-08-20
sha256: cff1372f7685f56de195f9e052c04f0387b5cda972957aafd77872c0dfc1679f
summary: "arXiv 论文发现闭源 LLM 的加密推理痕迹块在同一生态内跨会话/用户/模型兼容，可注入更弱模型迫使其明文输出推理内容；四个攻击向量覆盖反蒸馏绕过、隐私数据提取（367 条 PII、182 个凭据）、危险信息泄露与隐形提示注入。"
---

# 论文：从闭源 LLM API 窃取推理痕迹（arXiv 2608.09867）

[Submitted on 10 Aug 2026]
Title:Stealing Reasoning Traces from Proprietary LLM APIs
Authors:Alexander Panfilov, David Schmotz, Ilia Shumailov, Luca Beurer-Kellner, Joachim Schaeffer, Ameya Prabhu, Jonas Geiping, Maksym Andriushchenko
View a PDF of the paper titled Stealing Reasoning Traces from Proprietary LLM APIs, by Alexander Panfilov and 7 other authors
View PDF
HTML (experimental)
Abstract:Leading large language model providers now conceal their models' step-by-step reasoning, or chain-of-thought, to protect intellectual property and limit information leakage. Rather than storing these traces server-side, providers return them to the client as blocks of encrypted text, which the client passes back with each subsequent request. Building on prior research, we identify an architectural vulnerability: these encrypted blocks are fully compatible and interchangeable across different sessions, users, and models within a provider's ecosystem. We exploit this compatibility to develop a scalable decryption jailbreak. By injecting an encrypted reasoning trace from a given model into a weaker, and less safeguarded model from the same provider, we force it to decode and output the trace verbatim in plaintext, without ever jailbreaking the more capable model directly. This vulnerability enables four distinct attack vectors. First, it circumvents anti-distillation mechanisms, allowing adversaries to extract a proprietary model's reasoning, as we demonstrate across Anthropic, OpenAI, and Google. Second, it allows for large-scale private data extraction. Developers frequently share session logs publicly, unaware of contents of the encrypted blocks. By decoding 315,320 reasoning blocks scraped from public repositories, we recovered 367 Personally Identifiable Information (PII) artifacts and 182 credentials. Third, it inadvertently reveals hazardous information hidden within the reasoning process, even in cases where the model's final, visible output safely rejects a malicious request. Fourth, attackers can leverage this flaw to execute invisible prompt injections, embedding malicious payloads entirely within encrypted blocks to poison public agentic rollouts. Following responsible disclosure, we propose concrete cryptographic and system-level mitigations to secure client-side reasoning.
Subjects:
Cryptography and Security (cs.CR); Artificial Intelligence (cs.AI); Machine Learning (cs.LG)
Cite as:
arXiv:2608.09867 [cs.CR]
(or
arXiv:2608.09867v1 [cs.CR] for this version)
https://doi.org/10.48550/arXiv.2608.09867
Focus to learn more
