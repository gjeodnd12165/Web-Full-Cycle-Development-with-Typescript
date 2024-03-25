### 채널 API 설계 1탄
1. 채널 생성: POST/channels
    - req: URL{id}
    - res 201: ${channelTitle}님 채널을 응원합니다
2. 채널 개별 수정: PUT/channels/:id
    - req: URL{id}
    - res 200: 채널명 수정 완료 - old -> new
3. 채널 개별 삭제: DELETE/channels/:id
    - req: URL{id}
    - res 200: 삭제 완료 -> 메인페이지
4. 채널 개별 조회: GET/channels/:id
    - req: URL{id}
    - res 200: 채널 전체 데이터
5. 채널 전체 조회: GET/cahnnels
    - req: X
    - res 200: 채널 개별 데이터