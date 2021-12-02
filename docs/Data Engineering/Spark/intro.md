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

`spark job`을 실행하면, driver가 생성되며 driver는 executor를 생성한다. executor는 처리 결과를 driver로 전달하는데, 이 과정에서 driver가 속한 호스트를 찾을 수 없는 경우, backend 에러가 발생하며, spark를 사용할 수 없게 된다... (21.11.16 현재 이 문제로 인해 골머리가 아프다. statefulset 을 추후에 patch하는 것도 생각해봤는데, ./spec/template/spec 에 위치한 옵션을 하나 추가하는 방식으로 patch 해보았지만 add 되지 않는 것을 확인했다. ㅠㅠ -> kubeflow notebook controller의 문제였다.... -> controller 제거 후에는 정상적으로 패치가 됐다.) 