### 3-way 전략
일반적으로 가장 많이 사용하는 전략

A branch에서 B branch를 생성한 시점부터, 
- A branch도 추가 구현을 하고
- B branch도 추가 구현을 해서

B branch와 A branch를 합치면  
-> A branch와 B branch가 서로 비교하여 바뀐 것을 정리하여 합치는 전략  

#### 3-way 전략 + fast-forward
- main으로 할 branch를 그대로 두고, 각 feature마다 branch를 생성
- 병합 시 각 feature의 변경 내용을 main에 적용
- 첫 번째 병합은 fast-forward, 그 이후는 3-way와 같이 된다.