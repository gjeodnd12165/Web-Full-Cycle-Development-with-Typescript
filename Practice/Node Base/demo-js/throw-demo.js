const error = new Error("대장 에러");
const syntaxError = new SyntaxError("구문 에러");
const referencedError = new ReferenceError("대입 에러");


console.log(error.name);
console.log(error.message);

console.log(syntaxError.name);
console.log(syntaxError.message);

console.log(referencedError.name);
console.log(referencedError.message);