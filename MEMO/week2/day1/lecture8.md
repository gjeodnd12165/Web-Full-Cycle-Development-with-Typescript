### 충돌 해결하기
#### 충돌이 일어나는 경우의 예시
1. `git fetch -p`로 서로 다른 폴더에서 원격 저장소의 변경사항 적용
2. 폴더1에서는 `git branch feature/1`으로 브랜치 생성
3. 폴더2에서는 `git branch feature/2`로 브랜치 생성
4. `git switch ***`로 브랜치 이동 후 같은 파일 변경  
e.g. modified -> feature1, modified -> feature2
5. 각각의 폴더에서 `git push origin feature/1(2)`로 적용
6. 깃허브에서 각각의 브랜치에 대해 main으로 PR
7. 첫 번째 PR에 대한 merge는 아무 문제 없이 되지만, 두번째 merge는 충돌이 발생  
e.g. 첫번째 PR때에는 modified를 feature1으로 바꾸었지만, 두번째 PR때에는 이미 내용이 modified에서 feature1으로 바뀌었기 때문에, 충돌이 발생

이러한 경우, 두 변경사항 중 무엇을 선택할지를 결정해야한다.  
깃허브에서 간단히 결정 가능

충돌을 해결했다면, 각각의 로컬에서 `git pull origin main`으로 변경사항 적용