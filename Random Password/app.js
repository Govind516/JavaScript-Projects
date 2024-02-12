const inputBox = document.getElementById("password");
const generateBtn = document.getElementById("generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const specialChar = "!@#$%^&*+-/=";

const allChar = upperCase + lowerCase + number + specialChar;

let length = 15;

function setPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];

  while (length > password.length)
    password += allChar[Math.floor(Math.random() * allChar.length)];

  inputBox.value = password;
}

function copy() {
  inputBox.select();
  document.execCommand("copy");
}
