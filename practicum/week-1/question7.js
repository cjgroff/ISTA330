/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.
7,2,1,4,5,3
(7,5)(4,3)(2,1)
Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/
var sort = function(input){
       for (let i = 0; i < input.length; i+= 1)
       {
           let minpos = i
           for(let j = minpos; j < input.length; j += 1)
           {
               if(input[j]< input[minpos])
               {
                   minpos = j
               }
           }
           //At this minpos minpos hold the index of small value.
           let temp = input[i]
           input[i] = input[minpos]
           input[minpos] = temp
       }
   }
var maxSumOfMins = function(input) {
       let Max = 0
       sort(input)
       for (let i = 0; i < input.length; i += 2)
       {
              Max += input[i]

       }
       return Max



};