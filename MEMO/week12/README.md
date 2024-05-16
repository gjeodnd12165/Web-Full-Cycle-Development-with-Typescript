## React.FC에 대해
> [참조1](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/)  
[참조2](https://www.totaltypescript.com/you-can-stop-hating-react-fc)  
[참조3](https://velog.io/@namezin/Why-I-dont-use-React.FC)  

React.FunctionComponent, 줄여서 React.FC는 리액트에서 함수형 컴포넌트를 위해 제공하는 인터페이스입니다.
다음과 같은 구조로 되어 있습니다.  
```tsx
interface FunctionComponent<P = {}> {
  (props: P, deprecatedLegacyContext?: any)
    : ReactNode;
  propTypes?: WeakValidationMap<P> | undefined; // deprecated
  contextTypes?: ValidationMap<any> | undefined; // deprecated
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}
```
### React.FC를 사용하는 이유
cra에서 React.FC가 빠지는 등, React.FC의 대접이 박해지고 있는데, 그렇다면 애초에 React.FC는 왜 만들어진 것일까요?  
인터넷의 다른 글 및 index.d.ts를 본 결과, 다음과 같다고 생각합니다:
1. props에 대한 타입 안전성
2. props의 구조가 명확하다는 점
3. defaultProps를 통해 props의 기본값 설정
4. displayName을 디버깅에 활용할 수 있음

### React.FC를 사용하지 말아야하는 이유
그렇다면 이번에는 React.FC를 사용하지 말고, 일반적인 함수를 대신 사용해야하는 이유를 위의 이유에 대비하여 설명하겠습니다.  

1. props에 대한 타입 안전성 및 구조 명확성, props의 기본값 설정  

이 장점은 일반적인 함수를 사용해도 똑같이 구현할 수 있습니다.  
```tsx
interface Props { message: string }
const App = ({ message = "default" }: Props) => {
  return <div>{message}</div>
}
```
위와 같이 비구조화 및 비구조화에서의 기본값 설정을 사용하면 됩니다.

2. React 17 이전의 경우, props로 children을 암묵적으로 가지고 있다는 점  

React 17 이전 버전의 경우, interface의 props의 타입이 `PropsWithChildren<P>`로 설정되어 있어 children을 무조건 가지고 있게 되어 있었습니다.  
optional하기 때문에 쓰지 않으면 그만이지만, 쓰지 않는 props를 계속 가지고 있다는 것도 문제일 것입니다.  

3. React 17 이전의 경우, defaultProps의 사용에 있어서 문제가 있었다는 점  

4. 코드가 줄어든다는 점  
React.FC를 사용하면, FC의 제네릭에 한 번, props에 한 번 총 두 번 props의 이름을 적게 됩니다.  

### React.FC를 사용해도 괜찮기는 한 이유
위와 같은 문제가 있음에도 불구하고, React 18 버전을 사용하고 있다면, 이미 기존에 있던 React.FC를 전부 바꿔야하는 것은 아닙니다. 

React 18 업데이트 이후, React.FC의 구조가 바뀌었습니다.
가장 위의 현재 React.FC의 구조를 보면 아시겠지만, 더 이상 props를 `PropsWithChildren`으로 변환하지 않습니다.  

또한, 전에는 함수가 `React.ReactElement`를 반환하도록 정해져 있어서, `string`이나 `number`와 같은 타입이 반환될 경우 에러가 발생했는데, 이제는 더 넓게 허용하는 `React.ReactNode`를 반환하도록하여 이러한 에러를 막은 것 같습니다.  

### 결론
아무리 React 18에서 React.FC를 사용해도 괜찮다고는 해도, React.FC를 사용하지 않는 것이 이점이 더 많은 것 같습니다.  
때문에 앞으로의 프로젝트에서 React.FC를 사용하지 않는 한 편, 기존에 있던 코드도 할 수 있다면 바꿔나가는 것이 좋을 것 같습니다. 