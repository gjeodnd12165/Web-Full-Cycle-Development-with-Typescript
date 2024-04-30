### 반복문 (break & continue)
- 반복문 내부에서 특정 조건이 되면 break를 만나게할 수 있는데, break문은 반복문을 빠져나가게 한다.  

#### 평가 문제
```c
#include <stdio.h>

int main()
{
    int n = 0;
    int i = 0;
    while (++n <= 9) {
        if (n % 2 == 1) continue;
        while (++i <= 9) {
            printf("%d * %d = %d\n", n, i, n*i);
        }
        i = 0;
    }

    return 0;
}
```