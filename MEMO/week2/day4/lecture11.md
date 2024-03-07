### URL에 따라 다른 response 보내기
- server.js가 응답을 처리하도록 하지 말고, requestHandler.js가 처리하도록 한다.  
- 요청된 주소가 router에 없을 경우, 404 not found 응답을 보내도록 한다. (router에서 처리)