// Input Variables 
var enter;
var numberConfirm;
var characterConfirm;
var upperCaseConfirm;
var lowerCaseConfirm;

// Array of Characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Array of Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array of Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Function that converts all letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase(); };

var choices;
space = [];

function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        numberConfirm = confirm("Will this contain numbers?");
        characterConfirm = confirm("Will this contain special characters?");
        upperCaseConfirm = confirm("Will this contain Uppercase letters?");
        lowerCaseConfirm= confirm("Will this contain Lowercase letters?"); }
