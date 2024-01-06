// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  //Prompt for Password Length
  var length = parseInt(
    prompt(
      "How many characters(between 8-128) would you like your password to contain?"
    )
  );
  //Validate Password Length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8-128 characters");
    return;
  }
  //Prompt for Special Characters
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  //Prompt for Numeric Characters
  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );
  //Prompt for Lowercase Characters
  var hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );
  //Prompt for Uppercase Characters
  var hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  //Validate user input
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  //Call getPasswordOptions
  var options = getPasswordOptions();

  //Variable to store password as it's being concatenated
  var result = [];
  if (options.hasSpecialCharacters) {
    result = result.concat(specialCharacters);
  }
  if (options.hasNumericCharacters) {
    result = result.concat(numericCharacters);
  }
  if (options.hasLowerCasedCharacters) {
    result = result.concat(lowerCasedCharacters);
  }
  if (options.hasUpperCasedCharacters) {
    result = result.concat(upperCasedCharacters);
  }

  console.log(result);

  //get random characters from result array
  var randomResult = [];
  for (var i = 0; i < options.length; i++) {
    randomResult.push(getRandom(result));
  }
  console.log(randomResult);

  //Join the array and return it
  return randomResult.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add logic for Clear Button

// Function to clear the generated password
function clearPassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
}
// Get references to the #clear element
var clearBtn = document.querySelector("#clear");

// Add event listener to clear button
clearBtn.addEventListener("click", clearPassword);



// Get references to the #copy element
var copyBtn = document.querySelector("#copy");

// Add event listener to copy button
copyBtn.addEventListener("click", copyToClipboard);

// Function to copy the generated password to clipboard
function copyToClipboard() {
  var passwordText = document.querySelector("#password");
  
  // Select the password text
  passwordText.select();
  passwordText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the password text to the clipboard
  document.execCommand("copy");

  // Inform the user that the password is copied
  alert("Password copied to clipboard!");
}


