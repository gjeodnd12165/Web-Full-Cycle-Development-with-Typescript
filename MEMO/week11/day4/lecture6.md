### jsx 문법 3
- style을 함수 내에서 만들어서 컴포넌트에 적용해줄 수 있다.
```tsx
const style: CSSProperties = {
  backgroundColor: "black",
  color: 'white',
  fontSize: '48px',
  fontWeight: 'lighter',
  padding: '20px'
}
return (
  <div style={style}></div>
)
```
- jsx에서는 `<br>`이나 `<input>`등 여는 태그만 있어도 되었던 형식을 닫아주거나, `</br>`처럼 self-closing 문법을 사용해야한다.  
- 주석문은 중괄호 안에 작성한다.
```tsx
return (
  {/* This is comment */}
)
```
