### 브랜치 실습
> 팁: Lagacy한 백업도 가끔씩 해주자!
```cmd
git branch
```
현 작업 공간에 존재하는 브랜치를 보여주는 명령어.  
(*) 표시가 있는 브랜치가 현재 브랜치이다.
```cmd
git branch "<브랜치 이름>"
```
현 작업 공간를 기점으로 새로운 브랜치를 생성한는 명령어.  
새로운 브랜치를 생성하더라도 자동으로 그 브랜치로 이동하지는 않는다.
> 실제로 복사하는 것이 아니라, 포인터와 같음?
```cmd
git checkout "<브랜치 이름>"
```
다른 브랜치로 이동하는 명령어.

#### switch / restore [1]
**최신 버전의 git에서는 checkout보다 switch 및 restore를 권장하고 있다.**  
기존 checkout 명령어는, 브랜치를 변경하는 기능 외에도, 변경된 파일을 브랜치에 저장되어있는 상태로 복원해주는 기능도 가지고 있었다.  
하지만 checkout 하나의 명령어가 가진 기능이 너무 많다는 지적이 있어, <span style="background-color: rgba(0, 255, 255, 20%)">다른 브랜치로의 이동 기능은 <strong>switch</strong></span>로, <span style="background-color: rgba(0, 255, 255, 20%)">복원하는 기능은 <strong>restore</strong></span>로 분리 시켰다.  
기존 checkout 명령어를 사용하는 것은 가능하지만, 중요한 명령어만 모아놓은 `git --help` 에도 checkout이 더 이상 등장하지 않는다고 하니, checkout을 사용하는 것은 자제해야겠다.

[1]: https://blog.outsider.ne.kr/1505