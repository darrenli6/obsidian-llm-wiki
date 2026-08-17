---
title: "GPT 5.6 Sol 是 OpenAI 迄今最强的视觉模型"
type: article
tags: [ai-news, openai, vision, gpt-5.6]
source_url: "https://blog.roboflow.com/openai-gpt-5-6/"
ingested: 2026-08-17
sha256: e965d6030b8420f321557fc7e2d4efeee14f5c004bec0a070288a73d9d633a5e
summary: "Roboflow 实测 GPT-5.6 家族（Sol/Terra/Luna）在检测、计数、OCR、信息抽取上的表现，结论：Sol 是 OpenAI 发布过的最强视觉模型，并对比了速度与成本。"
---

# GPT 5.6 Sol 是 OpenAI 迄今最强的视觉模型

> 来源: https://blog.roboflow.com/openai-gpt-5-6/

## 正文摘要

Roboflow 实测 GPT-5.6 家族（Sol/Terra/Luna）在检测、计数、OCR、信息抽取上的表现，结论：Sol 是 OpenAI 发布过的最强视觉模型，并对比了速度与成本。

## 抓取正文（原文清洗）


-

-

-

-

-

GPT 5.6 Sol is the best "vision" model OpenAI ever released

-

-

-

-

-

Products

Platform

-

Deploy

Run models on device, at the edge, in your VPC, or via API

-

Workflows

Low-code interface to build pipelines and applications

-

Train

Hosted model training infrastructure and GPU access

-

Annotate

Label images fast with AI-assisted data annotation

-

Universe

Open source computer vision datasets and pre-trained models

Solutions

By Industry
Explore all industry solutions

-

Aerospace & Defense

-

Automotive

-

Consumer Goods

-

Energy & Utilities

-

Healthcare & Medicine

-

Industrial Manufacturing

-

Logistics

-

Manufacturing

-

Media & Entertainment

-

Retail & Service

-

Robotics

-

Transportation

-

Warehousing

Explore customer
stories and ebooks ->

See case studies, comprehensive guides, and insights from thousands of
real-world AI projects.

Resources

-

Customer Stories

-

Weekly Product Webinar

-

User Forum

-

Inference Templates

-

Model Playground

-

Convert Annotation Formats

Pricing
Docs
Blog

Search

Sign In
Book a demo
Get Started

Search

Sign in
Book a demo
Get Started

Search

Blog

## GPT 5.6 Sol is the best "vision" model OpenAI ever released

Piotr Skalski
Published
Jul 16, 2026
•
6 min read

Last week, OpenAI announced the GPT-5.6 lineup, introducing the Sol, Terra, and Luna models. During the release stream , the team focused heavily on computer use , showing models capable of navigating and operating desktop applications. OpenAI highlighted UI agents and detailed 3D visualizations, but both depend on stronger visual understanding.

To measure their vision capabilities, we ran the models through our upcoming VLM benchmark, which we plan to release in the next few weeks. The benchmark covers common vision tasks, including detection, counting, OCR, and data extraction. In this post, we take a closer look at how GPT-5.6 performs across each of them.

Sol is clearly the best vision model OpenAI has released so far. The jump is especially visible in object detection and counting, where GPT-5.5 was far behind the strongest VLMs. Terra and Luna are not as strong as Sol, but both show meaningful progress over GPT-5.5.

Get started

Test Sol, Terra, and Luna in Roboflow Playground and compare their results with models such as Claude Fable 5 and Gemini 3.5 Flash across the same vision tasks.

Roboflow Playground

## Object Detection

Detection is where GPT-5.6 shows the clearest jump. GPT-5.5 scored 13.8 mAP@50 in our benchmark, while Sol reached 46.2. Terra and Luna followed closely at 44.7 and 43.3, moving object detection from a major weakness to a practical capability.

Document layout detection is one of the clearest strengths of GPT-5.6. Sol handled titles, paragraphs, tables, images, and signatures well. Many document workflows start with locating the relevant parts of a page before OCR or data extraction begins.

GPT-5.6 also performed well on dense scenes. The pills and eggs examples contain many similar objects packed closely together, a common weakness for VLM-based detection. Unlike traditional detectors, VLMs generate each class label and set of coordinates as text. As object count grows, the response becomes longer and the risk of missed objects, duplicates, or coordinate errors increases. Despite this, Sol detected most objects across both scenes.

For the best detection results, prompt GPT-5.6 models to return absolute XYXY coordinates in image pixels. This differs from Gemini 3.5 Flash, which performed best with YXYX coordinates normalized to a 0–1000 range. Using the wrong coordinate format reduced GPT-5.6 detection performance by around 15 mAP points in our benchmark.

In a few cases, GPT-5.6 Sol returned boxes in seemingly random parts of the image. Many had no overlap, or almost no overlap, with the ground truth. Instead of matching the visible objects, the boxes often formed unnatural layouts, such as straight rows or evenly spaced groups.

We shared those examples with OpenAI. Their team confirmed that Sol becomes less stable on images around 2,000 by 2,000 pixels or larger, especially at lower reasoning effort. Higher reasoning effort improves stability, but also increases token use, latency, and cost. Resizing or cropping large images before sending them to the OpenAI API is the most practical workaround.

## Object Counting

Counting improved across the full GPT-5.6 lineup. Sol scored 73.0% in our benchmark, up from 64.9% for GPT-5.5, while Terra and Luna reached 67.6% and 66.2%. Luna, the cheapest model in the lineup, still outperformed the previous OpenAI baseline.

As part of the benchmark, we tested cases requiring more than spotting objects and returning a total. Sol counted heavily overlapping metal brackets, a difficult case for both traditional object detectors and VLMs. Sol also counted bullet holes only inside selected scoring zones, showing an understanding of both which objects to count and where the rule applied.

Blister packs proved much harder. In separate prompts, we asked Sol to count the empty slots and the pills still sealed inside the package. The repeated layout, reflections, and small visual differences between filled and empty slots made both tasks difficult.

The abnormal candy example exposed a different type of failure. Sol gave the wrong count, though it is unclear whether the model miscounted the candies or misunderstood the target category.

## OCR and Data Extraction

OCR performance stayed close to GPT-5.5. Sol achieved a 90.7% mean similarity score, only 0.5 points behind GPT-5.5 at 91.2%, while Terra and Luna reached 88.8% and 88.4%. The gap was larger in text extraction, where Sol scored 82.5% compared with 87.6% for GPT-5.5. Luna and Terra followed at 81.4% and 79.4%.

As part of the benchmark, we separated full transcription from targeted extraction. OCR asks the model to transcribe all visible text, while text extraction asks for a specific piece of informa
