### pull request & merge
> 깃허브의 레포지토리의 Settings-Branches에서 Branch protection rules를 설정 가능

깃허브의 다른 브랜치에 들어가면, `This branch is * commits ahead of main` 과 같은 메시지로, 이 브랜치가 main(default) 브랜치와 얼마나 다른지 알려준다.
#### pull request
두 브랜치를 병합해달라는 요청

깃허브의 pull request는 .md와 같은 마크다운을 적용할 수 있으며, 들어가면 좋은 내용은
- 주요 구현 내용
- 이슈 등  

pull request에서도 이 요청이 몇 개의 commit을 적용하는지 알려준다.

> 만약 해당 요청에 충돌이 없다면, 깃허브에서 자동으로 merge 및 브랜치 삭제도 해준다.  

merge를 하는 것을 merge commit이라고 한다.