---
id: 'release'
title: 'Hadoop Release'
---

## 1. Apache (Community Edition)

### 장점

- 완전한 오픈 소스로, 무료임
- 활성화된 커뮤니티가 있음

### 단점

- 버전 관리가 혼란스럽고 선택이 어려움. Hive, Sqoop, Flume, Spark 등을 함께 구축하고자 할 때, 버전 일치, 구성 요소 충돌, 컴파일 문제 등 다양한 호환성을 고려해야 함
- 클러스터 설치 및 배포가 복잡하며, config 파일을 많이 작성하게 됨. 노드마다 분산되어 있어 실수하기 쉽고, 효율성은 낮음
- 클러스터의 운용 및 유지 보수가 복잡함

## 2. CDH (3rd Party)

### 장점

- 버전 관리가 명확함(CDH3, CDH4 ...)
- 빠르고 명확한 버전 업데이트, 매년 하나의 릴리즈가 있음
- 클러스터 설치와 배포가 간단하며, 배포, 설치, 구성 도구 등을 제공하고 있어 배포 효율성이 높음
- 간단한 제어, 유지 보수, 모니터링, 진단, 구성 수정 도구 등 다양한 도구를 제공함

### 단점

- vendor lock-in

## 3. HDP (Hortonworks Data Platform)

### 장점

- Windows Platform을 지원하는 Hadoop 배포판
- HDP Amabari admin interface 제공

### 단점

- 이제 오픈소스가 아님..

- Ref : [https://cdmana.com/2021/07/20210724013915846P.html](https://cdmana.com/2021/07/20210724013915846P.html)