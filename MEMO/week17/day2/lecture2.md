### CI 파이프라인 - 단위테스트
#### 실습의 흐름
- 코드의 구현
- 테스트 케이스 구현
- 안위 테스트의 자동화 및 결과 보고 생성

#### 코드의 구현
- SpringBoot로 java 서버 구현
```java
package com.example.calculator;
import org.springframework.stereotype.Service;


@Service
public class Calculator {
    public int sum(int a, int b) {
        return a + b;
    }
}
```
```java
package com.example.calculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
class CalculatorController {
    @Autowired
    private Calculator calculator;

    @RequestMapping("/sum")
    String sum(
        @RequestParam("a") Integer a,
        @RequestParam("b") Integer b
    ) {
        return String.valueOf(calculator.sum(a, b));
    }
}
```
`GET/sum?a=1&b=2`와 같은 요청이 들어오면 a와 b의 합인 3을 출력하는 앱


#### 단위테스트
- 단위 테스트의 중요성
    - 코드의 개발에 있어서는 **잠재적 결함을 일찍 발견할 수 있을 수록** 효율 (및 안정성) 이 높아짐
    - 쓰여진 모든 코드는 테스트되어야 함 - 테스트 커버리지와 연관 -> 다음 실습에서 커버리지를 다룰 것
- 단위 테스트는 개발자의 몫
    - 직접 코드를 구현하는 개발자만큼 해당 코드의 어떤 측면을 어떻게 테스트해야 하는지를 잘 이해할 수 있는 다른 사람이란 없음
    - 이것은 통합 테스트 및 인수 테스트와는 구별되어야 하는 것으로서, 테스트 케이스를 명확히 정의하고 이것을 테스트 케이스로 구현하는 것은 코드 개발자가 담당

#### 단위 테스트 작성
- JUnit 단위 테스트 라이브러리를 이용한 단위 테스트 케이스 작성 및 설정
```java
package com.example.calculator;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    private Calculator calculator = new Calculator();

    @Test
    public void testSum() {
        assertEquals(5, calculator.sum(2, 3));
    }
}
```
build.gradle에 의존성 추가
```gradle
dependencies {
    ...
    testImplementation 'junit:junit4.13'
    testRuntimeOnly('org.junit.vintage:junit-vintage-engine')
}
```

#### 파이프라인 스테이지 추가
- 빌드 (Complie) 스테이지 뒤에 다음과 같은 스테이지 추가
```Jenkinsfile
stage("Unit Test") {
    steps {
        script {
            container('builder') {
                sh "./gradlew test"
            }
        }
    }
}
```

#### 테스트 리포트 발행
HTML Publisher 플러그인 설치 후
```
...
container('builder') {
    sh "./gradlew test"
    publishHTML(target: [
        reportDir: 'build/reports/tests/test',
        reportFiles: 'index.html',
        reportName: 'JUnit Report'
    ])
}
```
Pipeline script에 위와 같은 구문 추가
성공적으로 테스트가 완료되었다면, `JUnit Report`라는 항목이 추가되어 JUnit 리포트를 바로 볼 수 있음.

