---
id: 'spark-intro-01'
title: 'Spark란'
sidebar_position: 1
---

![spark-arch](https://getto215.github.io/assets/img/2018-05-24-spark-Internals-of-job-execution-in-spark.jpg)

![spark-arch2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJPO7Q%2FbtqIhYGHU4K%2F70ZblAQys8BkEh7eLEqR40%2Fimg.png)
(https://artist-developer.tistory.com/8)


`spark-submit`을 실행하면, driver를 생성하게 된다. driver는 executor의 실행, 배포 등의 관리 역할을 담당한다. 사용자가 구성한 프로그램(Job)을 Task 단위로 변환해서 Executor로 전달한다. 
Spark Submit을 하면 Cluster Manager가 애플리케이션을 구성한 JAR 파일 등을 받게 되는데, 이 때, on K8S, on Yarn, on Mesos 등에 따라 어떤 컴포넌트가 실제로 이러한 파일을 받아 처리하게 될지가 달라진다. on Yarn의 경우, Resource Manager가 이를 스케줄링하여, Node Manager에 뿌리게 되며, Node Manager가 있는 Node에선 Executor를 만들어 실제 해당 Job 을 수행한다. 
