---
id: 'order-by'
title: 'order by'
---

## 옵션
- ASC : 오름차순(default로 생략 가능)
- DESC : 내림차순(역순)

## 여러 기준으로 정렬
여러 기준으로 정렬하고 싶다면, 왼쪽부터 순차적으로 기준을 적는다.

예시)

**EMP TABLE**
- workdate: 날짜
- name: 이름
- age: 나이

```sql
-- 날짜 역순 정렬
SELECT workdate, name, age FROM EMP ORDER BY workdate DESC;

-- 날짜 역순, 나이 순방향 정렬
SELECT workdate, name, age FROM EMP ORDER BY workdate DESC, age;
```



## 참고
- [https://mingggu.tistory.com/83](https://mingggu.tistory.com/83)