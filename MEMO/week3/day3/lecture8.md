### URL + method 2
=> ***API 설계***
1. 상품 전체 "조회" GET
(주소) /products
2. 상품 id별 "조회" GET
/products/{id}
3. 상품 id별 "수정" PUT, PATCH
/products/{id}

> 복수형으로 표현하면 좋은 이유 
> - 상품"들" 중에 id 값에 따른 개별 데이터
> - 통일감