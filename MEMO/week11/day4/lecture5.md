### jsx 문법 2
- jsx문법에서는 html과 다르게, `{}`를 사용하여 변수, 코드 등을 사용할 수 있다.
- 삼항 연산자를 사용하여 조건에 따라 보여질 컴포넌트를 설정할 수 있다.
```tsx
return (
  <div>
    {
      name === "리액트" ? (<h1>YES</h1>) : null
    }
  </div>
)
```
- or 연산자 (||)를 사용하여 undefined를 검사할 수 있다.
```tsx
return (
    <div>
      {
        port || "포트를 설정하지 않았습니다"
      }
    </div>
  )
```

