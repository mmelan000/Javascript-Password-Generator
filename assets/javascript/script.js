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
      // returns error to prompts and doc
    } else if (size < 8) {
        alert("Please choose a number greater then 7.");
        a = "Please choose a number greater then 7.";
        return a;
        // returns error to prompts and doc
      } else if  (size > 128) {
          alert("Please choose a number less then 129.");
          a = "Please choose a number less then 129.";
          return a;
          // returns error to prompts and doc
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
              // compiles selected characters into single array

          var noSelection = [sC, lC, uC, nC]
            
          function allAreFalse(arr) {
            return arr.every(element => element === false);
          }  
          // checks if no character options were selected
            
          if (allAreFalse(noSelection)) {
            a = "Please select at least one type of character."
            return a;
            // returns error to prompts and doc
            } else {
              for (var i = 0; i < size; i++) {
                a = a + b[Math.floor(Math.random() * b.length)];
            }
            // generates random password based on criteria
            return a;
            // returns generated password to doc
          }
        }    
}
  
  function writePassword() {
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
// generates password and sends to document
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// adds click to l28 on index.html and runs writePassword script
