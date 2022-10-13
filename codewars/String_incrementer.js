/*
Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/


function incrementString (string) {
    // I need to get the string
    // I am able to get the number from the string but I loose my zeros
  
    // so get the length of the ending number
    // that's how many digits there are in that string with leadding zeros
    // 01000.length = 5
    // parseInt(01000) = 1000
    // addition = 1000 + 1 = 1001.length = 4
    // add 0 to addition in a loop until it is the same size the original 
    console.log(string)
    // ending number of string
    let number = string.match(/[0-9]+$/);
    if(!number){
      return string+1
    }
    // length of the ending number
    let length = number[0].length
    // string without the ending number
    string = string.replace(/\d+$/, '');
    
    // adding the value of number + 1;
    // should of lost leading zeros
    let addition = parseInt(number) + 1
    addition = addition.toString()
  //   console.log(addition.length, length)
  
    //original 3
    //new 1
    if(addition.length !== length){
      for(let i=addition.length; i<length; i++){
        addition = "0" + addition      
      }
    }
    console.log('end',string+addition)
    return string+addition

    
  }
  
  //elapsed time: ~ 40 minutes
    // time complexity: O(n)
    // space complexity: O(n)
    // this one took me a while to figure out how to parse the string and add the number
    // I was also trying to figure out how to add back the leading zeros
