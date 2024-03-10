## 강의에서 소개해주지 않은 git에 관한 것들 
명령어에 대한 .html로 된 문서를 보여주는 명령어
```
git help [<command>]
```
### Basic Snapshotting
커밋들 사이의 변경점을 보여주는 명령어
```
git diff [<commit1>] [<commit2>]
```
현재의 HEAD를 해당 commit으로 되돌리는 명령어
```
git reset [<commit>]
```
> HEAD란, 가장 최신 상태의 브랜치를 가리키는 포인터이다.  

해당 path의 파일의 수정 내역을 HEAD로 되돌리는 명령어  
--source 옵션으로 되돌릴 commit 지정 가능
--staged 옵션으로 그 파일의 staging 취소
```
git restore [--source=<tree>] [--staged] [<path>]
```
해당 path의 파일을 삭제 및 변경 사항 add  <sup>[출처](https://godtaehee.tistory.com/28)</sup>  
--cached 옵션으로 로컬의 파일은 삭제되지 않도록 함
```
git rm [--cached] [<path>]
```
해당 path의 파일을 이동 혹은 이름변경 및 변경 사항 add
```
git mv [<source>] [<destination>]
```
### Branching and Merging
브랜치 변경
```
git switch <branch>
```
#### git stash <sup>[출처](https://mylko72.gitbooks.io/git/content/_stash.html)</sup>
현재 브랜치의 변경 사항을 커밋하지 않고 다른 브랜치로 이동할 경우 오류 메시지가 발생한다.  
이 경우 커밋하지 않고 다른 브랜치로 이동하고 싶을 때, 스테이시를 쓸 수 있다.  

현재 진행중이던 내용을 `git stash`로 저장하고, 다른 브랜치에서 작업 후 다시 불러와서 작업을 계속할 수 있다.

현재의 상태를 스테이시로 저장
```
git stash
```
스테이시의 목록 조회
```
git stash list
```
해당 스테이시와 그 전 commit 상태를 diff 형식으로 표시
```
git stash [<stash>]
```
해당 스테이시 불러오기  
이 경우 목록에서 해당 스테이시가 제거
```
git stash pop [<stash>]
```
목록에서 제거하지 않고 스테이시 불러오기
```
git stash apply [<stash>]
```
해당 스테이시로 새로운 브랜치 생성
```
git stash branch <branchname> [<stash>]
```
모든 스테이시 삭제
```
git stash clear
```
해당 스테이시 삭제
```
git stash drop [<stash>]
```

#### git worktree <sup>[출처](https://ryanking13.github.io/2021/05/10/git-worktree.html)</sup> <sup>[출처](https://blog.outsider.ne.kr/1588)</sup>
한 브랜치에서 작업을 하다가 버그 픽스 등으로 다른 브랜치에서 작업을 하게 될 때, `stash`도 유용하지만, 횟수가 많아지거나, 너무 복잡해지면 관리하기 어려워진다.  
이럴 경우에는 따로 다른 목적의 브랜치(여기서는 작업트리)를 만들어 관리하는 것이 좋다.  

이 작업 트리는 기준이 되는 브랜치와 연결되어있어, 변경 사항이 바로 적용되어 커밋 및 추가 브랜치를 양쪽 모두에게서 볼 수 있다.

현재 작업 트리를 기준으로 해당 path에 새로운 작업 트리를 생성
```
git worktree add <path>
```
모든 작업 트리의 목록을 표시
```
git worktree list
```
해당 작업 트리를 이동
```
git worktree move <worktree> <new-path>
```
해당 작업 트리 삭제
```
git worktree remove
```

git config에 대해서도 알아보자?