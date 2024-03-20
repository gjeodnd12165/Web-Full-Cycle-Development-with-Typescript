### youtuber-demo.js 업그레이드
youtuber-demo.js 참조  

post를 활용해서 유튜버를 추가  
`req.body`에서 받아서 비구조화 후 channelTitle만 등록.  

응답으로는, db의 값을 검증하는 겸 db 안에 들어있는 유튜버 정보에서 channelTitle을 가져와서 보낸다.