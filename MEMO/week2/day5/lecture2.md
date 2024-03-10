### Docker, mariaDB
#### Docker
리눅스의 응용 프로그램들을 프로세스 격리 기술들을 사용해 컨테이너로 실행하고 관리하는 오픈소스 프로젝트  
> 일종의 Virtual Machine?  
VM과 비슷하지만 VM보다 가볍다는 듯?  
#### Docker로 mariaDB 설치
1. mariaDB 가져오기
```
docker pull mariadb
```
2. mariaDB 실행
```
docker run --name mariadb -d -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=root mariadb
```
3. mariaDB 접속
```
docker exec -it mariadb /bin/bash
mysql -u root -p
```
> windows에서는 GUI로도 가능
