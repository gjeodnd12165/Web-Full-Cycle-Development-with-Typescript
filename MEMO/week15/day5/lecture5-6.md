### react-query
> 최근 TanStack Query라는 이름으로 바뀌었다.  

- QueryClientProvider를 프로바이더로 제공해줘야한다.  
- QueryClientProvider의 props로 QueryClient를 제공해야한다. QueryClient의 매개변수를 옵션을 줄 수 있다.  
- useQuery 훅을 사용하여 key 및 key의 변경에 따라 실행되는 콜백을 설정할 수 있다.  
- 콜백의 반환값이 useQuery의 data에 저장되어 사용할 수 있고, useQuery는 isLoading 등 부가적인 값들도 제공한다.  
- useBooks 훅을 useQuery의 값을 처리해서 주는 pipe처럼 사용하고 있다.  