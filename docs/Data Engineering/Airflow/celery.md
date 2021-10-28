---
id: 'celery'
title: 'Celery'
---

## Celery
- Celery는 Python의 동시성 프로그래밍 작업할 때 많이 사용하는 방법. 분산 메시지 전달 기반으로 동작하는 비동기 작업 큐이다. django 등으로 API 서버를 개발, 운영하면서 사용자 요청에는 포함될 필요가 없는 불필요한 과정 또는 매우 무거운 쿼리 실행을 포함하는 경우가 있는데 이런 작업을 Celery Task로 정의해서 Broker(RabbitMQ)와 Consumer(Celery Worker)를 이용해 Async하게 처리하여 사용자에게 빠른 응답 결과를 제공한다.
- 위에서 소개한 것처럼 Celery는 Django 모듈과 연결되어 사용하기 때문에 그냥 python 파일 하나를 등록해서 사용하는게 아니라 django 모듈의 애플리케이션을 써줘야 한다.