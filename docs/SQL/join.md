---
id: 'full-outer-join'
title: 'MySQL Full Outer Join'
---

MySQL에선 Full Outer Join이 따로 존재하지 않는다. 따라서 Left Outer Join과 Right Outer Join을 각각 수행한 후에 Union을 해주어야 한다.

```sql
SELECT A.name, B._id
FROM A
LEFT OUTER JOIN B ON A._id = B._id
WHERE A._id IS NOT NULL
UNION
SELECT A.name, B._id
FROM A
RIGHT OUTER JOIN B ON A._id = B._id
WHERE B._id IS NOT NULL;
```