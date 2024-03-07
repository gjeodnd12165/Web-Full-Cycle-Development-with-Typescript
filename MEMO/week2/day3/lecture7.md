### 조건문
만약 아이디 칸이 비어 있다면?
#### if문
조건에 따라 다른 결과를 선택할 수 있게함
```js
let id = document.getElementById("txt_id").value;
if(!id) {
  id = "아이디를 입력해주세요";
}
alert(id);
```