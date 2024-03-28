### alter updated_at, user-id, FK 실습
#### 컬럼 추가
```sql
ALTER TABLE posts
ADD COLUMN updated_at TIMESTAMP 
DEFAULT NOW() 
ON UPDATE NOW()
```
`ON UPDATE`로 데이터 변경 시 자동으로 값을 변경할 수 있다.
#### WHERE로 테이블 수정
```sql
UPDATE posts
SET detail = "updated!"
WHERE id = "1";
```
#### 테이블에 FK 컬럼 추가
```sql
ALTER TABLE posts
ADD FOREIGN KEY(user_id)
REFERENCES users(id);
```