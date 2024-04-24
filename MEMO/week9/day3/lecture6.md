### 가짜 사용자 1명 만들어주는 API 만들어보기
```js
function randomUser() {
  return {
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    fullName: faker.person.fullName(),
    contact: faker.phone.number()
  }
}
```
문서에서 나오는 대로 만드는 것이 좋을 것 같다.  
