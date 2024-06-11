### 다양한 UI 경험 - 모달

##### 키 이벤트 추가하기
```tsx
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    handleClose();
  }
}

useEffect(() => {
  if (isOpen) {
    window.addEventListener('keydown', handleKeyDown);
  } else {
    window.removeEventListener('keydown', handleKeyDown);
  }

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  }
}, [isOpen]);
```

##### createPortal
```tsx
return createPortal(
  <ModalStyle 
  className={isFadingOut ? 'fade-out' : 'fade-in'} 
  onClick={handleOverlayClick}
  onAnimationEnd={handleAnimationEnd}>
    <div className="modal-body" ref={modalRef}>
      <div className="modal-contents">{children}</div>
      <button className="modal-close" onClick={handleClose}>
        <FaPlus />
      </button>
    </div>
  </ModalStyle>,
  document.body
)
```
reactDOM에서 제공하는 `createPortal`로 반환될 컴포넌트의 위치를 임의로 지정할 수 있다.  
여기서는 최상위 `<body>`에 위치시켰다.  


##### fade-in / out 시의 문제점과 해결
한 번 fade-out 후에, 이미지를 다시 열면 나타났다가 다시 사라졌다.  
토스트에서는 모두가 다른 객체이기 때문에 상관 없었지만, 이번에는 버튼을 누를 때마다 같은 객체를 불러온다는 것이 이런 문제를 야기한 것 같다.  
따라서 애니메이션이 끝날 때에 isFadingout을 false로 하여 문제를 해결했다.  
```tsx
const handleAnimationEnd = () => {
  if (isFadingOut) {
    onClose();
    setIsFadingOut(false);
  }
}
```