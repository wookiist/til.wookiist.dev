---
id: 'journal-node'
title: 'JournalNode'
---

Hadoop 설치 이후에 이중화 구성을 할 때 이용하는 방식으로 최근에 자주 사용되고 있다. 

* JournalNode는 edits 정보(일반적으로 파일 시스템의 journaling 정보)를 저장하고 공유하는 기능을 수행한다. JournalNode는 한 대의 서버가 아닌 세 대의 서버를 사용하여 구성한다. 이 때 발생할 수 있는 SplitBrain 문제를 막기 위해 Zookeeper와 유사한 방식을 사용해 JournalNode가 이를 방지해준다. 