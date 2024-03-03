### pull 하다 안되어서 git remote remove origin
```cmd
git pull origin main
```
이 명령으로 레포지토리에서 변경점을 받아올 수 있다.    
#### fatal: not a git repository 오류가 날 경우
1. 해당 폴더의 하위에 clone을 하지는 않았는지 확인.
2. 그럴 경우, 그 하위 폴더를 찾아 들어가서, `git remote remove origin`을 명령하면, 레포지토리와의 연결을 끊을 수 있다.
3. 연결이 끊겼으면, 폴더를 지우자.
4. 다음 메모로...