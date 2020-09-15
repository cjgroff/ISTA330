/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    for (let i = 0; i<input.length;i++)
    {
        if (input[i]== 1)
        {
            continue
        }
        else if (input[i+1] == 0 && input[i+k]== 0)
        {
            return true
        }
    }
return false
};