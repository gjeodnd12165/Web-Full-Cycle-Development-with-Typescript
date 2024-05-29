### CLI
- dev: local server로 실행
- build: 빌드를 해줌. ts -> js compile, bundling
- lint: eslint 관련 오류를 감지
- preview: build된 파일로 local server에서 실행

#### package.json.scripts
package.json의 scripts에 package manager로 간단히 실행할 명령어를 정해줄 수 있다.  
```json
...
"scripts": {
  ...
  "build": "tsc && vite build",
  ...
}
...
```
이미 명령어가 있을 수 있지만, 임의로 추가해줄 수도 있다.

#### tsc
typescript compiler  
```cmd
tsc --noEmit --skiplibCheck
```
- --noEmit: 컴파일된 파일 출력하지 않음
- --skiplibCheck: 외부 라이브러리에 대한 타입 체크 제외