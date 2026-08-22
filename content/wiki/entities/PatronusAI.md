---
title: "PatronusAI"
type: entity
tags: [company, evaluation, rl]
sources: [raw/01-articles/ai-news-2026-08-22-patronus-glm52-nvfp4.md]
last_updated: 2026-08-22
---

## 定义

Patronus AI——LLM 可靠性与评估公司（模型测试、评估框架、RL 环境工具），2026 年完成 $50M Series B；其工程团队以开源栈做前沿模型后训练实验，代表性成果是把 744B 的 GLM-5.2 NVFP4 量化模型用 QLoRA+RL 训起来。

## 关键信息

- **融资**：$50M Series B（2026-08 宣布）。
- **工程代表作**（2026-07）：GLM-5.2 NVFP4 后训练深潜——修复 Transformer Engine"4-bit 占 8-bit 内存"（110GB→56GB）、DSA 分块内核、SGLang NVFP4-MoE-LoRA 服务门禁、warm-start 优化器竞态、GRPO 奖励坍塌（改 DAPO）；结论是 4-bit 对 SFT/RL 几乎无损。
- **开源贡献**：patronus-ai/miles-nvfp4（NVFP4 QLoRA 层）、patronus-ai/megatron-lm-nvfp4（训练侧 DSA 内核）。
- **生态位置**：与 [[NVIDIA]] Transformer Engine / Blackwell（B200、FP4 MMA）、[[ZAI]] GLM 模型、SGLang/Megatron 开源推理训练栈紧密协作。

## 关联连接

- [[ZAI]] — GLM 模型合作方
- [[GLM-5.3]] — GLM 生态
- [[NVIDIA]] — NVFP4/硬件生态
- [[摘要-patronus-glm52-nvfp4]] — 来源
