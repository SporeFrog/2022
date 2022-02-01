const reverseNum = num => {
  let reversed = num.split("").reverse().join("");
   return reversed;
 }
 const checkPalindrome = num => {
   console.log(`Original Number: ${num}`);
   let numString = num.toString();
   console.log(`Number Converted to String: '${numString}'`);
   let numCharacters = numString.length;
   console.log(`Number of Digits: ${numCharacters}`);
   if (numCharacters % 2 === 0) {
     let halfOfCharacters = numCharacters / 2;
     console.log(`Half the Length of a Number with Even Amount of Digits: ${halfOfCharacters}`);
     let firstHalf = numString.slice(0,halfOfCharacters);
     console.log(firstHalf);
     let secondHalf = numString.slice(halfOfCharacters, numCharacters);
     console.log(secondHalf);
    let reversedSecondHalf = reverseNum(secondHalf);
     console.log(reversedSecondHalf);
     if(firstHalf == reversedSecondHalf){
       return `${num} is a palindrome`;
      
     }else{
       `${num} is not a palindrome`;
     };
   } else if (numCharacters % 2 === 1){
     let halfOfCharacters = (numCharacters -1) / 2;
     console.log(`Half the Length Minus One of a Number with Odd Amount of Digits: ${halfOfCharacters}`);
     let firstHalf = numString.slice(0,halfOfCharacters);
     console.log(firstHalf);
     let secondHalf = numString.slice(halfOfCharacters + 1, numCharacters);
     console.log(secondHalf);
    let reversedSecondHalf = secondHalf.split("").reverse().join("");
     console.log(reversedSecondHalf);
     if(firstHalf == reversedSecondHalf){
       return `${num} is a palindrome`
     }else{
       return `${num} is not a palindrome`
     }
   }
 }
let chosenNumber = document.querySelector(".userGivenNumber").textContent;

 document.querySelector("button").addEventListener(click, function(chosenNumber){
alert("It works");
 })
 