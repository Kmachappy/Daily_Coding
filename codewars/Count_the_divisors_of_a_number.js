/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/


function getDivisorsCnt(n){
    // super simple
    // check if n is evenly divisible which mean there should be no remainder
    // we will use modulo
    // how can we make this better without having to loop through every number?  
  
    let list = [] 
    for(let i = 1; i<=n; i++){
      if(n%i==0){
        list.push(i)
      }
    }
    return list.length
  }

// elapsed time: ~ 5 minutes
// time complexity: O(n)
