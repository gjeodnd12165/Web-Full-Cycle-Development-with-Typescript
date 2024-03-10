### SQL: CREATE
#### Docker로 mariaDB 실행하기 (정리)
1. Docker desktop 실행 및 mariadb container 실행
2. 운영체제에 맞는 CLI 실행
3. mariadb가 있는 컨테이너 접속: `docker exec -it mariadb /bin/bash`
4. mariadb 실행: `mariadb -u root -p`

> **<span style="background-color: rgba(0,100,200,20%)">mariadb 11.0+ 버전 부터는 `mysql` 명령어가 `mariadb`로 바뀜!</span>**

#### database 만들기
- 방 확인
```sql
SHOW DATABASES;
```
- 방 만들기
```sql
CREATE DATABASE Tennis;
```
- 방 들어가기
```sql
USE Tennis;
```
- 방 안에서 저장소 만들기
```sql
CREATE TABLE member
(
  id VARCHAR(30),
  name VARCHAR(30),
  pwd VARCHAR(30)
);
```