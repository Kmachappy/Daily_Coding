/*

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!



 */



function removeEveryOther(arr){
    // we have an array and we don't want every other second element
    // we can use filter to make a new array with the elements i want
    // since its every second element 2,4,6,8 
    // lets check the index im on is an even number
    // on every true remove that element
    
    return arr.filter((e,i)=> i%2 == 0 )
  }

// elapsed time: ~ 10 minutes
// time complexity: O(n)
