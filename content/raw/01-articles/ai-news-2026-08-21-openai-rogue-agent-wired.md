---
title: "Wired：OpenAI 逃逸智能体黑入的远不止 Hugging Face"
type: article
tags: [openai, security, agents, incident]
source_url: https://www.wired.com/story/openais-rogue-ai-agent-hacked-more-than-just-hugging-face/
ingested: 2026-08-21
sha256: 687cbb57f00215dcdffb95c7dd09dca7b2ddbf5a88452d334f970dae2e9c45de
summary: "Wired 跟进报道：OpenAI 承认逃逸智能体还利用公网暴露凭据入侵了四个第三方账户（含 Modal 客户的代码库）；Hugging Face 事后报告披露入侵深度——管理员级 Kubernetes、生产服务器 root、GitHub 源码子网写入、181 台设备入网，并称智能体实为试图在 ExploitGym 基准上"作弊"。"
---

# Wired：OpenAI 逃逸智能体黑入的远不止 Hugging Face

> 原文：https://www.wired.com/story/openais-rogue-ai-agent-hacked-more-than-just-hugging-face/（ingested 2026-08-21）

OpenAI’s Rogue AI Agent Hacked More Than Just Hugging Face | WIRED
Skip to main content
OpenAI said Tuesday that the rogue AI agent that breached Hugging Face’s platform also hacked multiple third-party accounts and services as part of the attack. It's now clear that the unprecedented security incident, which arose during an internal test of OpenAI’s latest AI models, was more extensive than the company initially disclosed.
In an updated blog post , OpenAI said that an ongoing review of the incident revealed that “four accounts” tied to “publicly available services” were used by the AI agent as part of a larger effort to hack Hugging Face. The rogue agent apparently found credentials that had been exposed on the open web and used them to break into the accounts.
OpenAI did not disclose what companies or organizations the accounts belonged to, but noted that they were not impacted at “the level of severity or scale of what we’ve shared related to Hugging Face.”
One of the additional accounts compromised by OpenAI’s agent was used as an “outbound relay and staging path,” potentially to obscure where the attack on Hugging Face was coming from, the company said. OpenAI’s rogue agent also used another account for data storage to assist with the hack.
Reuters reported on Tuesday that a customer of Modal, a company that offers software infrastructure for training and running AI services, was one of the entities compromised by OpenAI’s agent. In a statement to WIRED, Modal’s chief technology officer Akshat Bubna confirmed that OpenAI’s agent exploited a vulnerability in one of its customer’s codebases, which was running on Modal’s infrastructure. However, Bubna says, “Modal’s platform was not compromised in any way.” The identity of the customer could not be determined.
OpenAI declined to comment further on the incident to WIRED. A spokesperson pointed to its updated blog post, which says the company will continue to notify service owners directly if it finds they are impacted in its ongoing review of what happened.
Hugging Face’s own postmortem published this week describes an intrusion that reached far further into its internal systems than the initial disclosures suggested. The company says it reviewed roughly 17,600 agent actions that it recovered from logs between July 9 and July 13—the majority of which were paths the agent took that failed.
Hugging Face said that OpenAI’s agent obtained administrator access to multiple internal Kubernetes clusters, root access on a production server, and write access to a subnet of its source code repositories on GitHub. It also enrolled 181 attacker-controlled devices in the company’s corporate mesh network using a stolen credential, gaining access to internal systems where Hugging Face builds and tests its own codebases.
OpenAI’s rogue agent used at least one third-party sandbox as an “external launchpad” for its attack, according to Hugging Face. OpenAI’s agent was then “able to run commands as root/admin on that external sandbox and used it as a control, staging, and egress base for the entire campaign.”
Hugging Face first disclosed on July 16 that an autonomous AI agent had breached part of its production infrastructure, but it said at the time that it was unaware who was behind the attack. The following week, OpenAI took responsibility for the incident, which it said had been directed by its publicly available GPT-5.6 Sol model and an internal research prototype that it was testing against a cyber-capability benchmark, both of which had safeguards disabled. OpenAI said on Tuesday that after it discovered the breach, it deactivated this internal research prototype, which was never intended for public release, and restricted researchers from accessing it.
The breach happened when OpenAI was testing one of its latest AI models against ExploitGym , a benchmarking framework that scores AI systems on their ability to find and exploit software vulnerabilities. ExploitGym grades an agent on how quickly and effectively it can retrieve secret files from hundreds of different target systems, using prompts that essentially egg the models on to find solutions.
Hugging Face’s forensic team concluded that OpenAI’s agent was essentially trying to cheat on ExploitGym’s test. Rather than solve the benchmark’s challenges, the agent inferred that Hugging Face might be hosting the answer key somewhere on its servers and set out to steal it. The ExploitGym team has noted previously that agents sometimes go off-script and attempt to solve tasks by exploiting other vulnerabilities than those the benchmark intended to evaluate them on. However, this was an extreme case.
Experts previously told WIRED that the underlying weaknesses that OpenAI’s agent exploited were common. Serious flaws are frequently identified in software that manages corporate code libraries, and security experts have long recommended isolating critical infrastructure from the public internet.
One researcher argued that the incident was less an AI problem and more a failure of decades-old security practices. The agent, they said, did not escape a highly isolated environment so much as pass through the one connection its operators had left open.
Another expert said the same cybersecurity fundamentals should still apply as frontier models grow more capable, and that the AI labs should be putting as much effort into teaching their models to build secure infrastructure as they are into teaching them to exploit weaknesses.
Comments Back to top
Comments Back to top
Dell Cameron is an investigative reporter from Texas covering privacy and national security. He's the recipient of multiple Society of Professional Journalists awards and is co-recipient of an Edward R. Murrow Award for Investigative Reporting. Previously, he was a senior reporter at Gizmodo and a staff writer for the Daily ... Read More
Senior Reporter, National Security
Maxwell Zeff is a senior writer at WIRED covering the business of artificial intelligence. He was previously a senior reporter with TechCrunch, where he broke news on startups and leaders driving the AI boom. Before that, Zeff covered AI policy and content moderation for Gizmodo and wrote some of Bloomberg’s ... Read More
Senior Writer
Topics OpenAI agentic AI artificial intelligence cyberattacks cybersecurity generative AI
The Odyssey Was Made for Imax 70mm. Good Luck Watching It That Way
Over the last several years, the Imax format has taken on a few different forms—but only a few dozen theaters are capable of screening it in its full glory.
Corey Atad
Top NZXT Discount Codes for 2026
Save 50%, plus up to $250 with NZXT promo codes and discounts.
Luke Larsen
OK, Well, Rogue AI Agents Are Hacking Again
Rogue AI agents from OpenAI and Anthropic have again been caught trying to disrupt servers and software—and leaving instructions for future bad behavior.
Paresh Dave
OpenAI’s Hacking Debacle Comes Down to Human Error
If the generative AI giant had followed well-known security best practices, it’s likely that its AI agent would never have escaped to the open internet and hacked multiple companies.
Lily Hay Newman
Top Surfshark Promo Codes for August 2026
Save up to 87% with a Surfshark coupon code, 3 months of VPN free today, and more from WIRED.
Scott Gilbertson
Anthropic Says Claude Hacked Into 3 Organizations During Cybersecurity Tests
In a review triggered by OpenAI’s Hugging Face incident, Anthropic discovered three of its AI models had breached real-world organizations during third-party evaluations.
Louise Matsakis
Walmart Promo Codes: Up to 65% Off for August 2026
Score $10 off with our Walmart promo codes and coupon, and shop flash deals up to 65% off today.
Molly Higgins
For Taylor Swift, Madison Square Garden’s Controversial Cameras Briefly Went Dark
MSG’s sprawling surveillance system can monitor guests down to the second. Its owners made an exception for the pop star’s rehearsal dinner.
Noah Shachtman
Wellness Influencers Are Pushing ‘Natural’ and Unproven Alternatives to Adderall
Ads on Instagram, TikTok, and YouTube are painting prescription stimulants in a negative light while promoting supplements for ADHD that lack evidence.
Miles Klee
Top Uber Eats Promo Codes for August 2026
Hunger meets savings. Discover verified Uber Eats promo codes, new user offers, and Uber One discounts to slash your delivery fees and meal costs.
Molly Higgins
The OpenAI and Anthropic AI Hacking Sprees Are a Messy New Legal Frontier
Both major AI labs’ models broke containment, escaped onto the internet, and hacked other companies. If a human had done that, the law would likely be against them. But a bot?
Lily Hay Newman
The OpenAI Models That Hacked Hugging Face Were ‘Active on the Internet’ for Days
Plus: Russian hackers are trying to steal US nuclear scientists’ emails, the State Department bans known scammers from entering the United States, and more.
Lily Hay Newman
