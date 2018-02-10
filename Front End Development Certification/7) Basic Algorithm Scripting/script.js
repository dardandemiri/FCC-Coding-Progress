//Reverse a String
function reverseString(str) {
  var newString = str.split("");
  newString.reverse();
  return newString.join("");
}

reverseString("hello");




// Factorialize a Number
function factorialize(num) {
  var counter = num;
  if(num != 0){
    for(var i = 1; i < counter; i++){
      num *= i;
    }
    return num;
  }else return 1;

  
}

factorialize(5);


//Check for Palindromes

function palindrome(str) {
  str = str.toLowerCase();
  var reg = /[^a-z^\d]/g;
  str = str.replace(reg,"");

  if (str == str.split("").reverse().join("")) {
    return true;
  } else return false;

}

palindrome("eye");
