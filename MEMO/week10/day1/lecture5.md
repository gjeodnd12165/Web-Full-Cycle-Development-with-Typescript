### 반복문 (while 문)
```c
while (반복 조건) {
  // 반복 문장
}
```
- 반복 조건을 만족하는 동안 반복 문장을 수행
- 반복 조건을 만족하지 않으면 while문을 빠져 나간다

#### 평가 문제
```c
#include <stdio.h>

int main()
{
    int i = 1;
    while (i <= 12) {
        printf("%d월\n", i);
        i++;
    }

    return 0;
}
```
```c
#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    printf("%d단\n", n);
    int i = 2;
    while (i <= 9) {
        printf("%d * %d = %d\n", n, i, n*i);
        i++;
    }
    
    int sum = 0;
    i = 1;
    while (i <= 10) {
        sum += i;
        i++;
    }
    printf("%d\n", sum);
    
    sum = 0;
    i = 1;
    scanf("%d", &n);
    while (i <= n) {
        sum += i;
        i++;
    }
    printf("%d\n", sum);
    
    int bat = 0;
    while(++bat <= 100) {
        printf("배터리: %d\n", bat);
    }
    printf("충전이 완료되었습니다\n");

    return 0;
}
```