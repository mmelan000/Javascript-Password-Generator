// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialcharacter = ["~", "`", "!", " ", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
console.log(specialcharacter)
// array for special character

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCase)
// array for alphabet: lower case

var upperCase = lowerCase.map(element => {
  return element.toUpperCase();
});
// array for alphabet: upper case
console.log(upperCase)

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(number)

var size = 17;
var sC = true;
var lC = true;
var uC = true;
var nC = true;

function generatePassword() {
  
  var a = "";
  var b = [];
  
  console.log (b);

  if (sC) {
  b = b.concat(specialcharacter);
  };
  console.log(b);

 if (lC) {
  b = b.concat(lowerCase);
  };
  console.log(b);

  if (uC) {
    b = b.concat(upperCase);
  };
  console.log(b);
  
  if (nC) {
    b = b.concat(number);
  };
  console.log(b);

  for (var i = 0; i < size; i++) {
        console.log (i);
        a = a + b[Math.floor(Math.random() * b.length)];
        console.log(a);
  }

}

  generatePassword();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

