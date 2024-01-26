const username = document.getElementById("username");
const email = document.getElementById("e-mail");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");

function printMsg(msg) {
  result.innerHTML += `${msg}<br>`
}

function valid_username(name = username.value) {
  let regex = /^\d{10}$/;
  if (regex.test(name) == false) {
    printMsg("Enter valid <b>User-name</b>")
    return false
  }
  return true;
}

function valid_email(mail = email.value) {
  let regex = /^[\w-\.]+@[\w-]+\.[\w-]{2,4}$/;
  if (regex.test(mail) == false) {
    printMsg("Enter valid <b>E-mail</b>")
    return false
  }
  return true;
}

function valid_password(pass = password.value) {
  let regex = /^\w{8,}$/;
  console.log(pass)
  if (regex.test(pass) == false) {
    printMsg("<b>Password</b> should have 8 of more characters");
    return false;
  }
  regex = /^(?=.*[A-Z]+).*$/;
  if (regex.test(pass) == false) {
    printMsg("<b>Password</b> should contain at least 1 capital letter");
    return false;
  }
  regex = /^(?=.*\d+).*$/;
  if (regex.test(pass) == false) {
    printMsg("<b>Password</b> should contain at least 1 digit");
    return false;
  }
  return true;
}

function validate() {
  result.innerHTML = ""
  return (valid_username(username.value) && valid_email(email.value) && valid_password(password.value));
}