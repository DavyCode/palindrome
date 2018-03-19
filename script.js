var checkButton =  document.querySelector("#check");
var allPall =  document.querySelector("#all_pal");

var palOne = document.querySelector("#pal1");
var palTwo = document.querySelector("#pal2");
var palThree = document.querySelector("#pal3");
var palFour = document.querySelector("#pal4");
var palFive = document.querySelector("#pal5");

//hold list of palindromes
var arrayPalindrome = [];


//collect input from user
checkButton.addEventListener("click", function() {
    palindrome(document.querySelector("#user_input").value)
});



// checks for palindrome
function palindrome (str) {
    var string = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
    var len = string.length;

    if (len <= 2) {
      alert("input a word greater than two");
      return;
    }

    if (string == string.split('').reverse().join('')) {
        arrayPalindrome.push(string)
        document.getElementById('label').innerHTML = arrayPalindrome[arrayPalindrome.length - 1];
        return string + ' is palindrome.';
    }
    else {
       alert (string + ' is not palindrome.');
    }
}

//display latest five inputs
allPall.addEventListener('click', function (){
    palOne.innerHTML = arrayPalindrome[arrayPalindrome.length -1]
    palTwo.innerHTML = arrayPalindrome[arrayPalindrome.length -2]
    palThree.innerHTML = arrayPalindrome[arrayPalindrome.length -3]
    palFour.innerHTML = arrayPalindrome[arrayPalindrome.length -4]
    palFive.innerHTML = arrayPalindrome[arrayPalindrome.length -5]
});




