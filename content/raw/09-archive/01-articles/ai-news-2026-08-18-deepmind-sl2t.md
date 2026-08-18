---
title: "Google DeepMind 发布 SL2T：手语转文字模型首次进入消费产品"
type: article
tags: [ai-news, deepmind, accessibility, translation]
source_url: "https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/"
ingested: 2026-08-18
sha256: a6c23e0b1c215be715b91eca32bcf8745be8aa37854dbb41b4b9e431164524ad
summary: "DeepMind 推出大规模多语种手语转文字模型 SL2T，已搭载 Pixel 11 的 Gboard 与 Live Transcribe（ASL→英语），是手语 AI 首次进入消费产品；训练数据 10 万+ 小时、覆盖 50+ 手语，FLEURS-ASL 零样本 70 BLEURT 创纪录。"
---

# Google DeepMind 发布 SL2T：手语转文字模型首次进入消费产品

> 来源: https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/

## 正文摘要

DeepMind 推出大规模多语种手语转文字模型 SL2T，已搭载 Pixel 11 的 Gboard 与 Live Transcribe（ASL→英语），是手语 AI 首次进入消费产品；训练数据 10 万+ 小时、覆盖 50+ 手语，FLEURS-ASL 零样本 70 BLEURT 创纪录。

## 抓取正文（原文清洗）

Introducing sign-language-to-text (SL2T), our breakthrough model powering new sign language features for Deaf and hard of hearing users.
AI's ability to process spoken languages has advanced rapidly over recent decades, enabling automatic translation, dictation, and conversational interfaces that feel effortless to hearing users. Yet this technological revolution has not reached the world’s more than 200 sign languages — and the estimated 70 million Deaf and hard of hearing people who use them.
Today, we’re introducing a massively multilingual sign-language-to-text (SL2T) translation model that marks a breakthrough in quality and generality. With it, we are bringing sign language AI out of the lab and into consumer products for the first time: SL2T powers sign-to-text dictation in Gboard and Live Transcribe on Pixel 11 , starting with American Sign Language (ASL) to English. More devices are coming soon, and additional languages will follow.
Similarly to how hearing users can use dictation to speak instead of typing, this feature enables Deaf users to sign to their phone anywhere they’d normally type. You can sign to search the web, draft messages or documents, and ask Gemini to solve queries or execute tasks. In Live Transcribe, you can sign responses in conversations instead of having to type back and forth. According to our testers, signing in ASL is faster, more natural, and more delightful than typing in English.
Your browser does not support the video tag.
Sign-to-text, powered by SL2T, enables users to sign to their phone anywhere they'd normally type.
## Why sign languages matter
Sign languages are the primary languages of Deaf communities around the world and the cornerstone of Deaf cultural identity. There is great diversity among deaf people in terms of their level of proficiency in signing, speaking, reading, and writing, so it is important to support access in all modalities. Deaf people can benefit from sign language processing in the same way that hearing people benefit from spoken language processing, plus the technology opens new possibilities for bridging the communication gap between Deaf and hearing communities. Despite this opportunity for positive social impact, progress in sign language AI has been slow — both because building AI for sign languages presents complex challenges and because widespread misconceptions exist about how the languages themselves work.
Compared to spoken language transcription, sign language translation presents two core challenges. First, transcribing speech is a matter of performing a sequential mapping from sound to text in the same language, whereas sign languages are independent, natural languages with their own distinct grammars and lexicons. As a result, they require true machine translation rather than a sequential process of sign-to-word transformations. Second, the model must learn to “see” and understand physical movement. Sign languages convey meaning through simultaneous movements of the hands, arms, torso, head, and face. Accurately tracking these at high frame rates is a difficult and computationally demanding computer vision task.
Given this background, it is easy to understand why some early attempts at sign language technology, like sign language gloves, were fundamentally limited: sign languages aren't simply “English on the hands.” They require complex visual perception of fine-grained whole-body movements and full-fledged language translation. SL2T is designed to deliver both. Your browser does not support the video tag.
SL2T sees sign language inputs as points on the signer's body and translates them into streaming text outputs. Example from the FLEURS-ASL benchmark.
## How SL2T works
We built SL2T by combining a user-centric, culturally informed approach with massive data scaling. The model is trained on over 100,000 hours of data across more than 50 sign languages — with roughly a quarter of the data in ASL. Training jointly on diverse languages, dialects, and proficiency levels causes the model to learn shared underlying structures, outperforming single-language models in our experiments.
To protect user privacy, SL2T sees sign language as a sequence of pose landmark locations rather than a raw camera feed. An on-device model ( MediaPipe Holistic ) tracks the location of points on the signer, and only these geometric coordinates are sent to the server for translation, allowing the original video to be discarded immediately.
SL2T translates this coordinate sequence directly into text, bypassing intermediate annotations known as “glosses” that are widely used in prior work on sign language translation. Glosses fail to capture rich, non-linear aspects of sign languages such as non-manual markers and spatial constructions. Translating directly from landmarks removes artificial vocabulary limits and allows translation quality to scale directly with data.
SL2T is the most capable sign language translation model to date according to key benchmarks like FLEURS-ASL (sd-test), which assesses ASL to English translation quality. SL2T achieves a remarkable zero-shot score of 70 BLEURT, which is significantly higher than any previously reported score. But optimizing academic benchmarks alone doesn’t guarantee usability in real-world applications, so we worked hard on practical issues like minimizing streaming latency, preventing hallucination on non-signing inputs, ensuring fairness for the 10% of signers who are left-handed, and improving performance for one-handed signing, which is used while holding a smartphone in the other hand. Original English SL2T's ASL → English output The Cook Islands do not have any cities but are composed of 15 different islands. The main ones are Rarotonga and Aitutaki. The Cook Islands have no cities and consist of 15 islands. The two main islands are Rarotonga and Aitutaki. The games kicked off at 10:00am with great weather and apart from mid morning drizzle which quickly cleared up, it was a perfec
