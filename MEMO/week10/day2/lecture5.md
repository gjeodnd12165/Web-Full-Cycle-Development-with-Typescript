### 배열 2
문자열 변수
- 문자열에 이름을 붙여주면 변수로 사용 가능
```c
char str[12] = "Hello World";
```
문자열의 경우 끝에 null 문자가 추가되기 때문에 배열의 크기를 문자열의 길이+1로 해야한다.

#### null 문자
- 문자수보다 배열의 크기가 클 때, 컴퓨터는 언제까지가 우리가 대입한 문자인지 알 수 없다.  
- 컴퓨터가 문자열의 끝을 인식하도록 하기 위해 null을 표시한다.

