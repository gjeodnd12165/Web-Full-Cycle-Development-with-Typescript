### 주문서 작성
1. 장바구니로부터 넘어온 정보를 화면에 표시하고 보존
2. 주소, 수령인, 전화번호를 입력 및 검증
3. 데이터를  가공하여 서버에 전달  

#### useForm 훅의 사용법
- form의 데이터 저장
- form 외부에서 submit
- form validation

#### 오래된 라이브러리를 사용해야하는 경우 가정
daum postcode service는 react ported 버전이 있지만, 그렇지 않은 경우를 가정하여 작업한다.  

> form 사이의 button은 기본적으로 submit이다. 이 경우에는 button의 타입을 지정해주어야한다.