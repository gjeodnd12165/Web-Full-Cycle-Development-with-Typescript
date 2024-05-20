### Login 기능 구현하기
Loging을 정상적으로 하기 위해서는 Firebase의 `Authentication` 탭에서 로그인 방법에 제공업체를 추가해야한다.

```ts
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const userCredential = await signInWithPopup(auth, provider);
```
위와 같이 로그인한 유저의 정보를 `userCredential`과 같은 변수로 가져올 수 있다.