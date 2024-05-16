### BoardList 생성하기
- React.FC 의 장단점, 변화 조사할 것.
- clsx: className을 조건에 따라 선택할 수 있도록 만들어주는 것 같다.  
```tsx
className={
  clsx(
    {
      [boardItemActive] :
      boardArray.findIndex(b => b.boardId === activeBoardId) === index
    },
    {
      [boardItem] :
      boardArray.findIndex(b => b.boardId === activeBoardId) !== index
    }
  )
}
```
### BoardList Style 생성하기