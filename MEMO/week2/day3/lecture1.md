### Inline CSS 찾기 (검색)
#### CSS
Cascading Style Sheets  
문서를 통쨰로 한번에 꾸며주는 것이 아니라, HTML 태그를 하나씩 꾸며줌
HTML에 CSS를 적용하는 방법:  
- 인라인 (inline): HTML 태그 안에 같이 작성
- 내부 스타일 시트 (internal style sheet): HTML 문서 안에 같이 작성
- 외부 스타일 시트 (external style sheet): HTML 문서밖에 작성 후 연결

#### Inline CSS
태그의 style 속성에 string 형식으로 작성
```html
<h1 style="color: red; text-align: center"></h1>
```

> 색에 관련된 속성을 만들 때, 나타나는 네모에 호버하여 색을 임의로 설정 가능