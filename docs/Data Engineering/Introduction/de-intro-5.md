---
id: 'de-intro-5'
title: 'CH5 - 빅데이터의 파이프라인'
---

## 5-1 워크플로 관리

## [기초 지식] 워크플로 관리

### 워크플로 관리 도구
워크플로 관리 도구의 주요 역할을 '정기적으로 태스크를 실행'하고 '비정상적인 상태를 감지하여 그것에 대한 해결을 돕는' 것이다.

|   이름  |     종류    |             개발사             |
|:-------:|:-----------:|:------------------------------:|
| Airflow |    script   |             Airbnb             |
| Azkaban | declarative |            LinkedIn            |
|  Digdag | declarative |          Treasure Data         |
|  Luigi  |    script   |             Spotify            |
|  Oozie  | declarative | The Apache Software Foundation |

### 워크플로 관리 도구와 태스크

![Untitled](https://github.com/wookiist/til.wookiist.dev/blob/documentation/static/img/Data_Engineering/Introduction/workflow-task.png?raw=true)

데이터 파이프라인의 실행 과정에는 데이터를 잇달아 이동하면서 정해진 처리를 반복하는데, 이 개별 처리를 **태스크**라고 부른다. 워크플로 관리 도구의 핵심은 **모든 태스크가 틀림없이 실행되도록 관리하는 것이다.**

### 기본 기능과 빅데이터에서 요구되는 기능

워크플로 관리 도구는 다음과 같은 기능을 제공한다.

- 태스크를 정기적인 스케줄로 실행하고 결과를 통지하기
- 태스크 간의 의존 관계를 정의하고, 정해진 순서대로 빠짐없이 실행하기
- 태스크의 실행 결과를 보관하고, 오류 발생 시에는 재실행할 수 있도록 하기

이외에도, Hadoop에서의 Job 호출을 쉽게 하고, 결과를 데이터 마트에 기록하는 기능 등 데이터 파이프라인의 모든 태스크를 하나로 쉽게 관리할 수 있도록 만든 것이 빅데이터를 위한 워크플로 관리 도구라 볼 수 있다.

### 선언 형과 스크립트 형

워크플로 관리 도구에는 크게 두 가지 종류가 있다. 

- 선언형(declarative) : XML이나 YAML 포맷으로 워크플로를 기술하는 타입
    - 미리 제공되는 기능만을 이용할 수 있다. 그 범위 내의 기능을 수행한다면 최소한의 타이핑으로 태스크를 정의할 수 있다.
    - 또한 누가 작성하더라도 동일한 워크플로가 되기 때문에 유지 보수가 쉽다.
    - 보통 동일 쿼리를 파라미터만 바꿔 수행하는 단순 반복적 워크플로의 경우에도 선언형 도구가 사용된다.
    - 다음은 Oozie를 이용한 XML 워크플로 정의의 예이다.
        
        ```xml
        <workflow-app name='wordcount-wf' xmlns="uri:oozie:workflow:0.1">
        	<start to='wordcount'/>
        	<action name='wordcount'>
        		<map-reduce>
        			<job-tracker>${jobTracker}</job-tracker>
        			<name-node>${nameNode}</name-node>
        			<configuration>
        				...
        			</configuration>
        		</map-reduce>
        	</action>
        </workflow-app>
        ```
        
- 스크립트형(scripting) : 스크립트 언어로 워크플로를 정의하는 타입
    - 일반적인 스크립트와 동일하게 변수나 제어 구문을 사용할 수 있어 태스크 정의를 직접 구현할 수 있다. 따라서 유연함이 그 장점이다.
    - 다음은 Airflow를 이용한 파이썬 워크플로 정의의 예이다.
        
        ```python
        SCRIPT = '''
        aws s3 cp --recursive s3://example/logs/{{ ds }}/ .
        '''
        
        task = BashOperator(task_id='data_transfer', bash_command=SCRIPT)
        ```
        

ETL 프로세스에는 스크립트 도구를, SQL 실행에는 선언형 도구를 사용하는 등 나누어 사용하는 것도 방법이 될 수 있다. 일반적으로 데이터 수집 과정에서는 무언가 스크립트 처리가 필요한 경우가 많아 스크립트 형 도구를 사용하여 유연하게 워크플로를 구조화할 수 있고, 이후 데이터를 모아두면 후에 정형적인 처리만 수행하면 되므로, 선언형 도구를 사용하는 방법은 간단하다.

## 오류로부터의 복구 방법 먼저 생각하기