/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


*/

//

//it wan'ts all unique characters only once from both strings
// we learned that set is used to remove duplicates 
// since it returns an object we dump with spread operator into an array and sort it then join into a string

function longest(s1, s2) {
    return [...new Set(s1+s2)].sort().join("")
  }

// elapsed time: ~ 5 minutes
// time complexity: O(n)
