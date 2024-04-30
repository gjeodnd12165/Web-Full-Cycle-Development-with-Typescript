### 함수
나누어서 처리하기 위한 목적
- 코드의 가독성 향상
- 코드의 유지 보수 및 확장 용이  

함수형 기반 언어의 동작 구조
- 대부분의 프로그래밍 언어는 함수의 집합체이다.
- 함수들이 서로 연동하여 유기적으로 동작한다.  

#### 함수의 종류
- 표준 함수 - 언어에서 기본적으로 제공하주는 함수를 표준함수라고 한다.
- 함수를 라이브러리화해서 편하게 사용할 수 있게 한다.

- 사용자 정의 함수 - 사용자가 자신이 원하는 기능을 직접 만들 수 있다.
- 표준 함수의 기능에는 한계가 있다.
- 정형화된 완구와 가변적인 레고같은 완구의 차이?

#### 함수의 기본 형태
- 데이터타입 - 함수가 리턴하는 값의 타입
- 함수 이름 - 함수 기능과 밀접한 이름으로 만드는 것이 좋다.
- 인수 목록 - 함수에 필요한 값을 전달할 때 사용
- 함수의 내용 - 중괄호 사이의 영역 안에서 작성
```c
자료형 함수이름 (인수목록) {
  // 함수 내용
}
```

#### void 타입
- 결과값을 리턴하지 않는 함수의 타입

#### 평가 문제
```c
#include <stdio.h>

int squareArea(int, int);
int min(int, int);
int max(int, int);

int main()
{
    int a;
    int b;
    scanf("%d %d", &a, &b);
    printf("넓이: %d\n", squareArea(a, b));
    printf("최소값: %d\n", min(a, b));
    printf("최대값: %d\n", max(a, b));
}

int squareArea(int height, int width) {
    return height * width;
}

int min(int a, int b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

int max(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

char* vendor(int price) {
  if (price == 100) {
    return "블랙커피";
  } else if (price == 200) {
    return "밀크커피";
  } else {
    return "오류";
  }
}
```