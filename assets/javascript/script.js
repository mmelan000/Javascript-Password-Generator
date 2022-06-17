// Assignment Code
var generateBtn = document.querySelector("#generate");
// linked to id on l28 of index.html

var specialCharacter = ["~", "`", "!", " ", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", '"', "\\"];
// array for special character

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// array for alphabet: lower case

var upperCase = lowerCase.map(element => {
  return element.toUpperCase();
});
// array for alphabet: upper case

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// array for numbers


// password genertor logic
function generatePassword() {
  var a = "";
  var b = [];

  var size = prompt("Please choose a length of 8 to 128.", "8");
    if (size === null){
      a = "Please choose a length of 8 to 128."
      return a;
    } else if (size < 8) {
        alert("Please choose a number greater then 7.");
        return;
      } else if  (size > 128) {
          alert("Please choose a number less then 129.");
          return;
        } else {
          var sC = confirm("Would you like to include special characters?");
            if (sC) {
              b = b.concat(specialCharacter);
              };

          var lC = confirm("Would you like to include lowercase characters?");
            if (lC) {
              b = b.concat(lowerCase);
              };

          var uC = confirm("Would you like to include uppercase characters?");
            if (uC) {
              b = b.concat(upperCase);
              };

          var nC = confirm("Would you like to include numerical characters?");
            if (nC) {
              b = b.concat(number);
              };

          var noSelection = [sC, lC, uC, nC]
            
          function allAreFalse(arr) {
            return arr.every(element => element === false);
          }  
            
          if (allAreFalse(noSelection)) {
            a = "Please select at least one type of character."
            return a;
            } else {
              for (var i = 0; i < size; i++) {
                a = a + b[Math.floor(Math.random() * b.length)];
            }
            return a;
          }
        }    
}
  
  function writePassword() {
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// adds click to l28 on index.html and runs writePassword script
