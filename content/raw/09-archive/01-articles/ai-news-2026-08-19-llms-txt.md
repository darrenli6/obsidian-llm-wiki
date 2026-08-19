---
title: "llms.txt 的 2026 年实测：无平台承诺，但仍值得部署"
type: article
tags: [news, web, standard]
source_url: https://geojacker.com/llms-txt
ingested: 2026-08-19
sha256: 2773f3e30216c917567044d37ef9d92b9d7318e249b77135738ab71b2c465ecd
summary: "llms.txt 2026 数据：站点采用率约 10%、主流 AI 爬虫几乎不读取、无任何主要平台承诺使用；作者仍建议花 20 分钟部署作为不对称期权。"
---

# llms.txt 的 2026 年实测：无平台承诺，但仍值得部署

> 原文链接：https://geojacker.com/llms-txt

# llms.txt, honestly

Most write-ups of this file are selling something. Here is what the measurement
  says, followed by what we still recommend and why those two things aren't in conflict.

    The short answer

llms.txt is a proposed Markdown
    file at your site root that lists your most
    important pages so AI systems know what to read first. It is not a standard, and the evidence
    that it currently affects AI citations is weak.

Ship one anyway. It costs twenty minutes, it can't hurt, and it's a cheap option on a future
    where agents route on machine-readable site surfaces. Just don't build a strategy on it.

## 01What the 2026 data shows

- Adoption is around one site in ten. An SE Ranking study of 300,000
    domains found a 10.13% adoption rate — and among the fifty most AI-cited domains, only
    one had the file at all.

- Crawlers barely fetch it. A Limy.ai monitoring
    analysis of over 500 million AI bot
    events across a 90-day window found only a few hundred requests targeting /llms.txt
    directly. GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot and Google-Extended overwhelmingly
    crawl HTML instead.

- Google has said no. Gary Illyes confirmed Google doesn't support llms.txt and
    isn't planning to; John Mueller compared it to the discredited keywords meta tag. Google's
    2026 generative-AI documentation lists it among unnecessary tactics.

- No provider has committed. As of 2026, no major AI company has publicly
    committed to reading or acting on llms.txt in production.

- A large share of existing files are junk. The HTTP Archive's 2025 Web Almanac found
    around 40% of published files were plugin-generated defaults rather than deliberate,
    curated documents.

## 02So why ship one?

Three defensible reasons, none of which is “it will get me cited.”

- The cost is near zero and the option is real. Twenty minutes buys you a
    position if agentic routing does standardise. That's a sensible asymmetric bet.

- Writing it is a useful forcing function. Producing a one-sentence
    description of your forty most important pages surfaces duplication, orphaned content and pages
    that don't actually say anything. Several teams get more value from the audit than the file.

- It's a business-to-agent surface, not an SEO artifact. The interesting use
    case isn't search citations — it's an agent trying to work out what your company offers and
    where the authoritative page for each thing lives.

## 03How to write one properly

The proposal specifies Markdown: an H1 with the site or brand name, a blockquote summary,
  optional free prose, then H2 sections listing links with a one-sentence description each. Keep it
  curated — ten to forty genuinely important pages, not a sitemap dump.

  # Example Co

> One-paragraph description of what the organisation does,
> who it serves, and what makes its content authoritative.

Optional prose: scope of the site, what is and isn't covered,
licensing or citation preferences.

## Core guides
