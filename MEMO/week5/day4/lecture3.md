### timestamp, 날짜-시간 타입, default
#### 날짜/시간 타입
1. DATE  
- 날짜만  
- YYYY-MM-DD 
2. DATETIME  
- 날짜 + 시간
- YYYY-MM-DD HH:MM:SS (24시간제)
3. TIME  
- 시간
- HH:MM:SS
4. TIMESTAMP  
- 날짜 + 시간
- YYYY-MM-DD HH:MM:SS (24시간제)
- 시스템 시간대 정보에 맞게 일시를 저장한다.

cf. UTC: 한국 시간 -9시간
#### Not Null vs Default
Not Null
- 직접 null 이라고 작성해서 넣는 것도 안된다!
Default
- 값이 안들어올 때, 기본 값으로 세팅
- 공란으로 insert => Default 설정해둔 기본 값이 insert
- 직접 null 이라고 작성해서 넣으면, null setting