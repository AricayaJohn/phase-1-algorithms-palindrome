function isPalindrome(word) {
  // Write your algorithm here
  const words = word.split("");
  const reverseWordsSplitArr = words.reverse();
  const reversedWord = reverseWordsSplitArr.join("");
  if (word === reversedWord) {
    return true;
  }
  return false;
} 

/* 
  Add your pseudocode here
*/ 
// step 1 : split the words into an array 
// step 2 : reverse the words 
// step 3: make sure to combine array
// step 4: create if statement to check if words = new words 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
