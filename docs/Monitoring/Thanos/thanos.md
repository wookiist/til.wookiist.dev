---
id: 'thanos'
title: 'Thanos'
---

## Thanos?
Prometheus는 클러스터링 구조를 지원하지 않는다. 이 때문에 확장성 및 가용성 측면에 문제가 있다. 이를 해결하기 위해 Thanos를 활용한다.

![Thanos](https://t1.daumcdn.net/cfile/tistory/997A46375E3EC46111)

/출처 : https://bcho.tistory.com/1375

위 구조에서 볼 수 있듯이, 여러 개의 Prometheus로부터 메트릭을 종합하여 Thanos에서 전체 Prometheus 메트릭을 볼 수 있도록 해준다. 또한 수집한 메트릭을 Scalable한 스토리지에 저장해 어떤 Prometheus 인스턴스가 Down 상태가 되더라도, 해당 인스턴스가 담당하는 메트릭을 언제든 조회할 수 있도록 도와준다. 