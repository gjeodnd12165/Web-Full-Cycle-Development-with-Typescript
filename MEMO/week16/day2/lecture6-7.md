### 다양한 UI 경험 - 무한 스크롤
#### useInfiniteQuery
react-query에서 제공하는 무한 스크롤에 사용할 수 있는 훅  
```ts
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetching,
} = useInfiniteQuery(
  ['books', location.search],
  ({ pageParam = 1}) => getBooks({ pageParam }),
  {
    getNextPageParam: (lastPage) => {
      const isLastPage = Math.ceil(lastPage.pagination.totalBooks / LIST_NUM) === lastPage.pagination.currentPage;

      return isLastPage ? null: lastPage.pagination.currentPage + 1;
    }
  }
);
```
기본적으로 useQuery와 비슷하지만 `fetchNextPage`와 `hasNextPage`, `isFetching`를 사용할 수 있다.  
useQuery에서 useInfiniteQuery 사용 시 data의 구조가 달라지기 때문에 유의해야한다.  

#### 스크롤 감지
##### IntersectionObserver
viewport와 target이 교차할 함을 지속적으로 감지하여 특정 값을 반환함  

```ts
useEffect(() => {
  const observer = new IntersectionObserver((entiries) => {
    entiries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMore();
        observer.unobserve(entry.target);
      }
    });
  });

  if (moreRef.current) {
    observer.observe(moreRef.current);
  }

  return () => observer.disconnect();
}, [books, moreRef]);

const loadMore = () => {
  if (!hasNextPage) return;
  fetchNextPage();
}
```