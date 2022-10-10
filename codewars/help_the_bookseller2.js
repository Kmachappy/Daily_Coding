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


// create an object with the categories as keys
// iterate through the stock list
// check the first letter of the stock
// add the category to the object with the value of the stock
// if the category is already in the object then add the value to the existing value
// return the object

function stockList(listOfArt, listOfCat){
    let data = {};
    if(!listOfArt.length) return '';
    
    listOfArt.forEach(stock=>{
    // don't need any special methods to get the first letter
      const category = stock[0]
      // use the category as the key and the value as the parsed number
      // if the category has a value already then add the new value to the existing value
      data[category] = (data[category] | 0) + +stock.split(' ')[1]
    })
    console.log(data)
    
    // so we make an array the same length as the categories
    // then we map over the array and return the category and the value
    // if the key value is undefined then return the category and 0
    // since .map returns an array we can join it with the - and return it
    return listOfCat.map(cat=>{
      return `(${cat} : ${data[cat] | 0})`
    }).join(' - ')
    
  }
  
  