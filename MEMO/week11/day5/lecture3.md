### 구조 분해 할당 이해
```tsx
const [foo, setFoo]: string = useState("Bar");
```
setFoo는 foo의 값을 set하는 함수로, foo의 값을 캡슐화할 수 있도록 한다.

useState는 길이가 2인 튜플을 반환하고, 따라서 불러올 떄 위와 같이 값을 분해하여 받아올 수 있다.  
이와 같은 것을 구조 분해 할당이라고 한다.  
오브젝트도 같은 방법으로 할당 할 수 있다.  
