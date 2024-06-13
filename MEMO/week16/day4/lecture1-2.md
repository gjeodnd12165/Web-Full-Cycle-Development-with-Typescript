### 모바일 대응 / 반응형 웹
1. viewport
2. 상대값을 가진 레이아웃
3. 화면 너비 감지 (mediaquery)

#### viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
content의 너비 및 scale을 측정하여 사용한다. 

#### 상대값을 가진 레이아웃
```css
width: 100%;
max-width: 1020px;
```
width값은 100%로 주고, max-width값을 고정값으로 준다.  

#### mediaquery
css에서 너비를 감지하는 도구

> chrome 개발자도구에서 좌상단 노트북/스마트폰 모양 버튼을 클릭하면 각 기기에 대응하는 뷰포트로 테스트해볼 수 있다.  

#### useMediaQuery
css 외부에서는 mediaquery를 사용할 수 없기 때문에 이를 변수로 사용할 수 있게 하는 훅을 만들어준다.  
