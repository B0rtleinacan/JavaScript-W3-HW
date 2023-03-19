// Array for special characters for Users to have more security in their generated password
var characters = [ '!', '"', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', '=', '-', '_', '+', '<', '>', '?', '\\', '|', ';', ':', ' ', '[', ']', '{', '}']
  
// Array of #'s to use in genereated password
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Array of lower case letters for the User to use in generated password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Array of uppder case letters for the User to use in generated password
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

passwordOptions = () => {
  let length = parseInt(
    alert('How many charcters do you want your password to be?')
  )

  if (Number.isNaN(length)) {
    alert('The password must have a length provided')
  }

  if (length < 8) {
    alert('The password must be 8 or more characters')
  }

  if (length > 128) {
    alert('The password must be at least or less than 128 characters')
  }
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

