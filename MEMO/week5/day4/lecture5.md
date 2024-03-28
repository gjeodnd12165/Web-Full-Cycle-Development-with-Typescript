### JOIN
```sql
SELECT * FROM posts
LEFT JOIN users
ON posts.user_id = users.id;
``` 
post의 user_id와 users의 id를 기준으로 두 테이블을 합쳐서 보여준다
#### AUTO_INCREMENT의 LOCK MODES
ISNERT가 실패 시에도 AUTO_INCREMENT가 작동하여, 이후 INSERT의 경우 순서가 맞지 않는다.
이 경우, innodb_autoinc_lock_mode 라는 것을 설정하여 고칠 수 있다.?