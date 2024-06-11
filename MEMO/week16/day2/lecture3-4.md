### 다양한 UI 경험 - 토스트
zustand를 사용한 방법  

##### 페이드 인 / 아웃
```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

&.fade-in {
  animation: fade-in 0.5s ease-in-out forwards;
}

&.fade-out {
  animation: fade-out 0.5s ease-in-out forwards;
}
```
위와 같이 애니메이션을 설정하고, className을 isFadingOut에 따른 fade-in / out으로 설정하여 구현한다.

##### onAnimationEnd
```tsx
<ToastStyle 
className={isFadingOut ? 'fade-out' : 'fade-in'}
onAnimationEnd={handleAnimationEnd}>
```
`onAnimationEnd` 값으로 해당 컴포넌트의 애니메이션이 끝났을 때 실행될 함수를 설정할 수 있다.  
여기서는 삭제를 담당하고, 실제 삭제가 들어가야하는 곳에서는 `isFadingOut`을 false로 하여 역할을 나누었다.  
