### 특정 태그 지정 및 아이디 입력 값 팝업
#### 특정 태그(element)를 찾는 방법
- id로 찾기: `document.getElementById('아이디')`
- class 이름으로 찾기: `document.getElementByClassName('클래스 이름')`
- tag 이름으로 찾기: `document.getElementByTagName('태그 이름')`

```js
function alertId() {
  const id = document.getElementById("txt_id").value;
  alert(id);
}
```