### 변수2 & 외부 스크립트
- var:
- let: 값을 할당하고, 변경 가능
- const: 한 번 값을 할당하면 변경 불가

#### 외부 스크립트
script 태그 안의 내용을 .js 파일에 분리하고, script의 src속성에 파일의 디렉토리를 넣는다.  
type 속성으로 스크립트의 언어를 명시적으로 설정할 수 있다.
```html
<script type="text/javascript" src="login.js"></script>
```