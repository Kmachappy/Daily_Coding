/*
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

Note for Swift, R, PowerShell

The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

*/



// lets gather the data of the strings
const Occurances = (map, string, id) =>{
    string.match(/[a-z]/g).forEach((letter)=>{
      const format = map.get(letter) || {}
      format[id] = (format[id] || 0) + 1
      map.set(letter, format)
    })  
    console.log(map)
    return map
  }
  const prefixMax = (map) =>{
    map.forEach(e=>{
      e.max = Math.max(e[1] || 0, e[2] || 0)
      if(e[1] == e[2]){
        e.prefix = '='
      }else{
      e.prefix = (e[1] || 0) > (e[2] || 0) ? 1 : 2;
      }
    }) 
    console.log(map)
    return map
  }
  
  
  function mix(s1, s2) {
    let map = Occurances(new Map(), s1, 1)
    map = Occurances(map, s2, 2)
    map = prefixMax(map)
  
    const sorted = [...map.entries()].sort((a,b)=>{
      if (a[1].max < b[1].max) {
        return 1;
      }
      
      if(a[1].max === b[1].max) {
        if((parseInt(a[1].prefix) || 3)> (parseInt(b[1].prefix)|| 3)){
          return 1;
        }
      
        if(a[1].prefix === b[1].prefix){
          return a[0].localeCompare(b[0])
        }
      }
      return -1;
    }).filter((keyVal) => keyVal[1].max >1)
    
    return sorted.map(e=>`${e[1].prefix}:${e[0].repeat(e[1].max)}`).join('/')
  }
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// second attempt
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const Occurances = (map, string, id) =>{
    // we take in our map, our string, and the stringId
    // iterate through every lowercase letter in the string
    string.match(/[a-z]/g).forEach((letter)=>{  
      // the value for each letter will be an object with key values
      // 'id' : occurances 
      // max : of both occurances
      // prefix : 1 or 2 or =
      
      //if key doesn't exist just give me empty object
      const format = map.get(letter) || {}
      
      // if format[id] exists then you get back the value of the key
      // if not it then creates and entry of the key 
      // and the value which is 0 when created + 1
      format[id] = (format[id] || 0) + 1
      //  this creates an entry in the object value 
      // max: ( format 1 or format 2 which ever occurances are bigger)
      format.max = Math.max(format[1] || 0, format[2] || 0);
      // if the values of occurances of 1 and 2 are the same give
      // prefix '='
      if(format[1] === format[2]){
        format.prefix = '='
      }else{
        // if format 1 > format 2
        // give prefix 1 else prefix 2
        format.prefix = (format[1] || 0) > (format[2] || 0) ? 1 : 2;
      }
      // key = letter
      // value = 
      map.set(letter, format)
      
      
    })
  //     console.log(map)
  //   for([k,v] of map){
  //     console.log(k,'@@@@ß',v)
  //   }
    return map
    
  }
  
  function mix(s1, s2) {
    let map = Occurances(new Map(), s1, 1)
    map = Occurances(map, s2, 2)
    const sorted = [...map.entries()].sort((a,b)=>{
      if (a[1].max < b[1].max) {
        return 1;
      }
      
      if(a[1].max === b[1].max) {
        if((parseInt(a[1].prefix) || 3)> (parseInt(b[1].prefix)|| 3)){
          return 1;
        }
      
        if(a[1].prefix === b[1].prefix){
          return a[0].localeCompare(b[0])
        }
      }
      return -1;
    }).filter((keyVal) => keyVal[1].max >1)
    console.log(sorted)
    
    return sorted.map(e=>`${e[1].prefix}:${e[0].repeat(e[1].max)}`).join('/')
  }


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// first attempt
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

let removeChar=(string)=>{
    string = string.replace(/[A-Z]/,'')
    string = string.replace(/\W/g,'')
    return string 
  }
  
  let sortList = (list) =>{
    const sort = []
    const sorted = {}
    for(key in list){
      sort.push([key, list[key]])
    }
    sort.sort((a,b)=>b[1]-a[1])
    sort.forEach(x=>sorted[x[0]]=x[1])
    return [sorted, sort.length]    
  }
  
  let stringBuild = (letter, occurance, id) =>{
    let string =  `${id}:`
    for(let i=0;i<occurance;i++){
      string += `${letter}`
    }
    return string
  }
  
  
  
  function mix(s1, s2) {
    // visualize how different the string are
    // only care about lowercase letters (a to z)
    // lets make two objects one for the occurances of each letter for s1 and one for s2
    // iterate through each string and count character occurances
    
    //declare all my empty variables
    let list1 = {}, list2 = {}
    // remove all characters i don't care about in s1 and s2
    s1 = removeChar(s1)
    s2 = removeChar(s2)
    console.log(s1,'~~~~',s2)
    
    // add occurences to object list1 and list2 from s1 and s2
    s1.split('').forEach(e=>{ list1[e] = (list1[e] || 0)+1})
    s2.split('').sort().forEach(e=>{ list2[e] = (list2[e] || 0)+1})
    
    //sort the lists and get length
    const [sorted1,len1] = sortList(list1)
    const [sorted2,len2] = sortList(list2)
    console.log(sorted1, len1)
    console.log(sorted2, len2)
    
    // i have both lists sorted
    // now I want to iterate through both lists and then do the stupid string
    let stringArr = []
    const bigger = len1>len2? sorted1 : sorted2
    for(key in bigger){
      console.log(sorted1[key]>sorted2[key])
      if(sorted1[key]>1 && sorted1[key] == sorted2[key]){
        let string = "=:"
        for(let i=0;i<sorted1[key];i++){
          string += `${key}`
        }
        stringArr.push(string)
      }else if(sorted1[key]>1 || sorted2[key]>1) {
        
      stringArr.push(sorted1[key]>sorted2[key] ? (stringBuild(key, sorted1[key], 1))  : stringBuild(key, sorted2[key],2))
      }
        
    }
    console.log(stringArr)
    
    let arr2 = []
    stringArr.forEach(x=>{
      let arrSplit = x.split(':') 
  //     console.log(arrSplit[0].match(/\d/))
      if(arrSplit[0].match(/\d/)){
           arr2.push(x)
      }
    })
    stringArr.forEach(x=>{
      let arrSplit = x.split(':') 
      if(arrSplit[0].match(/\D/)){
          arr2.push(x)
      }
    })
    console.log(stringArr)
    console.log(arr2.join('/'))
    return arr2.join('/')
    
  }
  
  
  
  // elapsed time: ~5 hours
  // I learned a lot in this problem
  // Regex is a powerful tool
  // I approached this problem thinking I needed to remove items from the string
  // I was regex matching items I didn't care about and then removing them which was inneficient and not the best way to go about it using regex
  // From there I made individual lists of data for each string containing each letter and occurance
  // Then I sorted both lists according to occurance in descending order
  // This was an issue though later on I only sorted the lists by occurance
  // I did not take into account how many other letters had the same occurance and the alphabetical order of those letters. 
  // as well as the prefix of the string '1:' or '2:' or '=:'
  
  // anyways after I had sorted the lists I then compared them two lists of data and occurances depending on which list was bigger or equal I would give the prefix of 1, 2, or =
  // I then built an array of the strings with prefix and the letter repeated the number of times it occured in the string and pushed it to an array
  // That array I then sorted by the prefix
  // This is where I ran into issues
  // I was able to replicated the format of the string but my sorting was not correct
  // I need to sort by the list by the occurance of the letter in descending order
  // ex. 1:aaaaa/2:bbbb/=:ccc
  // if there were multiple letters with the same occurance I needed to sort them by alphabetical order
    // ex. 2:bbb/1:ccc/=:ddd
    // as well if there prefix wer
/* 
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/
// 4 hours had pass and  I was not able to sort the list correctly and decided to read some of the other solutions and see how they did it

// the second approach

// I learned a ton here
// Learned how to use Map() and how to store key value pairs in a map
// Learned how Map() is a better way to store data than an object
// in a map I can store key value pairs with any data type as the key and value
// Learned how collect data in a more concise way
// learned how to regex and match data i only care about



// In this second approach I first collected data from both strings, that being lowercase letters and their occurance
// I started by creating a helper function that would collect the data first
// the helper function would take in three parameters (map, string, and the string identifier 1 or 2)
// This time I would regex all lowercase letter with match().
// match() returns an array of all the matches
// then I would iterate through the matches
// Inside the iteration I declare a variable format
// format variable value would be the maps letters value or an empty object if it doesn't exist to start adding data to the letter
// I then add the string identifier to the format object
// '1' or '2' referenced as format[id] to keep track of how many time the number of times the letter occured in each string
// afterwards i set the letter as the kye and the format object as the value in the map
// a => {'1': 5, '2': 3}

// after I had collected the data I then add the max and prefix to the map
// i created another helper function to do this
// i iterate through the map and add the max and prefix to the map
// I compare the values of the format object to see which string had the most occurance of the letter and set the max to that value
// if the values are equal I set the prefix to '='
// if the value of the first string is greater than the second string I set the prefix to '1' else I set the prefix to '2'
// a => {'1': 5, '2': 3, 'max': 5, 'prefix': '1'}


// I know have all the data necessary to build the string
// however my data is not sorted
// I need to sort the data by the max value in descending order
// if there are multiple letters with the same max value I need to sort by their prefix
// I take my map and convert it to an array using the spread operator
// I then sort the array by the max value in descending order
// if the max value of a is less than b I return 1
// if the max value of a and b are equal
// lets check the prefix of a and b and sort them by order of 1, 2, = as 3
// if prefix a > prefix b return 1   a='=',b=2       3 > 2 
// if both prefix are equal lets sort them alphabetically
// if prefix a === prefix b return a.localeCompare(b)  a='=',b='='
// we use the localeCompare() method to sort them alphabetically
// else return -1

// once I have the array sorted I then iterate through the array again and filter values that have a max value less than 2
// because we don't want to include letters that only occured once in the string
// i should now have an array of letters that have a max value of 2 or greater
/* ex. 
[
    [ a, { '1': 5, '2': 3, 'max': 5, 'prefix': '1' }], 
    [ b, { '1': 4, '2': 3, 'max': 4, 'prefix': '1' }], 
    [ c, { '1': 4, '2': 3, 'max': 4, 'prefix': '=' }]
] 
*/
// I then iterate through the array and build the string
// I map through the sorted array and build the string using the prefix, max, and letter
// i use the repeat() method to repeat the letter the number of times it occured in the string with the max value
// I then join the array with a '/' to get the correct format
