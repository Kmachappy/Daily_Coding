/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
    return str.split('').map(letter=>{
      return letter+letter
    }).join('')
  }

// time to complete: ~2 minutes
// time complexity: O(n)
// space complexity: O(n)
