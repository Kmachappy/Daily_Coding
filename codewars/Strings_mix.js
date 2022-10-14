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
  
  
  
  