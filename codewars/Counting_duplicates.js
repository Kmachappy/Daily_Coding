/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


function duplicateCount(text){
    // check if text is empty if it is return 0
    if(text == '') return 0
    // make the text lowercase and split into an array
    text = text.toLowerCase().split('')
    // declare a dictionary of data with an object to keep track of the letter
    let list = {}
    // a count of the key with values of greater than 1
    let count = 0
    // for each letter add to dictionary if dictionary value is undefined add value 0+1 else list[x]value+1
    text.forEach(x => { list[x] = (list[x] || 0) + 1; });
    // for each key in the dictionary if the value is greater than 1 then add to count
    for(key in list){
      if(list[key]>1) count++
    }
    return count
}
  
// elapsed time: ~ 20 minutes