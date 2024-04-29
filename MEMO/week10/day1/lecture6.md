### 반복문 (이중 while 문)
```c
while (조건1) {
  while (조건2) {
    //...
  }
}
```
- 안쪽 while문이 더 많이 실행된다는 것을 유념

#### 평가 문제
```c
#include <stdio.h>

int main()
{
    int a = 0;
    int b = 0;
    int n;
    scanf("%d", &n);
    while (++a <= n) {
        while (++b <= a) {
            printf("*");
        }
        b = 0;
        printf("\n");
    }

    return 0;
}
```