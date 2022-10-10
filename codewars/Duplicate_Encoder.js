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
    // create an object
    // tolowercase word
    // iterate through the word
    // add key and times seen
    // map through the word and then check the value of the letter
    // if more than 1 return
    word = word.toLowerCase()
    const data = {}
    word.split('').forEach(letter=>{
      data[letter] = (data[letter] | 0) + 1
    })
    return(word.split('').map(letter=>{
      return (data[letter]>1) ? ')' : '('
    }).join(''))
    
}

// time to complete: ~30 minutes
// I was using and object to store the data, but that was not needed
// I could have just used an array and then used the indexOf and lastIndexOf to check if the letter was a duplicate 