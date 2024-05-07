### 첫번쨰 프로젝트
```cmd
npm i -g typescript
```
로 타입스크립트를 전역적으로 설치
```
tsc --init
```
으로 미리 설정 된 tsconfig를 받을 수 있다.

```cmd
tsc -w [.ts 파일]
```
로 해당 파일이 수정될 때마다 자동으로 .js파일로 컴파일되게 할 수 있다.