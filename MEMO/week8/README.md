## 이번 주차에서 공유하고 싶은 것
### WHERE TRUE
```sql
SELECT * FROM foo
WHERE TRUE
AND condition1
AND condition2
AND ...
```
조건절을 js를 이용해 동적으로 추가하고 싶어서, 위와 같이 WHERE TRUE를 사용했다.  

클라이언트로부터 쿼리를 여러개 받는 등 조건절을 동적으로 추가하고 싶지만 조건이 없을 때가 있다면 유용할 것 같다.  
### 비구조화
Javascript에서 비구조화 시 설정할 수 있는 몇가지
```js
const { field_before: field_after } = obj1;
const { doesnt_exist = "field not found"} = obj2;
const { name_inside: name_outside = "name not found" } = obj3;
```
위와 같이, 비구조화 시에
- 변수 이름 바꾸기  
: `obj1`의 경우처럼 오브젝트 필드의 이름을 그대로 변수 이름으로 쓰지 않고, 변수 이름을 다르게 지정할 수 있다.  
- 기본값 할당  
: `obj2`의 경우처럼 오브젝트에 해당하는 필드가 없는 경우 기본값을 정하여 무조건 생성되게 할 수 있다.  
### INSERT INTO ... SELECT ...
```sql
INSERT INTO foo (column1, column2) 
SELECT * FROM bar;
```
INSERT 시에 VALUES 대신에 SELECT 서브쿼리를 사용할 수 있다.  
이 때, 서브 쿼리의 결과 값의 컬럼 수가 INSERT문의 컬럼 수와 같아야한다.  
