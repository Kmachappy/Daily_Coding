/*

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/



// Return the output array, and ignore all non-op characters
function parse( data ){
    //okay so we have a string 'iisosoid'
    //we want to interate through each letter of the string
    // depending on the caracter either increment of decrement or add to the array at its current value
    
    
    //we should start by have an empty array we can push our values to
    // we should make a varibale that stores the current value
    
    let dataArr = [] //initial is []
    let dataVal = 0 //initial is 0
    const arr = data.split('') // split the string into an arr to iterate
    
    arr.forEach(letter=>{
    switch (letter) {
    case 'i':
        dataVal += 1;
        break;
    case 'd':
        dataVal -= 1;
        break
    case 's':
        dataVal = dataVal ** 2
        break;
    case 'o':
        dataArr.push(dataVal)
    default:
      break;
  }
    })  
      return dataArr
  
  }
  

  // time to complete: ~15 minutes
    // time complexity: O(n)
    // space complexity: O(n)
  //learned how to use switch statements and they're really easy to use
  