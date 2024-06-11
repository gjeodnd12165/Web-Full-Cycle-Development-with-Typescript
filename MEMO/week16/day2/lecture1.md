### 다양한 UI 경험
1. 드롭다운
2. 탭
3. 모달
4. 토스트
5. 무한 스크롤

#### 드롭다운
##### 외부 클릭 시 닫히기
```tsx
const [open, setOpen] = useState<boolean>(isOpen);
const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleOutsideClick(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  }

  document.addEventListener('mousedown', handleOutsideClick);
  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, []);
```
위와 같은 패턴으로 구현한다.  
