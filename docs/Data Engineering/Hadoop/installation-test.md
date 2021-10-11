---
id: 'hadoop-installation-test-01'
title: 'Hadoop Installation Demo (Single Node, Standalone Mode)'
---

## 설치 과정 요약
1. `hadoop-env.sh` 파일에 `JAVA_HOME` 정의해주기
2. `core-site.xml`, `hdfs-site.xml`, `mapred-site.xml`, `yarn-site.xml` 4개의 파일 configuration 수정하기
3. `bashrc` 파일에 `HADOOP_HOME`과 그 외의 정보 수정하기
4. format 커맨드를 이용해 HDFS의 namenode 포맷하기
5. `sbin` 디렉터리에 있는 `start-dfs.sh`, `start-yarn.sh` 커맨드를 이용해 Hadoop 홈 디렉터리에서 HDFS 서비스 시작하기
6. `jps` 커맨드로 모든 Hadoop 서비스가 정상적으로 떴는지 확인하기 
    
    ```bash
        ubuntu@test:~/hadoop$ jps
        8722 DataNode
        9444 NodeManager
        8534 NameNode
        8987 SecondaryNameNode
        9261 ResourceManager
        9853 Jps
    ```

vm에 정상적으로 설치된 하둡의 모습.
테스트용으로 설치한 것이니 따로 ID 등을 블러처리할 필요는 없을 거 같다.

## Namenode
`http://{IP}:9870`
![Untitled](https://github.com/wookiist/til.wookiist.dev/blob/documentation/static/img/Data_Engineering/Hadoop/namenode-web.png?raw=true)

## YARN(?, RM, NM)
`http://{IP}:8042`
![Untitled](https://github.com/wookiist/til.wookiist.dev/blob/documentation/static/img/Data_Engineering/Hadoop/yarn-web.png?raw=true)

## Datanode
`http://{IP}:9864`
![Untitled](https://github.com/wookiist/til.wookiist.dev/blob/documentation/static/img/Data_Engineering/Hadoop/datanode-web.png?raw=true)