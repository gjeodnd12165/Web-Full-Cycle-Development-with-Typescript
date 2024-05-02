### 공용체
- 공용체도 사용자 정의 자료형
- 구조체와의 차이점은 메모리 공간을 공유한다는 점
```c
union unTemp {
  char a;
  int b;
  double c;
} un;
```
### 열거형
- 데이터들을 열거한 집합
- 컴파일러는 열거형의 멤버들을 정수형 상수로 취급한다
```c
enum Week {
  sun = 0,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat
}
```
- 첫 번째 멤버 sun을 0으로 설정하면 다음 멤버 mon은 1이되고, 점점 1씩 증가한다
