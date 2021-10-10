---
id: 'hadoop command'
title: 'Hadoop Command'
---

`$ COMMAND [OPTIONS] SUBCOMMAND [SUBCOMMAND OPTIONS]`

## COMMAND
- `hadoop`, `hdfs`, `yarn` 명령어가 여기에 속함

## OPTIONS
- Java 관련 프로세스 옵션으로 `--buildpaths`, `--config`, `--debug`가 이에 속함

## SUBCOMMAND
- 실제 작업을 수행하기 위한 명령어
- `fs`, `jar`, `archive`, `node`, `rmadmin` 등의 명령어가 여기에 속함

## SUBCOMMAND OPTIONS
- 이름 그대로 SUBCOMMAND에서 받을 추가적인 옵션 인자들
- `-P`, `-h`, `-format` 등이 속함

---

## File System Shell (FS)

### put
`--put fs ...`는 현재 로컬 리눅스 FS에서 하나의 파일이나 디렉터리를 HDFS의 목적지로 복사하는 명령어이다. 

### copyFromLocal
`put` 명령어와 유사하다. 그러나 `copyFromLocal`은 오로지 local에서 HDFS로만 데이터를 복사하는 반면, `put`은 HDFS든 로컬 파일 시스템이 되었든 어디서든 파일을 복사해올 수 있다. 비슷한 논리로 파일을 hdfs로부터 가져오는 `get`과 `copyToLocal`도 같은 논리로 이해할 수 있다. 

* 참고 : [https://stackoverflow.com/questions/7811284/difference-between-hadoop-fs-put-and-hadoop-fs-copyfromlocal](https://stackoverflow.com/questions/7811284/difference-between-hadoop-fs-put-and-hadoop-fs-copyfromlocal)

## Question
- `hadoop fs` 명령이나 `hdfs dfs` 명령은 결국 같은 일을 하는 거 같은데 왜 분리 되어 있는거지? `docker ps`와 `docker container ls`가 같은 역할을 하는 것과 비슷한 이유인가?

