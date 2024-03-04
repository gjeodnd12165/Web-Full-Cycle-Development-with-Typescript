### 브랜치란?
branch: 나뭇가지, 분기  
프로젝트에 요구되는 기능을 따로 구현하기 위해, 일정 시점의 버전을 복사하여 놓은 것.  
가령, 1.2버전에서 구현할 기능이 로그인, 상품 조회가 있다고하면,

```
1.2 ─┬─ 1.2-로그인
     └─ 1,2-상품 조회
```
와 같이, 버전 1.2까지의 내용들을 전부 새로운 브랜치에 복사하고, 각각의 브랜치에서 따로 기능을 구현한다.  

이렇게 기능을 구현한 다음, 여러 브랜치를 다시 합칠 수도 있다.