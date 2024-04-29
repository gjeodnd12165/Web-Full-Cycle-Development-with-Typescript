### 분기문 (if-else)
양자 택일
```c
if (수행 조건) {
// 수행 조건 만족
}
else {
// 수행 조건 불만족
}
```

#### 평가 문제
```c
#include <stdio.h>

int main()
{
    int a;
    
    scanf("%d", &a);
    if (a % 2 == 0) {
        printf("짝");
    } else {
        printf("홀");
    }
    
    int n1;
    int n2;
    int n3;
    
    scanf("%d %d %d", &n1, &n2, &n3);
    if (n1 > n2) {
        if (n2 > n3) {
            printf("%d", n3);
        } else {
            printf("%d", n2);
        }
    } else {
        if (n1 > n3) {
            printf("%d", n3);
        } else {
            printf("%d", n1);
        }
    }
}
```