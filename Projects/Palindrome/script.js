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
    
  } else if (numCharacters % 2 === 1){
    
    
  }
}