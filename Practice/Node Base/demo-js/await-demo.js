async function foo() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("첫번째 쿼리");
    }, 3000);
  });
  const result1 = await promise1;
  console.log(result1);

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("두번째 쿼리 " + result1);
    }, 3000);
  });
  const result2 = await promise2;
  console.log(result2);

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("세번째 쿼리 " + result2);
    }, 3000);
  });
  const result3 = await promise3;
  console.log(result3);


  return "이미 완료!"
}

foo().then(
  (result) => {
    console.log("promise resolved:", result);
  },
  (error) => {
    console.log("promise rejected:", error);
  }
)

