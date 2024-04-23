### response 포맷 확인하기 (camelCase, snake_case)
현재 SQL의 컬럼명은 snake_case로, 서버에서의 응답의 키 이름은 camelCase로 보내고 싶다.  

하지만 sql의 데이터를 바로 보낼 경우에는 SQL의 컬럼명으로 보내지기 때문에 snake_case로 보내지게 된다.  
이것을 고치기 위해 미들웨어를 사용하는 것도 좋을 것 같다.  

