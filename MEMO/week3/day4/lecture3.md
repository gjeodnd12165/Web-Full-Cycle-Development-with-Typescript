### Node.js 특징
- 싱글 스레드: 주문이 계속 밀려들어와도, 한 명이 어떻게든 처리해야한다
- 논 블로킹 I/O: 한 명이 일을 하는데, 요리를 순차적으로 하지말고, 중간중간 비는 시간이 있으면, 다른 요리를 한다
- 이벤트 기반: 주문이 들어와야만 일을 한다
