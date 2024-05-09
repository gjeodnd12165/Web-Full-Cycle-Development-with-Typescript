### jsx 문법 1
함수의 리턴 값으로 html 형식을 사용할 수 있는 문법이다.  
- 이 리턴 값에는 무조건 최상위 컴포넌트가 하나 뿐이어야한다.
- 이를 위해 <></>(Fregment) 태그를 사용할 수 있다.  
- 컴포넌트에 className 속성을 주어 CSS의 클래스 선택자로 연결할 수 있다.
```tsx
import './App.css';
<div className="test">
  Hello World
</div>
```
```css
.test {
  color: white
}
```