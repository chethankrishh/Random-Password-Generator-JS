let passwordDisplay = document.getElementById("passwordDisplay");
let generateBtn = document.getElementById("generateBtn");
let copyBtn = document.getElementById("copyBtn");
let clearBtn = document.getElementById("clearBtn");

let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

let allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

let passwordLength = 12;

function generatePassword() {
  let password = "";

  let upperCase =
    uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  let lowerCase =
    lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  let number = numberChars[Math.floor(Math.random() * numberChars.length)];
  let specialChar =
    specialChars[Math.floor(Math.random() * specialChars.length)];
  password += upperCase + lowerCase + number + specialChar;

  for (let i = 4; i < passwordLength; i++) {
    let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    password = password + randomChar;
  }

  passwordDisplay.value = password;
}

function copyToClipboard() {
  if (passwordDisplay.value) {
    passwordDisplay.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  } else {
    alert("No password to copy! Please generate a password first.");
  }
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", copyToClipboard);

clearBtn.addEventListener("click", () => {
  passwordDisplay.value = "";
});
