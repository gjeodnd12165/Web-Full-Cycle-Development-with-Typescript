### 배열
- 배열이란 같은 속성을 가진 것들을 나열해 놓은 것
- 배열은 요소가 순서대로 여러 개 모인 것
- 배열의 요소는 같은 속성을 지니고 있어야 한다.

#### 왜 배열을 사용해야 하나
배열을 사용하면 변수가 100개든 1억개든 간단하게 선언할 수 있다.
```c
int a [100];
```

#### 배열의 선언 구조
- 배열 타입
- 배열 이름
- 배열 길이
위 경우 타입은 int, 이름은 a, 길이는 100

#### 배열의 초기화
```c
int a[5] = {1,2,3,4,5}; // 배열 바로 초기화
int b[] = {1,3,5,7,9}; // 배열의 길이 생략
```

#### 배열의 복사
- 배열도 배열끼리 복사가 가능하지만, 변수 복사하듯이 복사하면 에러가 발생한다.
- error C2106: 배열은 상수이기 때문에 대입 연산자를 통해 값을 넘겨 받을 수 없다.
- 배열은 요소끼리 복사해야 한다: javascript나 python에서는 변수처럼 복사가 가능하지만, 내부적으로는 요소끼리 복사가 이루어진다.  


#### 평가 문제
```c
#include <stdio.h>


int main(void) {
    int a[] = {1,2,3,4,5};
    int b[] = {0,0,0,0,0};
    
    for(int i = 0;i < 5;i++) {
        b[i] = a[5-i-1];
        printf("%d\n", b[i]);
    }
}
```