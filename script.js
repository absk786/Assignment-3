var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", charLength);

var whatoDisplay = '';
var charLengthInput;
var output= '';
// This function will get the length for the password
var charLength = function()     {
// prompt to find out length of password
charLengthInput = window.prompt( "How long would you like your password to be? Choose a number between 8 and 128 characters.");
//if valid number the functions stores the value, otherwise it returns the prompt again
if (charLengthInput >=8 && charLengthInput <=128) {
    return charLengthInput;
    }
else    {
    window.alert("You need to choose a number greater than 8 and less than 128.");
    charLength();
    }

        whatoDisplay = undefined;
}
charLength();

// this statement will select which characters they want
var selectUppercase = window.confirm('Do you want any UPPER case letters in your password?');
var selectLowercase = window.confirm('Do you want any Lower cases letters in your password?');
var selectSpecial = window.confirm('Do you want any special letters in your password?');
var selectNumber = window.confirm('Do you want any numbers in your password?')
 
// this loop runs the generateChars function and is set to run the length of the password
 for (let i=0; i < charLengthInput; i++) {
    generateChars(i)
    }
// this function checks if the user wants that particular character and then appends it to the output var
function generateChars () {

        if (selectUppercase===true) { 
       output +=getrandomUppercase();
        }
        if(selectLowercase===true) {
                output +=getrandomLowercase();

        }
        if(selectSpecial===true) {
                output +=getrandomSpecial();

        }
        if(selectNumber===true) {
                output +=getrandomNumber();
        }

 }

// this splits the output into an array of individual characters
let array = output.split('');

// this loop generates random characters from the arry to store as a final password

for (var a =0; a < charLengthInput; a++) {
  getarraychar(a);
}
function getarraychar () {
    whatoDisplay += array[randomarraynumber()];
}
console.log(whatoDisplay);

// this displays my password
document.getElementById('finalDisplay').innerHTML = whatoDisplay;






                // Below are the functions that generate my random numbers//
// this generates a random number within the array index
function randomarraynumber () {
 return Math.floor(Math.random()* output.length);
}
// this generates random uppercase letters
function getrandomUppercase() {
    return (String.fromCharCode(Math.floor((Math.random()*26) +65)));
}
// this generates random lowercase numbers
function getrandomLowercase() {
   return String.fromCharCode((Math.floor(Math.random()*26) + 97));
}
// this generates random special characters
function getrandomSpecial() {

return String.fromCharCode((Math.floor(Math.random()*15)+32));
}
// this generates random numbers between 0-9
function getrandomNumber() {
return String.fromCharCode(Math.floor((Math.random()*10)+48));
}



