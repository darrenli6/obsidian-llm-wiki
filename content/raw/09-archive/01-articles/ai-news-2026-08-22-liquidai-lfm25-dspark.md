---
title: "Liquid AI 发布 LFM2.5 DSpark 投机解码模型：推理提速最高 3.2 倍"
type: article
tags: [model, inference, open-source]
source_url: https://www.liquid.ai/blog/lfm2.5-dspark
ingested: 2026-08-22
sha256: daa86d18a92a5e9dc0611168e7e79139a3166fdb386dc651604c7f385bb53452
summary: "Liquid AI 开源 LFM2.5 三个尺寸的 DSpark 草稿模型（投机解码），H100 最高 3.18x、M4 Max 端侧最高 2.87x 吞吐提升，llama.cpp 与 SGLang 首日支持，2.6B 主打“首个可用的端侧 agentic 模型”。"
---

# Liquid AI 发布 LFM2.5 DSpark 投机解码模型：推理提速最高 3.2 倍

> 原文：https://www.liquid.ai/blog/lfm2.5-dspark（ingested 2026-08-22）

Today, we release DSpark [1] draft model checkpoints for three models from our LFM2.5 family: LFM2.5-1.2B-Instruct, the recently released LFM2.5-2.6B, and LFM2.5-8B-A1B. These add a speculative decoding path that trades a minimal memory increase for a large decoding speedup without changing output quality. The draft models reach up to 3.18 throughput improvement on a GPU and up to 2.87x on-device.
This is the first public release of speculative decoding models for Liquid Foundation Models (LFMs). We believe co-designing the model architecture with speculation methods to model real-world inference characteristics will be a crucial part of model design going forward.
The DSpark draft models for LFM2.5-1.2B-Instruct, LFM2.5-2.6B, and LFM2.5-8B-A1B are available today on Hugging Face. Additionally, the LFM-compatible DSpark integration is open-sourced upstream in llama.cpp and SGLang. Check out the model cards for how to run them.
How DSpark works
The decode phase in LLM inference is traditionally memory-bound. Most of the latency comes from streaming weights from DRAM into SRAM, not from intense computation. This is true for both powerful GPUs, such as the NVIDIA H100, and for edge devices like MacBooks or iPhones.
Speculative decoding addresses this issue by using a lightweight draft model to produce candidate tokens. The target model then verifies them all in a single forward pass, sharing the cost of loading the weights across all tokens we are verifying.
Over the years, multiple approaches of speculation have been proposed, with the most prominent being EAGLE-3 [2], DFlash [3], and, most recently, DSpark, which combines three components:
DFlash-style parallel backbone conditioned on context features from the target model that runs a single forward pass over a block and produces hidden states and base logits for each of kkk draft tokens.
A lightweight sequential head, modeled as a Markov chain between neighboring tokens, that biases each position's logits toward continuations consistent with the token sampled just before it. This adds dependency between drafted tokens, which is absent in the DFlash approach, raising the acceptance rate at later positions.
A confidence-scheduled verifier: a separate head predicts each draft token's acceptance probability conditioned on all previous ones being accepted, and a hardware-aware scheduler prunes low-confidence suffixes whenever verifying them would cost more batch capacity than they're worth.
Training
We follow the DSpark recipe with an extended data mixture to train on larger and more diverse groups of datasets. Our final corpus mixes SFT, chat, code, and function-calling data.
To find the optimal setting, including the optimal number of layers, block size, and model architecture, we run ablations on a subset of the full training dataset. For the first version of the draft models, we used simplified attention-only draft models. Throughout the ablations, we settled on 5 layers with a block size of 9. For each draft model, we ran 15 epochs on the entire dataset.
For each epoch, we measured the validation loss and the acceptance rate across target benchmarks. Figure 1 shows that the three models do not behave alike: For LFM2.5-1.2B-Instruct, acceptance improves consistently across epochs, closely tracking the fall in validation loss. LFM2.5-2.6B improves for the first few epochs and then plateaus, its acceptance flattening well before the loss does. LFM2.5-8B-A1B is the least stable, with validation loss decreasing with more tokens but not yielding gains in acceptance.
Figure 1: Mean acceptance length and validation loss over training tokens
The takeaway is that validation loss is a useful in-flight signal for the LFM2.5-1.2B-Instruct draft, but for the larger drafts it keeps improving after the benchmark acceptance we care about has stopped moving. For the final published checkpoints, we therefore select the epoch with the highest acceptance rate rather than based on loss.
The resulting draft models are relatively small, with each around ~300M parameters, as shown in Table 1. We trained each model and ran all ablation studies exclusively on AMD hardware using Liquid AI’s training framework.
Component
LFM2.5-1.2B-Instruct
LFM2.5-8B-A1B
LFM2.5-2.6B
Decoder stack (5 layers)
241.2M
241.2M
241.2M
Hidden-state projection
21.0M
21.0M
21.0M
Markov head
33.6M
65.5M
65.5M
Norms + confidence head
27.5k
27.5k
27.5k
Total
295.7M
327.7M
327.7M
Table 1: Draft model size. Embedding and LM head are tied to the target, not carried by the draft.
Quality parity
Under greedy decoding, a draft token is only accepted if it matches the target model’s distribution. On rejection, the target model's own token takes its place. The emitted sequence is therefore identical to baseline greedy by construction, so benchmark accuracy (pass@1 or exact match) is unchanged.
Faster Inference
DSpark draft models for LFM2.5 ship with day-one support across the inference ecosystem:
llama.cpp — GGUF checkpoints for efficient edge inference
SGLang — GPU-accelerated serving for production throughput
SGLang implementation builds on the official SGLang implementation of DSpark, and llama.cpp builds on the official codebase, which we run with experimental metal kernels.
We measure on-device throughput with llama.cpp and Metal on an M4 Max MacBook Pro using FP16 GGUF weights at batch size 1, temperature 0, and up to 256 output tokens. We measure GPU throughput with SGLang on a single H100 80 GB in BF16 at batch size 1 and temperature 0. Both configurations use DSpark block size 9 and are evaluated on five benchmark datasets (MATH500, GSM8K, HumanEval, MBPP, MT-Bench).
Table 2 presents the throughput results for LFM2.5-2.6B. Both the large-scale accelerator (H100) and the edge deployment (M4 Max MacBook) see a noticeable improvement in throughput across diverse datasets. Speedup on MacBook is especially noticeable as it pushes the interactivity level a user can enjoy to a level far exceeding the throughput offered by most proprietary cloud models (around ~140 tok/s, depending on the dataset).
Dataset
Acceptance (of 10)
Speedup on H100
Speedup on M4 Max
MATH500
5.42
3.06x
326 → 1000 tok/s
2.25x
61 → 137 tok/s
HumanEval
4.54
2.56x
326 → 835 tok/s
2.63x
61 → 161 tok/s
MBPP
4.71
2.64x
326 → 861 tok/s
2.11x
62 → 132 tok/s
GSM8K
4.32
2.22x
312 → 693 tok/s
2.36x
60 → 143 tok/s
MT-Bench
5.07
2.87x
325 → 933 tok/s
1.99x
62 → 123 tok/s
Mean
4.81
2.67x
323 → 864 tok/s
2.27x
61 → 139 tok/s
Table 2: LFM2.5-2.6B Acceptance and speed up (DSpark block 9, bs=1, temp=0, SGLang on 1xH100 vs llama.cpp + Metal on M4 Max)
Our main goal for LFM2.5-2.6B was to make it the first viable on-device agentic model. In agentic workloads, the model reasons before every tool call, and the user waits through it all. That is where speculation pays most. In Figure 2, we show the final impact on latency by testing function calling on the BFCL dataset [4]. Across various multi-tool scenarios, DSpark reduces the latency by 57% on average.
Figure 2: BFCL function call latency on an M4 Max MacBook Pro using FP16 GGUF weights at batch size 1, temperature 0.
We use the same test setup as for LFM2.5-1.2B-Instruct. In Table 3, we present the throughput results for LFM2.5-1.2B-Instruct. Note that, in contrast to the 2.6B model, 1.2B is a non-reasoning model. For 1.2B, we observe much more variance in dataset acceptance rates, so speedup varies by as much as 52% depending on the distribution of the underlying text.
Dataset
Acceptance (of 10)
Speedup on H100
Speedup on M4 Max
MATH500
6.02
2.56x
668 → 1712 tok/s
2.62x
140 → 366 tok/s
HumanEval
5.31
2.26x
664 → 1499 tok/s
2.87x
136 → 389 tok/s
MBPP
5.52
2.37x
667 → 1578 tok/s
2.74x
137 → 375 tok/s
GSM8K
4.34
1.67x
624 → 1041 tok/s
2.73x
140 → 381 tok/s
MT-Bench
3.90
1.66x
657 → 1091 tok/s
1.72x
137 → 237 tok/s
Mean
5.02
2.10x
656 → 1384 tok/s
2.54x
138 → 350 tok/s
Table 3: LFM2.5-1.2B-Instruct Acceptance and speed up (DSpark 5L, block 9, bs=1, temp=0, SGLang on 1xH100 vs llama.cpp + Metal on M4 Max)
For LFM2.5-8B-A1B, the inference gets more challenging. The acceptance rate goes up compared to two dense models (8B-A1B is also a thinking model), but the observed real-world speedup does not reflect this. While we can achieve a reasonable 2.54x throughput improvement on average on a GPU, we get only an 18% improvement on edge devices, as shown in Table 4. This is due to the current MoE implementation in llama.cpp's Metal backend, and to the fact that verifying k tokens activates more experts and thus more weight traffic than a single decode step.This will be a subject of subsequent work, and we publish the numbers for transparency.
Dataset
Acceptance (of 10)
Speedup on H100
Speedup on M4 Max
MATH500
8.27
3.18x
428 → 1362 tok/s
1.21x
93 → 112 tok/s
HumanEval
7.02
2.58x
426 → 1100 tok/s
1.12x
91 → 101 tok/s
MBPP
6.93
2.64x
426 → 1122 tok/s
1.09x
89 → 97 tok/s
GSM8K
4.02
1.29x
385 → 496 tok/s
1.44x
90 → 129 tok/s
MT-Bench
8.52
3.02x
426 → 1288 tok/s
1.04x
87 → 90 tok/s
Mean
6.95
2.54x
418 → 1074 tok/s
1.18x
90 → 106 tok/s
Table 4: LFM2.5-8B-A1B Acceptance and speed up (DSpark 5L, block 9, bs=1, temp=0, SGLang on 1xH100 vs llama.cpp + Metal on M4 Max)
Interactivity
The speedups are not exclusive to the batch size=1 scenario. Consider the trade-off between aggregate system throughput and the throughput experienced by individual users running at different concurrency levels, also known as interactivity.
As we increase the concurrency level, the arithmetic intensity increases, slowly transitioning from the memory-bound to the compute-bound regime. The increase in arithmetic intensity is amplified by the draft tokens the target model must verify. Together, this closes the cumulative speedup gap between the model running with DSpark and the baseline model.
All of the tests were run on SGLang with a single H100 without a confidence-scheduled verifier. DSpark's confidence head can dynamically trim how many tokens to verify per request, but in our experiments the tokens it drops cost more than the compute it saves, so we serve a fixed verify window instead.
For LFM2.5-2.6B, performance converges around bs=128 for block size 9, depending on the distribution of the underlying task.
Figure 3: Interactivity on SGLang for LFM2.5-2.6B
For LFM2.5-1.2B-Instruct, interactivity is slightly better, with DSpark being a clear winner even at the batch size of 128, as shown in Figure 4.
Figure 4: Interactivity on SGLang for LFM2.5-1.2B-Instruct
The high acceptance rate of LFM2.5-8B-A1B is nicely reflected in the interactivity graph shown in Figure 5. Across all datasets and concurrencies, DSpark dominates the base models, even on datasets with a relatively lower acceptance rate, like GSM8K. The underlying reason is that batching and speculation activate the same bigger portion of the model, so at higher concurrency the baseline pays that cost too, and the overhead stops counting against speculation.
Figure 5: Interactivity on SGLang for LFM2.5-8B-A1B
Get Started
DSpark draft models are available on Hugging Face as Safetensors and in GGUF format
Safetensors: LFM2.5-2.6B-DSpark, LFM2.5-1.2B-Instruct-DSpark, and LFM2.5-8B-A1B-DSpark
GGUF: LFM2.5-2.6B-DSpark-GGUF, LFM2.5-1.2B-Instruct-DSpark-GGUF, LFM2.5-8B-A1B-DSpark-GGUF
With LFM2.5, we're delivering on our vision of AI that runs anywhere. These models are:
Open-weight — Download, fine-tune, and deploy without restrictions.
Fast from day one — Day-one support for llama.cpp (the numbers reported achieved with the experimental kernels from this PR) and SGLang
A family — Three sizes let you trade accuracy for footprint as your deployment demands.
