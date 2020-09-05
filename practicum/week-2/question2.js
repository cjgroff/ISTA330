
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
               Start   lenght
          */            
// [-12]        0       1
//-12,3         0       2
//-12,3,-1      0       3
//-12,3,-1,5    0       4
//...
//all           0       7
//3             1       1
//3,-1          1       2
//...
//all           1       6
//-1            2       1
//...
//all           2       5
var sumsubarry = function(start,leg,input){
        let total = 0
        for (let i = 0; i < leg; i+= 1)
                {
                      total += input[start+i]  
                }
        return total
        
}

 var largestSubarray = function(input) {
        let max = -Infinity;
        for (let start = 0; start < input.length; start+= 1)
        {
                for (let leg = 1; leg < (input.length-start)+1; leg+= 1)
                {
                        let sum = sumsubarry(start,leg,input)
                        if (sum > max) {
                                max = sum
                        }
                        
                }
        }
        return max
 };
