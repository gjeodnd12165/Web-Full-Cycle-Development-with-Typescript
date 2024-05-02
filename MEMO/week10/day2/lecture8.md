### 함수와 포인터
#### 기본적인 함수의 인자 전달 형태
- 기본적인 함수의 인자 전달 형태는 복사이다.
- a에서 b로 복사 시에 a에도 값이 존재하고 b에도 값이 존재한다.
- 함수 호출 시의 인수는 실인수라고 부르며, 함수 내부에서의 인수는 평식 인수라고 부른다.

#### 배열형 인자의 전달
- 1-5개 정도까지는 전달인자로 사용할 수 있다. 하지만 그 이상 사용하면 난잡해보인다.
- 배열을 전달인자로 사용하여 여러개의 값을 넘길 수 있다.
- 어떻게 배열을 전달하고 받을 것인가? 바로 포인터이다.