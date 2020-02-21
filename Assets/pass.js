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