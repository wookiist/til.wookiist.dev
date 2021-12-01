---
id: 'jmx'
title: 'jmx'
---

## Java Management eXtension
JMX는 JDK 1.5부터 포함된 API로, 실행 중인 애플리케이션의 상태를 모니터링하고 설정을 변경할 수 있게 도와주는 API다. 

JMX를 통해 리소스를 관리하려면, MBeans라는 Managemd Beans를 생성해야 하며, 이를 MBean Server에 등록해야 한다. Server는 MBeans를 관리하는 Agent 역할을 수행하며, 당연하지만 구현한 애플리케이션 내부에 띄운다. 