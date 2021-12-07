---
id: 'spark-lecture-1'
title: 'Spark Lecture 1'
---
## Spark Functions

- Spark Core
- Spark SQL
- Spark Streaming
- MLlib
- GraphX

## RDD

> Spark Context를 초기화 하고, sc를 이용해 어떤 파일을 readFile() 해서 a라는 변수에 담았을 때, a가 RDD이다.
> 

### RDD 특징

1. Data의 추상화
    - 여러 노드에 분산되어 있을 데이터를 하나의 자료로 제어할 수 있도록 추상화 해줌(a라는 변수로 제어가 가능한 것을 생각해보면 이해됨)
2. 분산 연산
    - 도중에 노드가 망가지면 어떻게 되는걸까? → Immutable함 → 이 말은 RDD1이 T 되더라도, RDD2가 될 뿐, RDD1이 변하지는 않는다는 것을 의미한다. RDD 변환 과정은 Log를 남기게 되고, 이는 Acyclic Graph로 표현된다. 따라서 문제가 발생하면, 발생하기 직전의 RDD로부터 시작해서 다시 계산하면 된다.
3. Type Safe
    - Integer, Double, String 등의 자료형이 있어서, 개발자 친화적으로 Type 안전성을 보장해준다.
4. Unstructured Data와 Structued Data 모두 담을 수 있음
5. Lazy Evaluation
    - Spark Operation은 `Transformation`과 `Action`으로 구성됨
        - Transformation은 Lazy Execution, 결괏값으로 새로운 RDD 반환
            - ex) reduceByKey, map, sortByKey 등.. → 실제로 원본 데이터는 그대로고, 새로운 RDD를 리턴함
        - Action은 Eager Execution (즉시 실행), 결괏값을 연산하여 출력하거나 저장 → RDD에 들어있는 값을 출력함
    - Lazy Evaluation은 아무리 Transformation이 많아도, Action을 만나기 전까지는 Transformation 작업을 수행하지 않음을 의미함.
    - 이는 유연성을 부여 함

## Parallel, Distributed

### Data-Parallel

- RDD.map(<task>)
- 데이터를 쪼개서 여러 thread에서 동시에 계산하는 것을 의미.

### Distributed-Parallel-Data

- 쪼개서 여러 노드로 분산시킨다.
- 각 노드에서 조각들을 각자 독립적으로 수행한다.
- 경우에 따라선 모든 결과를 하나로 합친다.

## Latency

노드간 통신 → 통신 속도가 중요할 수밖에 없음

1. 부분실패 ← RDD의 불변성을 이용하면 됨
2. 속도 ← Network 문제가 많음

예를 들어

`RDD.map(A).filter(B).reduceByKey(C).take(100)`

`RDD.map(A).reduceByKey(C).filter(B).take(100)`

이렇게 두 가지가 있으면, 위 기능이 성능이 더 좋음. reduceByKey는 여러 노드에서 Data를 불러와 하나로 합치는 함수인데, 이걸 수행하기 전에 filter를 수행해서, 데이터를 조금이라도 줄이고 네트워크 통신을 시작했기 때문.