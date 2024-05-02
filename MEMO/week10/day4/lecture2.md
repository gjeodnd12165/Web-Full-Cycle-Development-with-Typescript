### 구조체
- 하나 이상의 서로 다른 종류의 변수들을 묶어서 새로운 데이터 타입을 정의하는 것
#### 구조체를 사용하는 이유
- 연관된 변수들을 하나로 묶어서 관리함으로써 데이터 관리에 유용하다
- 데이터 양이 많아지면 구조체가 유리하다
#### 구조체 정의하기
```c
struct student {
  char name[10];
  int age;
  int height;
}
```
- struct: 구조체라는 데이터 타입
- student: 구조체의 이름
- name, age, height는 구조체의 멤버
- 구조체 student는 내가 정의한 새로운 데이터 타입이다
#### 구조체 멤버에 접근하기
- 구조체 변수를 통해 구조체 멤버의 값을 참조해야한다  
[구조체 변수명].[구조체 멤버명]  
e.g. st1.name, st1.age, st1.height
- 멤버에 접근 시 .을 사용하는데, 이를 직접 접근이라고 한다

#### 평가 문제
```c
#include <stdio.h>

struct object {
    char name[20];
    int height;`
    int weight;
} o;

int main()
{
    printf("물건의 이름: ");
    scanf("%s", o.name);
    printf("\n물건의 높이(cm): ");
    scanf("%d", &o.height);
    printf("\n물건의 무게(kg): ");
    scanf("%d", &o.weight);
    printf("\n물건의 정보 : %s %dcm %dkg\n", o.name, o.height, o.weight);
}
```