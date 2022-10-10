/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(names) {
    // When then array is 0 length return 'no one likes this'
    // When the array is 1 items just retrun the only element and 'likes this'
    
    // when the array is less that 4 items 
    // splice the last element 
    // join the modified array
    // add the spliced element to the joined string and 'like this'
    
    // else 
    // splice the first two elements and join them 
    // get the length of the modified array 
    // join the joined string names and length with 'others like this'
  
    if(names.length == 0) {
      return 'no one likes this'
    }
    if(names.length == 1) {
      return `${names[0]} likes this`
    }
    if(names.length < 4){
      const last = names.splice(-1)
      const joinedNames = names.join(', ')
      return `${joinedNames} and ${last} like this`
    }
    
    const joinedNames = names.splice(0,2).join(', ')
    const count = names.length
    return `${joinedNames} and ${count} others like this`
  }

  // elapsed time to complete: 30 minutes 
  // took me a while to figure out how to splice the last element
  // time complexity: O(n)
  // space complexity: O(n)
