### 연산자
- 정적인 데이터를 유기적으로 행동하게 하여 새로운 가치를 창출
- e.g. 학생들의 과목 당 성적 데이터를 총점 및 평균으로 데이터화

#### 연산자들의 종류
- 산술: +, -, *, /, %  
사칙 연산이 기본
- 대입: =, +=, -=, *=, /=, %=  
오른쪽에 있는 값을 왼쪽에 대입하는 역할
- 부호: +, -
- 증감: ++a, a++, --a, a--  
증가 연산자와 감소 연산자의 줄임말
- 관계: ==, !=, >, <, >=, <=  
두 개의 피연산자로 관계를 따지는 연산자
- 논리: !, &&, ||  
두 개의 조건식 등을 결합하여 하나의 갈과값을 도출
- 비트: <<, >>, |, &

#### 평가 문제
```c
#include <stdio.h>

int main()
{
    int a;
    int b;
    int c;
    
    scanf("%d %d %d", &a, &b, &c);
    printf("곱: %d\n", a*b*c);
    printf("합: %d, 평균: %d", a+b+c, (a+b+c)/3);
}
```