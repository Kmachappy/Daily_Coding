/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
function duplicateEncode(word){
    word = word.toLowerCase()
     return word.split('').map(letter=>{
       console.log(word.indexOf(letter), word.lastIndexOf(letter))
     return word.indexOf(letter) == word.lastIndexOf(letter) ? '(' : ')'
     }).join('')
  }
  
  // word to lowercase 
  //split word to array
  // map to make new string array
  // if word.indexOf(letter) == word.lastIndexOf(letter) that 
  // means  1 = 1 or 6 = 6 because there was not another one 
  // rules say when it appears more than once do ')'
  // if indexs the same return '(' else ')'

  // time to complete: ~15 minutes
  // what could I have done better?

  
  
  
  