## REST API에 대한 더 자세한 설명
### REST API <sup>[참조1](https://www.ibm.com/kr-ko/topics/rest-apis) [참조2](https://aws.amazon.com/ko/what-is/restful-api/)</sup>
REpresentational State Transfer  
컴퓨터 과학자 Roy Fielding 박사가 2000년, 자신의 박사 학위 논문에서 처음으로 정의한 방식으로, 개발자에게 비교적 높은 유연성과 자유를 제공한다.
#### REST 디자인 원칙
REST API의 요구사항은 다음과 같은 6가지의 디자인 원칙 뿐이다.
1. **균일한 인터페이스**  
: 동일한 요청에는 동일한 응답을 보내야한다. REST API는 사용자의 이름이나 이메일 주소 등의 데이터가 오직 하나의 ***URI***에만 속한다는 것을 보장해야 한다.
> URI(Uniform Resource Identifier)란?  
인터넷에서 자원의 **위치**를 나타내는 URL(Uniform Resource Locator)과 다르게, 자원을 식별할 수만 있으면 된다. URL은 URI에 포함되는 개념이다.  
> - URL이 아닌 URI: mailto:info@example.com
> - URL: ftp://ftp.example.org
2. **Statelss**  
: REST API는 Stateless이다. 즉, 각 요청은 그 요청의 처리에 필요한 모든 정보를 포함해야하며, 서버는 클라이언트의 정보를 저장하지 않아야한다.
3. **캐싱 가능성**  
: 가능하면 리소스를 클라이언트 혹은 서버 측에서 캐싱할 수 있어야한다. 또한, 서버의 응답에는 리소스의 캐싱 허용 여부도 포함되어야한다. 
> 일반적으로, 데이터를 조회하는 GET 메소드의 경우 캐시가 가능하고, POST, PUT, DELETE 등의 데이터를 변경하는 메소드는 캐시할 수 없다.
4. **계층 구조 아키텍처**  
: REST API에서는 클라이언트와 서버 사이에 중개자를 두어, 그 구조를 계층화한다. 또한, REST API는 어떤 계층의 어플리케이션과 통신하는지(중개자, 혹은 엔드 포인트) 여부를 클라이언트나 서버가 알 수 없도록 설계되어야한다.
> 각 계층은 아래 계층에게만 요청을 전달하며, 역할에 충실하다(다른 역할을 맡지 않는다).  
> 이를 통해 확장성, 재사용성, 보안성의 향상과 계층별 장애의 전파를 막는다.
5. **코드 온디맨드(옵션)**
: REST API는 일반적으로 정적 리소스를 전송하지만, 특정한 경우에는 응답에 실행 코드를 포함할 수도 있다. 이 경우 코드는 요청 시(on demand)에만 실행되어야한다.