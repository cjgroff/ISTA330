/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
        0  1  2  3  4  5  6
output: 3 
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
var median = function(input) {
    sort(input)
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