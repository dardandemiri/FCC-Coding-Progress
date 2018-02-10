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




//Find the Longest Word in a String
function findLongestWord(str) {
  var stringToArray = str.split(" ");
  var theLongest = "";
  for(var i = 0; i < stringToArray.length; i++){
    if(stringToArray[i].length > theLongest.length){
      theLongest = stringToArray[i];
    }
  }
  return theLongest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");



//Title Case a Sentence

function titleCase(str) {

  var strToArr = str.toLowerCase().split(" ");

  var result = strToArr.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  return result.join(" ");

}

titleCase("molla kuqe");




//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  // You can do this!
  var theLongest = 0;
  var array = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > theLongest){
        theLongest = arr[i][j];
      }
    }
    array.push(theLongest);
    theLongest = 0;
  }


  return array;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);






///Confirm the Ending

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcon
  var length = target.length;

  if(str.substr(str.length - length) == target){
     return true;
  }else return false;

}

confirmEnding("Bastian", "n");
