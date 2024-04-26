### 사용자로부터 데이터 입력
#### scanf
- 사용자로부터 데이터 입력 받을 시 사용하는 함수
- scanf 사용법 학습이 아니라, 데이터 입력 시의 구조를 생각해보자
```c
scanf("%서식 문자열", &변수);
```
#### 사용자로부터 숫자 입력 받기
```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);
    printf("%d", a*5);
}
```
#### 사용자로부터 알파벳 입력 받기
```c
#include <stdio.h>

int main() {
    char a;
    scanf("%c", &a);
    printf("%d", a);
}
```