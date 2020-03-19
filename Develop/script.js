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
  // defined prompts and acceptable inputs for each instance
  var allowedChars = ""
  var generatedPwd = ""

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
  var lowerCasePrompt = "lowercase"

  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var upperCasePrompt = "uppercase"

  var numericChars = "0123456789"
  var numericPrompt = "numeric"
  
  var specialChars = " !\"#$%& '()*+,-./:;<=>?@[\\]^_`{|}~"
  var specialPrompt = "special"

  function promptForChar (allowed,acceptable, prompt) {
    var totalstr = "";
    var strPrompt = `Do you want to include ${prompt}?\nExample: [${acceptable}]\nOK=Yes Cancel=No`;
    var userInput = confirm(strPrompt);
    if (userInput) {
      totalstr=allowed+acceptable;
    }
    else {
      totalstr=allowed;
    }
    console.log(totalstr)
    return totalstr
  }

  // rewrote separate calls into consolidated function
  allowedChars = promptForChar (allowedChars, lowerCaseChars, lowerCasePrompt);

  allowedChars = promptForChar (allowedChars, upperCaseChars, upperCasePrompt);

  allowedChars = promptForChar (allowedChars, numericChars, numericPrompt);

  allowedChars = promptForChar (allowedChars,specialChars,specialPrompt);

  
  // if it's still empty, they chose CANCEL in all four cases, error out
  if (allowedChars.length===0) {
    alert("You must have at least one \namong (lowercase, uppercase, numeric, special)")
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
