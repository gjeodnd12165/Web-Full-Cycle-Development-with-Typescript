### 메인 화면 - 베스트 섹션
베스트셀러 목록을 모킹하여 구현했다.  
#### styled component override
```css
${BookItemStyle} {  
    .summary,
    .price,
    .likes {
      display: none;
    }

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
```
`${[스타일]} {}`로 다른 styled를 가져오고 오버라이드 할 수 있다.  
