
// Variables for unique password

  //var key1="abcdefghijklmnopqrstuvwxyz";
  //var key2="!@#$%^&*?><";
  //var key3="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //var key4="12304567890";

  window.addEventListener('load', function() {
    generatePass();
  })
  
    function generatePass() {
    var pass = "";
  
    var include = {};
      if (lowerCase) pass += rando(include.lowerCase = "abcdefghijklmnopqrstuvwxyz");
      if (upperCase) pass += rando(include.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      if (alphaNum)  pass += rando(include.alphaNum  = "12304567890");
      if (specialChar) pass += rando(include.specialChar = "!@#$%^&*?><");
  
      plength = Number("thelength")
  
      for (var i = pass.length; i < length; i++)
      pass += rando(rando(include).value);
  
      document.getElementById("password").value = randoSequence(password).join("");
  }  
  
  function populateform(plength){
  document.generate.output.value=generatepass(pass.length)
  }     





  //first code

  // variable key for password
var key1="abcdefghijklmnopqrstuvwxyz"
var key2="!@#$%^&*?><"
var key3="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var key4="12304567890"
var comb1= key1 + key2 + key3 + key4 //concatination
 pass="",
 passwordCharSet="";

// JS for password generator

<script type="text/javascript">

//if then function for responses on console log
function generatepass(plength) {
pass="";  
passwordKeySet=""

if (confirmPass) {
  passwordCharSet += key1;
}
if (specialChar) {
  passwordCharSet += key2;
}
if (numberChar) {
  passwordCharSet += key4;
}
if (upperChar) {
  passwordCharSet += key3;
}

plength = Number("thelength")

for (i = 0; i < plength; i++)
pass += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));



//if (confirmPass === false) {
  //endif
//}

return passwordCharSet
}


function populateform(plength){
document.generate.output.value=generatepass(plength)
}    



 



</script>