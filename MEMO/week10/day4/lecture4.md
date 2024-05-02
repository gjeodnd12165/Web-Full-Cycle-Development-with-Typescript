### 동적 메모리 할당
#### 메모리 영역
- 코드 영역 - 실행할 명령어들이 순서대로 쌓인다. CPU가 이 영역에서 명령어들을 하나씩 가져다 처리한다.
- 스택 영역 - 지역 변수 및 매개 변수 등은 모두 스택 메모리 사용
- 힙 영역 - 컴파일 시가 아닌 실행 시 사용자로부터 할당 메모리를 입력 받음
- 데이터 영역 - 전역 변수과 static 변수가 저장되는 메모리 영역
#### 동적으로 메모리를 할당하는 이유
- 일반 변수 선언 - 메모리 할당은 컴파일 타임에 이루어진다
- 전교생이 10명인 학교의 학생 수를 배열로 선언하면?
```c
int student[10];
```
- 학생 수가 점점 늘어나게 된다면 어떻게 해야할까?  
=> 학생 수는 유동적이므로 고정하지 말고 실행 시 결정하자  
    - 변수 선언은 컴파일 시점에, scanf는 런타임 시점에 실행되므로 순서가 맞지 않는다


#### 동적 메모리 할당 및 해제
##### 할당
```c
void* malloc(size_t size);
```
- 전달인자 size는 바이트 단위로 입력
- 메모리 할당이 되면 메모리의 주소값을 리턴
- 메모리 부족 시 NULL 포인터를 리턴
- void*: 타입이 지정되지 않은 포인터
##### 해제
```c
free(memory);
```

- 앞으로 객체 기반에서 new 연산자를 이용한 객체 생성의 메모리 구조는 모두 위 형태에 기반한다
