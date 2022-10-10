/*
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...

and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)

where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).
Notes:

    In the result codes and their values are in the same order as in M.
    See "Samples Tests" for the return.
*/

function stockList(listOfArt, listOfCat){
    //   console.log(listOfArt)
    //   console.log(listOfCat)
     
      // okay so it wants a count of the stock list for each category
      //[ 'BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600' ]
      //[ 'A', 'B', 'C', 'D' ]
      // A = 0 if not in list
      // BBAR 150 + BKWE 250 + BTSQ 890 = 1290
      // CDXE 515 = 515 
      // DRTY 600 = 600
      
      // how do we want to approach this
      // we have the code where the first letter only matter 
      // then we have the stock number after the spase
      // which we would temporarily store and then add up together
      
      // lets iterate through the array 
      // check the first letter of the string
      // is it in the categories? if no then skip
      // if it is in the cateogry then add a counter to it?
    
      //we can probably use map for this but going with the continued approach
      //obj.key4 = value4;
      
      //let make an object with all the categories
      let data = {}
      listOfCat.forEach((cat)=>{
        data[cat] = 0
      })
      console.log(data)
      
      listOfArt.forEach((s,i,a)=>{
        console.log(s)
    //     console.log(s.charAt(0))
        const category = s.charAt(0)
    //     console.log(listOfCat.includes(category))
        const isIncluded = listOfCat.includes(category)
        if(isIncluded){
          // so we know the letter is included in the category now what
          // we take the letter and the parseout 150 with regex
          //\s(.*)
          let regex = /(?<=\s)(.*)/
          let stock = parseInt(s.match(regex)[0])
          //okay we have the number now add them to their according category
          // how do we use the category to create a new element in an object or array
          // we need to persist the data so let create a new storage
          data[category] += stock
    //       console.log(data[category])    
        } 
        
      })
      const areZero = Object.values(data).every(
      value => value === 0
      );
      if(areZero){
        return ''
      }
     let array = []
      Object.keys(data).forEach(function(key) {
        array.push(`(${key} : ${data[key]})`)
      });
      return array.join(' - ')
      
     
    }

// time to complete: ~ 1:40 hour
// Completed this in way too much time, but I did not know how to use the regex to parse out the number
// I should have used the slice method to get the number and then parseInt it to get the number
// I also should have used the map method to iterate through the array and then use the reduce method to add up the numbers
// I also should have used the filter method to filter out the categories that are not in the list 
// I also should have used the reduce method to add up the numbers
// I also should have used the join method to join the array together
// I also should have used the ternary operator to check if the array is empty