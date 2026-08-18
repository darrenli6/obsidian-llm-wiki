---
title: "DeepMind WeatherNext：AI 气旋预报突破，为预报员多争取一天预警时间"
type: article
tags: [ai-news, deepmind, weather, science, open-source]
source_url: "https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/"
ingested: 2026-08-18
sha256: 4c9260be56ab270bcb588341b5350148353959958d95d594856acbab1fb66040
summary: "Google DeepMind 在 Nature 发表 WeatherNext：单一 AI 模型同时预测热带气旋的路径、强度与风场，平均多出 24 小时预警提前量（相当于气象学十年进步）；模型与权重已开源，并配套 WeatherNext 2 / 2-mini 与 Weather Lab 可视化。"
---

# DeepMind WeatherNext：AI 气旋预报突破，为预报员多争取一天预警时间

> 来源: https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/

## 正文摘要

Google DeepMind 在 Nature 发表 WeatherNext：单一 AI 模型同时预测热带气旋的路径、强度与风场，平均多出 24 小时预警提前量（相当于气象学十年进步）；模型与权重已开源，并配套 WeatherNext 2 / 2-mini 与 Weather Lab 可视化。

## 抓取正文（原文清洗）

## WeatherNext: AI model achieves breakthrough in forecasting cyclones
WeatherNext team Share
WeatherNext enables accurate cyclone forecasts that can give an extra day of warning. Now we are open sourcing the model.
Predicting how dangerous cyclones develop is a longstanding challenge where every hour counts. Tropical cyclones — also known as hurricanes or typhoons — are among the most destructive weather phenomena on Earth, responsible for more than 700,000 deaths and $1.4 trillion in economic losses globally over the past 50 years. For forecasters, issuing timely, accurate warnings is a constant race against time.
Today, in a paper published in Nature , we show that our WeatherNext AI model achieved state-of-the-art accuracy in predicting a cyclone's track, intensity, and wind structure. On average, our model gives forecasters an extra day’s worth of predictive accuracy: our three-day forecasts are as good as what prior models were able to provide for only the next two days. This scale of improvement corresponds roughly to a decade’s worth of meteorological progress.
This collaborative work brought together AI researchers and engineers at Google DeepMind and Google Research, with expert forecasters at the National Hurricane Center (NHC), the Cooperative Institute for Research in the Atmosphere (CIRA), the UK Met Office , and weather agencies around the world.
Our research has already had real-world impact. During the 2025 hurricane season, our model helped the NHC to make a historic forecast for Hurricane Melissa by predicting the storm’s rapid intensification and landfall in Jamaica. This enabled the NHC to issue an advance warning, giving teams on the ground critical time to prepare. This year, we continue to work together and are now predicting 1,000 possible scenarios for each cyclone to help support forecasters in their decision-making.
Weather affects everyone. Given this broad impact, we are now open sourcing our WeatherNext 2 and WeatherNext Cyclones models used during the hurricane season. By making this technology openly available, we hope to empower the research community and amplify AI's impact in building more resilient communities – whether that be providing local forecasters with the tools they need to prepare for natural disasters , supporting the growth of renewable energy, or anticipating extreme weather.
## How WeatherNext predicts weather and cyclones
Starting from global atmospheric conditions during Hurricane Milton (October 2024), WeatherNext Cyclones iteratively predicts both global weather patterns and fine-scale cyclone tracks up to 15 days in advance. Running a 1,000-member ensemble generates localised probability maps of tropical storm to hurricane-force winds.
Predicting cyclones has typically forced a trade-off requiring two distinct modeling techniques. A cyclone's track (where it goes) is steered by massive, global atmospheric currents, which before now have been best modeled by coarser global models. However, a cyclone’s intensity (how strong it gets) is driven by highly localized, fine-scale thermodynamic physical processes around its core, which are best modeled by specialized, higher resolution, local models.
Our WeatherNext model bridges this gap by improving forecasting for global weather overall as well as cyclones. It is a single AI model that predicts a tropical cyclone’s track, intensity, and wind structure with state-of-the-art accuracy. It achieves this breakthrough through a unique combination of its training, architecture and approach to low resolution inputs.
We evaluated WeatherNext Cyclones on historical cyclones from 2023 to 2024, benchmarking its deterministic and probabilistic performance against other top weather models. On average, WeatherNext Cyclones gains more than a full day (24 hours) of lead time advantage for predicting cyclone tracks, intensity, and wind structure.
The model was co-trained on two distinct data modalities: global weather dynamics and expert-curated historical cyclone observations. By training end-to-end on nearly 20 terabytes of global atmospheric data and the historical IBTrACS database spanning nearly 5,000 historical storms, the model learns complex atmospheric patterns and how to model extreme weather.
Cyclone forecast accuracy has been steadily advancing over recent decades. The plots show the 3-day accuracy of ECMWF-ENS track forecasts (a) and HWRF intensity forecasts (b) over the years, and how WeatherNext Cyclones contributes a step change in accuracy for both track and intensity. This improvement is the equivalent to a one-decade progress according to trends over the last 20 years.
Our model uses Functional Generative Networks (FGNs) to efficiently produce ensembles of different predictions, which captures the inherent uncertainty of the weather. We can now generate a single 15-day forecast in less than a minute on a TPU, empowering forecasters to quickly evaluate the probability distribution of potentially devastating tail-risks. Last year, our system produced 50 predictions at a time, matching global physics models. This year we scaled our ensemble size to 1,000 members, capturing rare but consequential scenarios like rapid intensification events, as occurred during Hurricane Melissa in 2025.
Up until now, operating at very high spatial resolution has been considered the main driver for making accurate intensity forecasts. However, WeatherNext Cyclones only needs data with a resolution of 28x28km, 100x coarser than traditional models. A smaller version of the model, WeatherNext 2-mini, which operates at a coarser 111x111km resolution, also shows great performance. This has surprised scientists, and it remains an open research question to fully understand how our models produce such accurate predictions at this resolution. We hope that, together with the research community, we can find out.
## Opening up WeatherNext to the research community
Alongside our Nature paper, we are open sourcing the code
