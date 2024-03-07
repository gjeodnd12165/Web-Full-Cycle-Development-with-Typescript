/* var vs let vs const */
function compareVariable() {
  let num1 = 10;
  const num2 = 30;

  num1 = 20;
  alert(`num1: ${num1}\nnum2: ${num2}`);
}

/* ID 안에 입력된 값을 팝업창에 띄우기 */
function alertId() {
  let userId = document.getElementById("txt_id").value;
  if(!userId) {
    userId = "아이디를 입력해주세요";
  }
  alert(userId);
}

/* 나만의 함수를 만들고, 버튼을 클릭하면 호출하기*/
const myFunction = (message) => {
  alert(message);
  alert(message);
  alert(message);
}