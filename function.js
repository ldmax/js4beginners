let userName = "John";

function showMessage() {
  userName = "Bob";

  let message = "Hello, " + userName;
  alert(message);
}

alert(userName);

showMessage();

alert(userName);
