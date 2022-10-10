/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/



function persistence(num) {
    const splitNum = num => num.toString().split('')
    num = splitNum(num)
    let counter = 0
    while(num.length>1){
        counter += 1
       num = splitNum(num.reduce((acc,cV)=>{
        return acc * cV
       },1))
      console.log(num)
    }
  
    return counter
  }
  
  // okay we have num
  // we want to split num and multiply all the individual numbers in the number 
  
  // 999 => [9,9,9] = e =>  
  
// time to complete: 26 minutes
// time complexity: O(n)
// space complexity: O(n)