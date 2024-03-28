### 사용자 테이블 insert하면서 제약조건 알아보기
1. 사용자 데이터 삽입
```sql
INSERT INTO users (name, job, birth)
VALUES ("gongu", "actor", "800123");
```
```sql
INSERT INTO users (name, job, birth)
VALUES ("lee", "teacher", "1990-01-01");
```
DATE 타입은 "YYMMDD" 형태로 넣을 수도 있지만, 더 정확하게 넣기 위해서는 "YYYY-MM-DD" 형태로 넣어햐한다.
```sql
INSERT INTO users (job)
VALUES ("developer");
```
default 값이 없는 컬럼의 값을 지정해주지 않고 데이터를 넣으면 오류
```sql
INSERT INTO users (name, job)
VALUES (null, "developer");
```
not null로 설정되어 있는 컬럼에 null을 넣으면 오류