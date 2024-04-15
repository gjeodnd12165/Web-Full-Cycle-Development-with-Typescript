### 신간 안내 구현
```js
let sql = "SELECT * FROM books WHERE TRUE";
let values = [];
if (categoryId) {
  sql += ' AND category_id=?';
  values.push(categoryId)
}
if (recentDays) {
  sql += ' AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL ? DAY) AND NOW()'
  values.push(+recentDays);
}
sql += ' LIMIT ? OFFSET ?;';
values.push(+list_num);
values.push((page-1)*list_num);
```
기본 sql에 추가하는 식으로 패턴을 만들면 모두 다룰 수 있다.