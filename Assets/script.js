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
    
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
   
    // First "if statement" for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
       
       
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        
        numberConfirm = confirm("Do you want numbers?");
        characterConfirm = confirm("Do you want special characters?");
        upperCaseConfirm = confirm("Do you want Uppercase letters?");
        lowerCaseConfirm= confirm("Do you want Lowercase letters?"); };

    //  "if Statement" for 4 negative options
    
    if (!characterConfirm && !numberConfirm && !upperCaseConfirm && !lowerCaseConfirm) {
            choices = alert("You must choose a criteria!"); }



    else if (characterConfirm && numberConfirm && upperCaseConfirm && lowerCaseConfirm) {
            choices = character.concat(number, alpha, alpha2); }



    else if (characterConfirm && numberConfirm && upperCaseConfirm) {
                        choices = character.concat(number, alpha2);
    }
     else if (characterConfirm && numberConfirm && lowerCaseConfirm) {
                            choices = character.concat(number, alpha);
    }
    else if (characterConfirm && lowerCaseConfirm && upperCaseConfirm) {
                            choices = character.concat(alpha, alpha2);
    }
     else if (numberConfirm && lowerCaseConfirm && upperCaseConfirm) {
                            choices = number.concat(alpha, alpha2);
    }


    else if (characterConfirm && numberConfirm) {
        choices = character.concat(number);

    } else if (characterConfirm && lowerCaseConfirm) {
        choices = character.concat(alpha);

    } else if (characterConfirm && upperCaseConfirm) {
        choices = character.concat(alpha2);
    }
    else if (characterConfirm && numberConfirm) {
        choices = alpha.concat(number);

    } else if (lowerCaseConfirm && upperCaseConfirm) {
        choices = alpha.concat(alpha2);

    } else if (numberConfirm && upperCaseConfirm) {
        choices = number.concat(alpha2);
    }
    
    

    else if (characterConfirm) {
        choices = character;
    }
    else if (characterConfirm) {
        choices = number;
    }
    else if (lowerCaseConfirm) {
        choices = alpha;
    }
    
    
    else if (upperCaseConfirm) {
        choices = space.concat(alpha2);
    };
// password variable is an array placeholder for user generated amount of length
    var passwordLength = []

   // for loop for random selection of password variables 

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);

// function to put generated password into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
})