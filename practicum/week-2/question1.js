/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/
var Maxnumber = function(input){
        let l = input.length;
        let max = -Infinity;
        for (i = 0; l > i; i++) {
            if (input[i] > max) {
                max = input[i];
            }
        }
        return max
}
var largestNumberIsAtLeastTwice = function(input) {
        let max = Maxnumber(input)
        let halfmax = max/2
        for (let i = 0; i < input.length; i+= 1)
        {
                if(input[i] == max)
                {
                        continue
                }
                else if(input[i] > halfmax)
                {
                        return false
                }
        }
        return true
   
};