### npm을 통한 오픈 소스 배포
- npm 가입
    - npm에 소스를 배포하기 위해서는 먼저  npm에 가입해야한다.  
- package.json이 라이브러리 배포 시의 명세로써 기능한다.  
- `npm init`으로 절차에 따라 `package.json`을 작성 가능하다.  
    - `keywords`: 태그처럼 기능한다.  
    - `homepage`: 홈페이지 설정
    - `repository`: 레포지토리 설정
- `.npmignore`로 npm에 배포 시 무시할 파일들을 설정할 수 있다.  
- `npm publish <package_name>`로 배포  
    - 배포를 여러 번 하면 npm 페이지에서 배포 이력을 확인할 수 있음
- `setting`에서 여러가지 설정 가능
    - maintainer 초대
    - 퍼블리시 접근 보안
- `npm unpublish <package_name>@<version>`으로 패키지 언퍼블리시 가능  
    - 퍼블리시 72시간 내에 언퍼블리시 가능
    - 언퍼블리시 후 24시간 동안 퍼블리시 불가능
    - 조건
        - 콜라보레이터 없음
        - 최근 1주간 다운로드 300회 이하
        - 다른 패키지에 대한 종속성 없음
- `npm version patch`로 자동적으로 버전 업 가능
    - `npm version minor` 및 `npm version major`로 변경할 버전의 종류를 선택할 수 있다
- `npm deprecate`로 버전을 사용하지 않는다고 명시할 수 있다.
#### Versioning
```
0.0.0  
major.minot.patch
```
1. Major: 하위 호환이 되지 않는 변경 사항  
2. Minor: 하위 호환이 되는 변경 사항  
3. Patch: 간단한 버그 수정  
