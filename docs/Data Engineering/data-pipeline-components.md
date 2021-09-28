---
id: 'data-pipeline-components'
title: '데이터 파이프라인 요소 정리'
---

> 레퍼런스로 삼은 데이터 플랫폼을 분석하고 요소와 친해지기 위해 간단하게 컴포넌트를 정리해보았다.

## Sqoop
RDB와 분산 파일 시스템 사이의 양방향 데이터 전송을 위한 도구

## Kafka
TBD

## Stream-Connect (Kafka Connector)
Streaming Process Engine으로 Data와 Kafka를 연결해주는 매개체 역할을 한다. Kafka Connect는 Connector를 이용해서 data source와 연결하며, 정리하자면, Kafka Connector가 Producer와 Consumer의 역할을 한다.

* Source Connector : Kafka Connector에서 Producer 역할
* Sink Connector : Kafka Connector에서 Consumer 역할

![kafka_connector_image](https://debezium.io/documentation/reference/1.3/_images/debezium-architecture.png)
출처 : https://debezium.io/documentation/reference/1.3/architecture.html

참고로 Kafka의 세계도 굉장히 넓다. Kafka Streams와 Kafka Connect는 명백히 다른 요소라는 것. (http://cloudurable.com/blog/kafka-ecosystem/index.html)

## Logstash
TBD

## Spark Streaming
Streaming Processor로 Flink나 Kafka Streams와 달리 **소규모** 일괄 batch 작업을 통해 Streaming 데이터를 처리한다. Native Stream 보다는 그 지연시간이 길다는 단점이 있으나 내결함성(Fault-tolerance) 유지가 잘 된다는 이점도 있다. (Exactly-once)

## Flink
Streaming Processor로 Native Stream 하게 구현되었다. 지연시간이 최소화된다는 장점이 있으나, 내결함성 유지가 어려울 수 있다. (At-least-once) 일괄처리 기능도 제공하지만 주로 스트림 프로세싱을 목적으로 사용한다.

TSDB인 influxDB와 시각화 툴인 Grafana를 함께 세트로 사용하는 것으로 보인다.

## Druid
ElasticSearch나 Kudu에 비해 검색 성능이 고르게 준수한, 대규모 데이터 세트에 대해 빠른 분석을 제공하는 실시간 분석 데이터베이스이다.
Grafana에서 Druid Plugin을 이용해 DSL Query를 작성하여 시각화할 수 있다.

## Hadoop
TBD

## Kudu
빠른 Scan 성능과 적은 Storage 요구사항을 갖고 있는 칼럼 기반 스토리지(Columnar Storage)이다. PK를 제공하기 때문에 ms 수준의 랜덤 액세스가 가능하다. 다만 PK가 없는 경우 매우 느리다. 또한 쿼리를 제공하지 않기 때문에 Impala와 함께 사용하는 것으로 보인다.  

## HBase
중복 제거 및 기록용으로 쓰이는 것 같다. 

다만 궁금한 것은, 궁극적으로 HBase로 빠진 녀석들은 Redis에 캐싱된 데이터와 함께 전부 Kubernetes로 빠지는 구조로 만들어져 있는데, 이게 무슨 역할을 하는 건지 모르겠다.

## Redis
HDFS 캐싱을 목적으로 하는 In-memory 큐이다. 다량의 로그가 빠르게 쌓일 것에 대비하여 앞단에 큐를 놓는 구조일 수 있다. 하지만 여기선 아닌 것 같은데, 이 부분도 궁금하다. 

Java 진영에선 Spark-Redis를 쓰는 것 같기도 한데, 여러 면에서 Jedis를 추천하는 것으로 보인다. 

## Elastic
TBD

## influxDB
TSDB로 시계열 데이터베이스이다. Go로 작성되었다.

## Spark
TBD

## Hive
HDFS에 사용하는 SQL 쿼리 엔진으로 주로 배치 작업에 많이 사용된다. 

## Impala
HDFS에서 대화형 쿼리 엔진 역할을 한다. Presto와는 어떤 차이가 있는지 알고 싶다.

## Kibana
시각화, 분석, 인덱싱 툴

## Airflow
Stream Processing 등이나 MySQL 등 컴포넌트에 대한 전체적인 애플리케이션 제어를 하며, 워크플로 관리를 한다.

## Jenkins
Batch 작업을 수행하도록 할 때 사용하는 것으로 보인다. 

## Hue
Web Interface

## Jupyter
대화형 쿼리 엔진을 이용해서 빠르게 데이터에 대해 애드 혹 형식으로 사용하고 싶을 때 이용하는 파이썬 툴
