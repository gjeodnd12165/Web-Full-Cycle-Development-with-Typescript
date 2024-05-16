### SideForm 생성하기
- input.onChange: input의 내용이 변할 때 호출되는 함수. 주로 `e.target.value`와 함께 쓰여 input의 내용을 바꿀 수 있게 할 떄 사용한다.  
- input.onBlur: input 내에 포커스가 됐다가 포커스를 해제할 때 호출되는 함수. 이 예제에서는 자동으로 SideForm이 사라지게 만들었다.
- input.autofocus: input에게 자동으로 focus가 되도록하는 property 속성. boolean이기 때문에 값을 지정하지 않아도 기본적으로 true이다.
```tsx
<input
  autofocus
>
```
### SideForm Style 생성하기
#### SideForm 추가
- 마우스 이벤트의 순서  
클릭 시에, `onMouseDown` -> `onMouseUp` -> `onClick` 순으로 호출된다.  
`onBlur`는 `onClick` 이전에 호출되어서, `onBlur`로  컴포넌트가 사라지게 되는데, `onMouseDown`을 이벤트로 하면 의도한 순서대로 함수를 호출할 수 있다.  

##### reducer 추가하기
redux toolkit을 사용하여 reducer를 추가하기 위해서는 다음과 같이 하면 된다.  
```ts
const boardSlice = createSlice({
  name: 'boards',
  initialState: initialState,
  reducers: {
    addBoard: (state, {payload}: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    }
  }
});
export const { addBoard } = boardSlice.actions;
```
전에는 일일이 액션의 이름을 정하고, 슬라이스의 작동을 switch문으로 적어주었는데, toolkit에 이러한 기능이 있다니 놀라울 따름이다.  
