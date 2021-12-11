// Array for the password
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
var symbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

function generatePassword() {
  var availableChars = [];
  var finalResult = [];

  //prompt user and ask the legnth of hey passwrord min 8 max 128
  var legnth = parseInt(prompt("How many characters would you like to use? Password must be more than 8 characters and less than 128."));

  if (legnth < 8 || legnth > 128) {
    return alert('Password must be more than 8 characters and less than 128!')
  }

  if (Number.isNaN(legnth)) {
    return alert('Please input a number')
  }

  //confirm lowercase, uppercase, numbers, symbols
  var upperC = confirm("Would you like to use uppercase letters?");

  


  var lowerC = confirm("Would you like to use lowercase letters?");

  var num = confirm("Would like to use numbers?");

  var sym = confirm("Would you like to use symbols?");

  if (upperC === false && lowerC=== false && num === false && sym === false) {
    return alerts('Please choose at least one option.')
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt 