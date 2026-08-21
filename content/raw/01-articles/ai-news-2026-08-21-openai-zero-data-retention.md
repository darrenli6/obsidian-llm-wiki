---
title: "OpenAI 为零样本保留（ZDR）扩展前沿模型 API 并预览隐私保护安全系统"
type: article
tags: [openai, privacy, enterprise, safety]
source_url: https://techstrong.ai/articles/openai-unveils-zero-data-retention-for-frontier-models/
ingested: 2026-08-21
sha256: b83410a3c26241f31c03352e36c2ff159b24f17912e7a83316a730fcf8160aa1
summary: "OpenAI 为前沿模型 API 客户提供 Zero Data Retention（ZDR）选项：处理完成后不保留提示与输出、不进滥用监控日志；同时预览 Private Safety Processing（PSP），号称在不向员工暴露客户内容的前提下检测滥用模式。"
---

# OpenAI 为零样本保留（ZDR）扩展前沿模型 API 并预览隐私保护安全系统

> 原文：https://techstrong.ai/articles/openai-unveils-zero-data-retention-for-frontier-models/（ingested 2026-08-21）

OpenAI Unveils Zero Data Retention for Frontier Models, Previews Privacy-Preserving Safety System - Techstrong.ai
Skip to content
OpenAI Unveils Zero Data Retention for Frontier Models, Previews Privacy-Preserving Safety System
3.7 min read Published On: August 20, 2026 By Steven Vaughan-Nichols
TL;DR — Key Takeaways
OpenAI is expanding Zero Data Retention access for eligible API customers using frontier models.
ZDR prevents eligible prompts and outputs from being retained after processing and keeps them out of abuse-monitoring logs.
OpenAI is previewing Private Safety Processing to detect harmful behavior patterns without giving staff access to underlying customer content.
OpenAI will offer eligible API customers Zero Data Retention for frontier-model deployments and introduce a new safety mechanism designed to identify misuse patterns without exposing underlying customer content.
OpenAI’s new Zero Data Retention (ZDR)   is aimed at organizations handling sensitive material, such as people’s health data and financial records, and confidential business plans and proprietary research. With ZDR, OpenAI will not retain prompts and outputs after a request is processed. Under the program, OpenAI said customer content will not be available to its personnel for review , and enterprise API data will not be used to train models unless a customer explicitly opts in.
ZDR is a requestable enterprise/API arrangement. It’s not available for Joe and Jane ChatGPT users.
For those who deploy ZDR, OpenAI promises that customer content stays on infrastructure controlled by the customer . The company is also developing an alternative in which content resides on OpenAI infrastructure encrypted with keys controlled by the customer; OpenAI said its personnel would not possess copies of those keys.
Before you get too excited, those guarantees come with numerous caveats. For example, OpenAI reserves “the right to make models ineligible for Zero Data Retention … for specific customers.” In addition, data may be stored for abuse-monitoring logs, and application state data from some API features will be kept to fulfill the task or request. This includes vector-store data, threads, or other server-side objects.
Of course, ZDR is not an absolute promise that OpenAI will never retain any related material. OpenAI said it remains legally obligated to report apparent child sexual abuse material (CSAM). Images flagged as potential CSAM will continue to be retained for manual review and reporting.
So, what does ZDR do with your data? With ZDR enabled, OpenAI won’t retain eligible prompts, responses, or other customer content in abuse-monitoring logs.   For the Responses API and Chat Completions API, store is forcibly treated as false , even if an application sends store: true . It doesn’t provide a separate “do not train on my data” setting. That’s because API data is specifically excluded from training by default.
OpenAI hasn’t released a white paper on exactly how all this works. Still, we do know that it works as an approved API data-control setting.
Now, how an AI provider can monitor dangerous or abusive use when it cannot retain or inspect underlying interactions is a darn good question. OpenAI said existing ZDR-compatible safeguards generally assess each interaction independently. That’s nice, but ZDR may miss risks that become visible only across a sequence of prompts, accounts, or steps in an agentic workflow. Actually, let me rephrase this. It’s not a question of whether ZDR may miss some risks; ZDR won’t find sophisticated risks.
OpenAI isn’t alone in this problem. All the other AI companies face this balancing act between security, privacy, and preventing abuse.
It’s also important to keep in mind that “Not used for training” and “zero retention” are different promises. An AI provider may promise not to train on API data while still retaining prompts and outputs for a defined period for safety review, debugging, or legal compliance. Besides, while ZDR addresses durable provider-side storage of the inference payload, that still allows transient in-memory processing, automated abuse screening, customer-configured persistence, or legally compelled retention.
In addition to introducing ZDR, OpenAI also introduced a preview of “Private Safety Processing (PSP).”  PSP  is designed to examine patterns across related interactions and return narrowly scoped signals about suspected harmful activity. It will do this, OpenAI pinky promises, without providing OpenAI staff access to the prompts or responses that produced those actions.
OpenAI and all the other AI vendors are offering ZDR and PSP because enterprises and regulated industries need to reconcile AI frontier-model safety controls with data-minimization duties. Some recent deployments of powerful AI systems have required customers to enable retention of sensitive content for safety monitoring. This is a tradeoff that can clash with compliance obligations and internal security policies.
With ZDR and PSP,  AI users will have to take responsibility for when something goes awry with customer data or the AI produces dangerous or illegal results. For example, if someone finds a way to extract a patient’s medical records from a hospital.
Finally, the PSP is only a preview for now. How it will be implemented, how it will detect potential problems and how it will handle false positives are all unanswered questions. For answers to those questions, stay tuned for a technical white paper that should be appearing in September 2026.
Frequently Asked Questions
Question
What is OpenAI Zero Data Retention?
Answer
Zero Data Retention is an API data-control option that prevents eligible customer prompts, responses and other content from being retained after processing.
Question
Does OpenAI use API data to train its models?
Answer
Not by default. OpenAI says API customer data is excluded from model training unless the customer explicitly opts in.
Question
Does ZDR mean OpenAI never retains any data?
Answer
No. Certain API features may be ineligible for ZDR, and OpenAI may retain material when legally required, including suspected child sexual abuse material.
TECHSTRONG AI PODCAST
SHARE THIS STORY
RELATED STORIES:
LLM Terminology Cheat Sheet: Comprehensive Reference for AI Practitioners
How Data Retention Strategies Have Evolved to Address the AI-Powered Enterprise
US Attorney General Urges Congress to Study AI’s Harmful Effects On Children
How to Safely Deploy Autonomous AI Agents in Production
FOLLOW US
NEWSLETTER SIGN UP
© Techstrong Group, Inc. ALL RIGHTS RESERVED.
Page load link
Modern Software Development and Delivery
×
Go to Top
