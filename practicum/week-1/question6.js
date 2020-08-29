/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
        0  1  2  3  4  5  6
output: 3 
*/

var median = function(input) {
    input.sort()
    let mid = Math.floor(input.length/2)
    console.log('mid:', mid)
    if (input.length%2 == 0)
    {
        
        return (input[mid-1]+input[mid])/2
    
    }
    else
    {
        
        return input[mid]

    }
};