var characterLength = 8;
var choiceArr = [];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '|', '?', '/', '<', '>'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  } else {
    passwordTest.value = "";
  }

}


function generatePassword() {

  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character legnth has to be between 8-128");
    return false;
  }
  if (confirm("Would you like lower case letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase);
  }
  if (confirm("Would you like upper case letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialChar);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(number);
  }
  return true;


}
