// Assignment Code
var generateBtn = document.querySelector("#generate");
// linked to id on l28 of index.html

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
// array for numbers

// var size = 0;
// var sC = true;
// var lC = true;
// var uC = true;
// var nC = true;



function generatePassword() {

  var size = document.getElementById('size').value;
  var sC = document.getElementById('sC').checked;
  var lC = document.getElementById('lC').checked;
  var uC = document.getElementById('uC').checked;
  var nC = document.getElementById('nC').checked;
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
  return a;

}
// password genertor logic
  // generatePassword();



// Write password to the #password input
function writePassword() {

  var sC = document.getElementById('sC').checked;
  var lC = document.getElementById('lC').checked;
  var uC = document.getElementById('uC').checked;
  var nC = document.getElementById('nC').checked;
  
  var nochecks = [sC, lC, uC, nC]
  console.log(nochecks)

  function allAreFalse(arr) {
    return arr.every(element => element === false);
  }
  console.log(allAreFalse(nochecks));


  if (document.getElementById('size').value < 8) {
    var password = "Please choose a length greater then 7.";
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    return;
    // checks to see if size is below 8, if true, returns error to user
  } else if (document.getElementById('size').value > 128) {
    var password = "Please choose a length less then 129."
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    return;
    // checks to see if size is above 129, if true, returns error to user
  } else if (allAreFalse(nochecks)) {
      var password = "Please select at least one type of character.";
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
      return;
      // checks to see if no checkboxes have been ticked, if true, returns error to user
  } else {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");
    console.log(passwordText);
    passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// adds click to l28 on index.html and runs writePassword script

