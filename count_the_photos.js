/*
In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
A camera takes a photo of a car if it moves to the direction of the camera.

Task
Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.

Examples

For ">>." -> 2 photos were taken
For ".>>" -> 0 photos were taken
For ">.<." -> 3 photos were taken
For ".><.>>.<<" -> 11 photos were taken


*/
// return the total number of photos.
// it should return an integer
function countPhotos(road){
    // okay so we have a string 
    // >.<.>>.> = 6 photos taken
    // we start at the first character
    // > or <  is the direction of the car
    // . is the camera
    // we count how many time > or < will pass by a camera
    // > . . . three cameras
    // . < one camera
    //  >> . 2 cars two photos taken of each
    //  so depeding on the position of the character
    // and where it is face we will check that portion of the array
    // if at road[0] and  > check the rest of the right of the arry for
    // '.'  if '.' add the photo count
    // if at road[4] and > look only from that point for '.'
    
    // what we need is an photo counter
    
    let photoCounter = 0
    road = road.split('')
    
    road.forEach((e,i,a)=>{
      if(e == '>'){
        a.slice(i+1).forEach(e=>{
          if(e == '.'){
            photoCounter +=1
          }
        })
      }
      if(e == '<'){
        // start from the beginning and slice up to the '<'
        //iterate and count the amount of '.'
        a.slice(0,i).forEach(e=>{
          if(e == '.'){
            photoCounter+=1
          }
        })
      }
    })
  
  return photoCounter
  }

  // elapsed time: ~ 30 minutes
    // time complexity: O(n^2)
    // space complexity: O(n)
    // learned how to use slice to iterate through an array