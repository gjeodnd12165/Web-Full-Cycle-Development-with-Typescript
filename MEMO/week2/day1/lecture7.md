### merge된 깃허브 -> 깃에 동기화
```
git fetch -p(--prune)
```
원격에서 변경된 사항들을 로컬에 적용하는 명령  
-p 옵션으로 삭제된 브랜치는 삭제하도록 명령

merge commit도 commit이기 때문에, 깃허브에서만 merge commit을 발생시켰으면, 로컬에서는 merge가 되어있지 않다.


<span style="color: gray;font-size: small;">지금까지의 내용을 토대로 보면, 로컬에 원격저장소의 상태를 저장하는 곳이 따로 있는 듯? fetch는 그 상태 저장소를 실제 원격저장소와 동기화시키는 느낌?</span>