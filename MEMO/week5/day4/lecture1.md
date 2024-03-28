### DB 테이블 생성 실습
1. "board" 스키마 생성
```sql
CREATE DATABASE "board";
```
2. 사용자 테이블 생성
```sql
CREATE TABLE users
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  job VARCHAR(100),
  birth DATE,
  PRIMARY KEY (id)
);
```
4. 게시글 테이블 생성
```sql
CREATE TABLE posts
(
  id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  detail VARCHAR(300),
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```