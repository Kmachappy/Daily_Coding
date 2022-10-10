/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

function bouncingBall(h,  bounce,  window) {
    //  h > 0
    //  0 < bounce < 1
    //  window < h
    //   if any of these conditions are no met
    //   return -1
    //   else 
    // return the result
    //   
    
    // |.
    // |   .\
    // |    |
      
    
    // we take the h = 3  and multiply by .66 till 
    // 3 * .66 = 1.98
    // first pass initial falling down 
    // goes back up 1.98 heigher than 1.5
    // second pass going up 1.98 > 1.5
    // third pass going down from 1.98
    // 1.98 * .66 = 1.30 < window 1.5
    
    
    // so start as 1 always for the inital and add 
    // if h*bounce > windows  add +2
    // else done return result
    
    
    if(h <= 0 || bounce>=1 || bounce<=0 || window >= h){
    return -1  
    }
    
    let pass = 1;
      while(h>window){
        h = h * bounce
        if(h>window){
          pass += 2
        }
      }
    
      return pass
    }
    
// elapsed time to complete: ~60 minutes
// time complexity: O(n)
// space complexity: O(1)
// took me a while to figure out the logic for this one
// i was understanding how many passes it would take 