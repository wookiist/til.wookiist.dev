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

## Question
- `hadoop fs` 명령이나 `hdfs dfs` 명령은 결국 같은 일을 하는 거 같은데 왜 분리 되어 있는거지? `docker ps`와 `docker container ls`가 같은 역할을 하는 것과 비슷한 이유인가?