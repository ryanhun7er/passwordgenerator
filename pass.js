// identifying variables for button controls
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyme");


//variables variables varibles everywhere


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","@","#","$","%","^","&","*","?",">","<"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var lowerCaseQ;
var upperCaseQ;
var specialCharQ;
var numbersQ;
var answer = 0;




// begin generation of password function

function generatePass() {

 var characterCount = +document.getElementById("length").value;
 var characterArray = [];

 if (typeof characterCount == "number" && characterCount > 0) {
  alert("Let's create a unique password!");
  lowerCaseQ = confirm("Would you like to add lower case characters?");
  upperCaseQ = confirm("Would you like to add upper case characters?");
  numbersQ = confirm("Would you like the password to include numeric characters?");
  specialCharQ = confirm("Would you like to include special values?");

 answers();

 if (answer < 1) {
   alert("You can't get a password without choosing a value! Please select at least one characteristic for your password")
   return ""
 }
 
 else {
   while (characterCount > characterArray.length) {
     generateChar(characterArray);
     console.log(characterArray);
   }

 var passwordRandom = Array.prototype.slice.call(characterArray);
 return '' + passwordRandom.join("") + '';  
 }
 
}
}


// function to count responses to questions

function answers() {
  answer = 0;

  if(lowerCaseQ) {
    answer = answer + 1;
  }

  if (upperCaseQ) {
    answer = answer + 1;
  }

  if (specialCharQ) {
    answer = answer + 1;
  }
  
  if (numbersQ) {
    answer = answer + 1;
  }

}

// function for finding random character for password

function generateChar(i) {
  
  var generateNew = [];

  if (lowerCaseQ) {
    var value1 = Math.floor((Math.random() * 26) + 0);
    var nextValue1 = lowerCase[value1];
    generateNew.push(nextValue1);
  }

  if (upperCaseQ) {
   var value2 = Math.floor((Math.random() * 26) + 0);
   var nextValue2 = upperCase[value2];
   generateNew.push(nextValue2);
 }

 if (specialCharQ) {
   var value3 = Math.floor((Math.random() * 11) + 0);
   var nextValue3 = specialChar[value3];
   generateNew.push(nextValue3);
 }

 if (numbersQ) {
   var value4 = Math.floor((Math.random() * 10) + 0);
   var nextValue4 = numbers[value4];
   generateNew.push(nextValue4);
 }

//pick which character is chosen

var finalValue = Math.floor((Math.random() * answer));
var writeValue = generateNew[finalValue];
i.push(writeValue);

}


//add password to textbox
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  // set the value to be sent to the server as password variable
  passwordText.value = password;
}

// upon "click" of assigned button area- initiate function writePassword
generateBtn.addEventListener("click", writePassword);



//function to copy password

function copy() {
var copyText = document.getElementById("password");
copyText.select();
copyText.setSelectionRange(0, 99999)
document.execCommand("copy");
alert("Copied the text: " + copyText.value);
}

copyBtn.addEventListener("click", copy);





   




















