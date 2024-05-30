### API 통신과 데이터 레이어
#### 데이터 흐름
`View` -> `Hooks` -> `Query Library` -> `Fetcher` -> `API server`  

1. 렌더 영역을 깔끔하게 유지할 수 있다.  
2. hook을 통해 중복 코드를 줄이고, 데이터 가공 등의 로직 사용 가능
3. fetcher로 api마다 달라질 수 있는 설정 변경 가능  

axios 사용  

backend에서 frontend server의 주소에 대한 cors를 허용해주어야한다.  
