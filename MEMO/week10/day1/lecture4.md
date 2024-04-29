### 분기문 (if ~ else if) 문
```c
if (수행 조건 1) {
  // 수행 조건 1 만족
} else if (수행 조건 2) {
  // 수행 조건 1 불만족, 수행 조건 2 만족
} else {
  // 수행 조건 1, 2 불만족
}
```

#### 평가 문제
```c
#include <stdio.h>

int main()
{
    int a;
    
    scanf("%d", &a);
    if (a < 60) {
        printf("불합격");
    } else if (a > 90) {
        printf("장학 대상");
    } else {
        printf("합격");
    }
    printf("\n");
    
    int b;
    scanf("%d", &b);
    if (b > 19) {
        printf("성인");
    } else if (b > 13) {
        printf("청소년");
    } else {
        printf("어린이");
    }
    printf("\n");
    
    char c;
    printf("포맷합니까?(y/n)\n");
    fflush(stdin);
    scanf(" %c", &c);
    if (c == 'y') {
        printf("예, 포맷합니다");
    } else if (c == 'n') {
        printf("아니오, 포맷합니다");
    } else {
        printf("아무튼 포맷합니다");
    }
    printf("\n");
    
    int d;
    scanf("%d", &d);
    if (d > 90) {
        printf("A");
    } else if (d > 80) {
        printf("B");
    } else if (d > 70) {
        printf("C");
    } else if (d > 60) {
        printf("D");
    } else {
        printf("F");
    }
    printf("\n");
}
```