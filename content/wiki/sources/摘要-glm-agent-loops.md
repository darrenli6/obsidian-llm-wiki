---
title: "摘要-glm-agent-loops"
type: source
tags: [glm, engineering, coding-agents]
sources: [raw/01-articles/ai-news-2026-08-19-glm-agent-loops.md]
last_updated: 2026-08-19
---

# 摘要：Unblocked 实践——把 agent 循环从 Claude 迁到 GLM 的经验

> 来源：Unblocked 博客（Dennis Pilarinos），2026-08-13。原文见 `raw/01-articles/ai-news-2026-08-19-glm-agent-loops.md`

## 核心摘要

- **迁移决策**：Unblocked 将大部分 agent 流量（代码审查、工程问答）从 Claude Opus 迁至开源权重模型 GLM 5.2（经 Fireworks/Together/Baseten 等第三方推理商服务）。
- **成本真相**：按 token 单价宣称省 95%，按任务实际省 68%——GLM 每任务消耗更多 token（更爱调用工具、更多试错、更冗长；搜索流程每调用 token 从 ~18.5k 升至 ~24.7k）。教训：**按任务算成本，不按 token 算**。
- **质量评估**：生产环境双管道盲测（同一 PR 两个模型同时审查，用户情绪投票）——Opus 精度最佳、GLM 紧随其后且可接受，某 GPT 系替代品精度远差。公共基准无法回答选型问题。
- **工程痛点**："OpenAI-compatible" 是一个光谱：reasoning 字段格式不一、推理强度映射可悄悄烧钱、缓存键各家不同、结构化输出支持参差、流式用量统计口径不同；需要模型×供应商一致性测试套件与确定性提示适配层。
- **供应商池化**：模型不是产品，serving 栈才是；用断路器+优先路由+自适应路由（按成本/可靠性/速度实时采样）管理多供应商池，Claude 保留为深度兜底与合规池。
- **回归教训**：换模型一周后质量/延迟下滑，拆解为"模型探索纪律+工具调用正确性+循环预算+供应商健康+仪表口径"五个可分离因素。
- **最终结论**：前沿模型仍更准，但对有良好测量与评估反馈的 agent 循环，质量差距已小到不足以抵消成本差距；模型选择从一次性决策变成持续运营的系统。

## 关联连接

- [[GLM-5.3]] — 同系列下一代模型
- [[ZAI]] — 模型开发商
- [[编码智能体]] — 应用领域
- [[开源权重AI]] — 分发模式
