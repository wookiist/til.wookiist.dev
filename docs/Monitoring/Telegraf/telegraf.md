---
id: 'telegraf'
title: 'Telegraf'
---

## Telegraf
Grafana + InfluxDB를 사용하면 Grafana를 통해서 InfluxDB에 적재된 데이터를 예쁘게 보여줄 수 있다. 그러나 적재할 데이터를 수집하고 이를 InfluxDB에 담는 도구가 없었다.

바로 이 역할을 하는 도구가 Telegraf!

Telegraf는 원하는 metric을 수집해서 우리가 지정한 곳으로 push하는 에이전트이다. 

## 정리하자면
> Telegraf + InfluxDB + Grafana

Telegraf에서 수집한 데이터를 InfluxDB에 적재하고, 이 데이터를 Grafana에서 시각화해서 보는 것!
