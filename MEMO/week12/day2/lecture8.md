### 전역 스타일 생성하기
`@vanilla-extract/css`의 `createGlobalTheme`를 사용하여 스타일 변수를 전역적으로 관리할 수 있다.

```ts
export const appContainer = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: 'max-content',
  width: '100vw'
});
```
`style`을 사용하여 해당 변수를 `className`으로 받는 컴포넌트의 스타일을 typescript 방식으로 정할 수 있다.  

#### vite plugin
```ts
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
})
```
vite에서 이를 사용하기 위해서는 `/vite.config.ts`에서 `vanilla-extract`의 플러그인을 추가해야한다.