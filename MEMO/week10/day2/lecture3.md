### 변수의 범위
#### 지역 변수
한 스코프 내에서 정의 되어 그 스코프 내에서만 사용 가능한 변수  
이름이 같아도 스코프가 다르다면 다른 변수라서 중복 충돌이 생기지 않는다.  
- 함수 종료 시에 그 함수의 내부 지역 변수는 소멸된다.  
- 지역 변수는 스택 메모리에 존재하기 때문에 함수 호출 순서와 소멸 순서는 반대이다.

#### 전역 변수
가장 바깥쪽에 선언된 변수  
전역 변수는 관리하기 어렵기 떄문에 가급적 지양하는 것이 좋다.  
- 프로그램을 시작하자마자 메모리 상에 올라가서 프로그램이 종료될 때 메모리 상에서 소멸된다.  

#### static 변수
- 지역변수처럼 스코프 내에서 선언되지만, 중괄호를 벗어나도 메모리 상에 고정되어 소멸하지 않는다.  
- typescript에서는 함수 내 static 변수 선언을 지원하지 않고, class의 static 멤버만을 지원한다.  

#### 메모리 생명 주기
- 전역 변수: 프로그램 시작부터 종료까지
- 지역 변수: 함수 시작부터 종료까지
- static 변수: 함수 내의 선언 시부터 프로그램 종료까지

#### 평가 문제  
```c
#include <stdio.h>


int pages = 0;

int main()
{
    while(1) {
        int add;
        printf("읽은 페이지 입력 : ");
        scanf("%d", &add);
        if (add == -1) {
            printf("\n끝");
            break;
        }
        pages += add;
        printf("\n읽은 총 페이지: %d\n", pages);
    }
}
```
```c
#include <stdio.h>


static int inputPages(void);

int main()
{
    while(1) {
        if (inputPages() == -1) break;
    }
}

static int inputPages(void) {
    static int pages = 0;
    int add;
    printf("읽은 페이지 입력 : ");
    scanf("%d", &add);
    if (add == -1) {
        printf("\n끝");
        return -1;
    }
    pages += add;
    printf("\n읽은 총 페이지: %d\n", pages);
}
```