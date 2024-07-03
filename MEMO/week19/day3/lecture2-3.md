### 데이터베이스 설계
- user와 note로 되어있는 간단한 구조
- 여기서는 따로 ORM을 사용하지 않고 SQL 만으로 DB를 셋업한다.
#### 로컬 테스트용 데이터베이스
- Docker desktop 이 제공하는 로컬 클러스터에 데이터베이스 설치 (배포)
    - k8s manifest 를 이용하여 데이터베이스 인스턴스 실행
    - 앞서 설명한 초기화 파일을 이용하여 테스트 데이터베이스 설정
- 데이터베이스의 구성
    - Deployment (replicaset) + service (NodePort 3306:30036)
    - PV + PVC