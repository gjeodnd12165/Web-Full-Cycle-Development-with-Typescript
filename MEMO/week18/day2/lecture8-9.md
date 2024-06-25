### MDN Web Docs 기여 실습 - 로컬 환경 셋팅
1. `mdn/translated-content` 및 `mdn/content` 포크 후 클론
2. 새로운 브랜치 생성하여 작업
3. `content/.env` 만들기
```env
CONTENT_TRANSLATED_ROOT=<translated-content의 root의 절대 경로>/files
EDITOR=code
```
4. `yarn install`로 의존성 설치
5. `yarn start`로 로컬로 실행

> `http://localhost:5042/ko`로는 접속할 수 없는 것 같다?