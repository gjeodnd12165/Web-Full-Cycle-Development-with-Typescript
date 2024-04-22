const str = '{ "num1":1 }';

try {
  const json = JSON.parse(str);
  if (!json.name) {
    throw new SyntaxError(`name 필드가 없습니다.`);
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}