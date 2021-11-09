---
id: 'de-terms'
title: 'Data Engineering Terms'
sidebar_position: 1
---

## CDC
> Change Data Capture - DB 내 데이터에 대한 변경만을 식별해 필요한 후속처리(데이터 전송/공유 등)를 자동화하는 기술 또는 설계 기법이자 구조


## EDA
> Exploratory Data Analysis - 탐색적 데이터 분석

* Reference : [https://jalynne-kim.medium.com/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D-%EA%B8%B0%EC%B4%88-eda%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D-%EC%9E%98-%ED%95%98%EB%8A%94-%EB%B2%95-a3cac2cc5ebc](https://jalynne-kim.medium.com/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D-%EA%B8%B0%EC%B4%88-eda%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D-%EC%9E%98-%ED%95%98%EB%8A%94-%EB%B2%95-a3cac2cc5ebc)

## Erasure Coding

HDFS, RAID 외에 스토리지에서 데이터 저장공간의 효율성을 위해 설계된 데이터 복제 방식

Erasure Code를 이용해 데이터를 인코딩하고, 데이터 손실시 디코딩 과정을 거쳐 **원본 데이터를 복구하는 데이터 복구 기법**중 하나이다. 

최대 K개의 데이터가 손실되어도, N개의 데이터만 살아 있다면 원본 데이터가 복구 가능한 방식이다.

하지만, 데이터 손실시 복구할 수 있는 기법을 제공할 뿐, **데이터 백업을 대체하는 방식이 아님에 주의**

## GSLB
> Global Server Load Balancing - 이름과는 다르게 DNS 서비스의 발전된 형태 

## JournalNode
Hadoop 설치 시에 이중화 구성을 할 때 이용하는 방식. 최근에 많이 사용하고 있다. JournalNode는 이름처름 파일 시스템의 Journaling 정보를 보관 및 공유하는 기능을 수행한다. 보통 3대의 서버로 구성하며, Splitbrain 문제를 막기 위해 Zookeeper와 유사한 방식을 사용해 이를 방지하고 있다. 

## RDD
> Resilient Distributed Datasets - 데이터 처리 과정에서 셋을 이루고 있던 데이터의 일부에 문제가 발생해도 스스로 복구할 수 있는 데이터셋을 의미