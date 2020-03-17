// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwLength = prompt("Enter password length (nunmber, 8 to 128)")

  // validating pwLength
  pwLength=parseInt(pwLength)
  
  if (pwLength<8) {
    alert(pwLength+" is not >= 8")
    return ""
  }

  if (pwLength > 128) {
    alert(pwLength + " is not <= 128 ")
    return ""
  }

  // generate the allowable characters array based on choices
  var allowedChars = ""
  var generatedPwd = ""

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"

  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var numericChars = "0123456789"
  
  var specialChars = " !\"#$%& '()*+,-./:;<=>?@[\\]^_`{|}~"

  var pwLowerCase = confirm("Do you want lowercase characters (a-z)?")

  if (pwLowerCase) {
    allowedChars += lowerCaseChars;
  }

  var pwUpperCase = confirm("Do you want uppercase characters (A-Z)?")

  if (pwUpperCase) {
    allowedChars += upperCaseChars;
  }

  var pwNumeric = confirm("Do you want Numeric characters (0-9)?")

  if (pwNumeric) {
    allowedChars += numericChars;
  }

  var pwSpecial = confirm("Do you want special characters? ( !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~) ")

  if (pwSpecial) {
    allowedChars += specialChars;
  }

  // if it's still empty, they chose CANCEL in all four cases, error out
  if (allowedChars.length===0) {
    alert("You must want at least one among (lowercase, uppercase, numeric, special)")
    return ""
  }

  // now allowedChars contains all acceptable characters

  var i ;
  for (i = 1; i < pwLength; i++) {
      var rnum = Math.floor(Math.random() * allowedChars.length);
      generatedPwd += allowedChars.substring(rnum,rnum+1)
  }
  return generatedPwd

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
