async function foo() {
  return 7;
}

foo().then(
  (result) => {
    console.log("promise resolved:", result);
  },
  (error) => {
    console.log("promise rejected:", error);
  }
)