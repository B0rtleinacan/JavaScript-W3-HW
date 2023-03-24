// Array for special characters for Users to have more security in their generated password
var characters = [ '!', '"', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', '=', '-', '_', '+', '<', '>', '?', '\\', '|', ';', ':', ' ', '[', ']', '{', '}'];
  
// Array of #'s to use in genereated password
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Array of lower case letters for the User to use in generated password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppder case letters for the User to use in generated password
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many charcters do you want your password to be?'),
    10
  );

  if (Number.isNaN(length)) {
    alert('The password must have a length provided');
    return null;
  }

  if (length < 8) {
    alert('The password must be 8 or more characters');
    return null;
  }

  if (length > 128) {
    alert('The password must be at least or less than 128 characters');
    return null;
  }

  var hasCharacters = confirm('This password has special characters.');

  var hasNumbers = confirm('This password has numbers.');

  var hasLowercase = confirm('This password has lower case.');

  var hasUppercase = confirm('This password has upper case.');

  if (hasCharacters === false && hasNumbers === flase && hasLowercase === False && hasUppercase === false) {
    alert('The password must have at least one of these');
    return null;
  } 

  var passwordOptions = {
    length: length, 
    hasCharacters: hasCharacters,
    hasNumbers: hasNumbers,
    hasLowercase: hasLowercase,
    hasUppsercase: hasUppercase
  };

  return passwordOptions;
}
// Randomizer for passwords
getRandom = (arr) => {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasCharacters) {
    possibleCharacters = possibleCharacters.concat(characters);
    guaranteedCharacters.push(getRandom(characters));
  };

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  };

  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  };

  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  };

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }

  for (var i = 0; 1 < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  };

  return result.join('');
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

