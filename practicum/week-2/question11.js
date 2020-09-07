/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
Number of elements in input1 that are further from all elements of input2 than d
*/
var passes = function(value,input2,d){
    for (let i=0; i < input2.length; i++)
    {
        let diff = Math.abs(value-input2[i])
        if (diff <= d)
        {
            return false
        }
    }
    return true
}
var d_count = function(input1, input2, d) {
    let count = 0
    for (let i = 0; i < input1.length; i++)
    {
        if(passes(input1[i],input2,d))
        {
            count += 1
        }
    }
    return count


};