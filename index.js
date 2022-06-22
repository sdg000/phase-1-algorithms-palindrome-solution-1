function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reversor(word)
  return word === reversedWord
}

function reversor(word){
  return word.split('').reverse().join("")
}
/* 
  Add your pseudocode here
  function 1
  create new word by calling reversor function
  implicit return, return true or false if word === reversed word.

  function 2
  define a function to reverse word (take word as param)

*/

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
