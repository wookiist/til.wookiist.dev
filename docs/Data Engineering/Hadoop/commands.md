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
    - `hadoop fs {args}`
    - `hadoop dfs {args}`
    - `hdfs dfs {args}`
    - 위 세가지 명령어는 동일해 보이지만, 미세한 차이가 있다. 
### `hadoop fs <args>`
`fs`는 local과 HDFS 등 모든 파일 시스템을 가리킬 수 있다. 따라서 local FS, (S)FTP, S3와 같은 다른 파일 시스템을 제어할 때 사용한다.

참고로, `fs` 명령어에 인수로 URI를 전달하여 Local FS를 참조하도록 명령할 수 있다. 예를 들면 이런 식이다. 

`hadoop fs -ls file:///`

만약 아무런 인수도 건내주지 않는다면(=`hadoop fs -ls`) 다음을 의미한다.

`hadoop fs -ls hdfs:///`

### `hadoop dfs <args>`
`dfs`는 HDFS에만 해당한다. 다만 이 명령어는 더 이상 사용하지 않으며 대신 `hdfs dfs` 명령어를 사용해야 한다.

### `hdfs dfs <args>`
앞선 `hadoop dfs <args>` 명령어와 동일하다. HDFS와 관련된 모든 작업을 수행하며, `hadoop dfs` 명령어 대신 권장되고 있다.

