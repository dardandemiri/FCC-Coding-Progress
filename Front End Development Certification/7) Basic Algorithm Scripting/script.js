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


//Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  // repeat after me
  var resultStr = "";
  for(var i = 0; i < num; i++){
    resultStr += str;
  }
  return resultStr;
}

repeatStringNumTimes("*", 3);



//Truncate a string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num<=3){
    return str.slice(0,num) + "...";
  }else if(str.length > num){
    return str.slice(0,num-3) + "...";
  }

  return str.slice(0,num);


}
              //A-tisket...".
truncateString("A-", 1);



//Chunky Monkey ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var finalArr = [];

  for(var i = 0; i < arr.length; i += size){
    finalArr.push(arr.slice(i, i+size));
  }
  return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);



//Slasher Flick
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3, 4, 5, 6, 7], 3);




// Mutations 
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for (var i=0; i < test.length; i++) {
    if ( target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }

mutation(["hello", "hey"]);
