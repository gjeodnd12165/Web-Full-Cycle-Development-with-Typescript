### 다양한 UI 경험 - 탭
##### children 배열로 바꾸기
```tsx
const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];
```
해당 배열을 순회하여 처리할 수 있다.  
