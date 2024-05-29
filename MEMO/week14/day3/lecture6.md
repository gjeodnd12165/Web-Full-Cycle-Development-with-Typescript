### 글로벌 스타일과 스타일드컴포넌트
#### global style
1. global = 프로젝트 전체에 적용 = 프로젝트에 일관된 스타일링을 적용
2. "user agent stylesheet"로 표시되는 브라우저의 기본 스타일이 차이를 만든다
3. 브라우저 간의 스타일 차이를 극복하기 위해 사용

구현방법  
1. 에릭마이어의 reset css: 모든 속성을 똑같이 0으로 초기화
2. normalize.css: 브라우저 간에 차이가 있는 속성만 초기화
3. sanitize.css: normalize의 발전된 느낌. 브라우저의 스타일을 살리는 방향.  

> sanitize를 사용

#### css-in-js는 왜 필요할까
##### Wrapper
```css
.wrapper h1 {
  font-size: 50px;
}
```
```html
<div class="wrapper">
  <h1>Wrapper Title</h1>
  <div class="box">
    <h1>Box Title</h1>
  </div>
</div>
```
##### Toggle UI
```css
.toggle {
  display: none;
}
.toggle.active {
  display: block;
}
```
```tsx
() => (
  <div className=`toggle ${isActive ? 'active' : ''}`>
    보여질 내용
  </div>
)
```
##### 순서
```html
<link rel="stylesheet" href="리셋.css" />
<link rel="stylesheet" href="라이브러리1.css" />
<link rel="stylesheet" href="라이브러리2.css" />
<link rel="stylesheet" href="우리프로젝트코드.css" />
```

1. 전역 충돌
2. 의존성 관리 어려움
3. 불필요한 코드, 오버라이딩
4. 압축
5. 상태 공유 어려움
6. 순서와 명시도 
7. **캡슐화**

