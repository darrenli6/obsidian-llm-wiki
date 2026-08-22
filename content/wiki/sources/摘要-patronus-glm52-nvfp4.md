---
title: "摘要-patronus-glm52-nvfp4"
type: source
tags: [glm, rl, quantization, engineering]
sources: [raw/01-articles/ai-news-2026-08-22-patronus-glm52-nvfp4.md]
last_updated: 2026-08-22
---

# 摘要：Patronus AI——把 744B 的 GLM-5.2 NVFP4 模型用 LoRA+RL 训起来的技术深潜

> 来源：Patronus AI 工程博客（Fujinuma 等，2026-07）。原文见 `raw/01-articles/ai-news-2026-08-22-patronus-glm52-nvfp4.md`

## 核心摘要

- **目标**：对 NVIDIA 发布的 NVFP4 4-bit 量化 GLM-5.2（744B 参数 MoE，约 40B 激活）做后训练——挂 bf16 LoRA（rank 64，仅 MLP），用 RL 训练它玩《超级马里奥》。工具链：Megatron-LM（TP4·EP4·ETP2，8×B200）+ SGLang（第二节点 rollout，分离部署）+ miles/slime（RL 框架，LoRA 支持）+ GRPO/DAPO。
- **关键修复 1——"4-bit 占 8-bit 内存"**：Transformer Engine 为 FP4 GEMM 在 forward/backward 各存一份按轴分块的量化权重（rowwise + columnwise），744B 每卡吃掉 110GB（本应 ~55GB）；去掉 columnwise 副本、backward 现场反量化转置为 bf16，降到 **56GB**，得以单节点训练（"QLoRA 的代价：用更慢的 backward 换放得下的模型"）。
- **关键修复 2——DSA 的二次方税**：GLM-5.2 使用 DeepSeek Sparse Attention（DSA，源自 DeepSeek-V3.2）；naive 参考实现藏了两个 O(N²) fp32 临时缓冲（indexer 与 attention 聚合），用分块（chunked）内核把峰值砍 ~10 倍。
- **关键修复 3——服务门禁**：NVFP4 MoE + 专家上挂 LoRA + 每步更新的 adapter，默认无 SGLang 配置支持；需锁 triton MoE runner、以 modelopt_fp4 服务、关掉 shared-experts fusion；代价是失去 CUDA graphs 与 fused MoE-LoRA 内核，只剩请求并发（~15x）一条路。
- **关键修复 4——warm-start 竞态**：RL 优化器在加载 SFT adapter 前就捕获了 fp32 主副本，第一步 step 把全零的 LoRA-B 初始化写回模型，导致 adapter 归零、模型退化复读；一行 `optimizer.reload_model_params()` 解决。
- **关键修复 5——奖励坍塌**：GRPO + 熵奖励（系数 0.1）导致组内样本同质化（零方差组 → 零 advantage → 无梯度），reward 冻结在常数；改用 **DAPO**（动态采样 + clip-higher）且熵系数归零后稳定在 ~670/350 rollout 全程无坍塌。
- **结论**：在测试规模下，**4-bit 对 SFT 与 RL 几乎无损**（bf16 vs NVFP4 曲线重叠）；限制策略表现的是规模与单 prompt 训练，不是量化；全部补丁开源（patronus-ai/miles-nvfp4、patronus-ai/megatron-lm-nvfp4）。

## 关联连接

- [[ZAI]] — 模型开发商（GLM-5.2）
- [[GLM-5.3]] — GLM 系列生态
- [[NVIDIA]] — NVFP4/Transformer Engine 生态
- [[开源权重AI]] — 开源权重模型的可训练性
