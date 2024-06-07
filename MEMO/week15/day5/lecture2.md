### 중복 제거
#### router
router에서 Layout 및 Error가 반복되기 떄문에, router에 매개변수로 들어가는 배열을 밖으로 빼내고, 이 배열에 대해 순회하여 중복되는 부분을 추가하도록 한다.  

#### Axios request handler
api 요청을 하는 부분에서 request method를 정하는 것도 파라미터로 넘겨주어서 더욱 중복을 제거할 수 있다.  

```ts
type TRequestMethod = 'get' | 'post' | 'put' | 'delete'

export const requestHandler = async <T = never>(
  method: TRequestMethod,
  url: string,
  payload?: T,
) => {
  let response: AxiosResponse<T>;
  
  const diverge: { [P in TRequestMethod]: typeof response; } = {
    'post': await httpClient.post(url, payload),
    'get': await httpClient.get(url),
    'put': await httpClient.put(url, payload),
    'delete': await httpClient.delete(url),
  }

  return diverge[method].data;
}
```

강의에서는 switch문을 사용했지만, Map을 사용해서 가복성을 높였다.  

