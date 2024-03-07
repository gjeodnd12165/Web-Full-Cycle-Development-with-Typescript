### 메인페이지
./practice/main.html 및 style.css 참조

#### 자식 요소를 중앙 정렬하는 방법
부모가 자식을 컨트롤하는 방식
```css
.parent {
  display: flex;
  justify-content: center;
}
```
자식이 margin으로 정렬되는 방식
```css
.child {
  margin: auto;
}
```