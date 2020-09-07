/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference 
(that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
[-14, -10, -5, -4, 1, 19, 23, 24]
-14,-10,-14+10 = 4
-5,1
[-14, -5] , 9
[-14, -4] ,10
[-14, 1] ,15
[-14, 19] ,33
[-14, 23] , 37
[-14, 24] , 38 
[-10, -5], 5
[-10, -4]
min diff = 4
min pair = [[-14,-10],]
*/
var sort = function(input){
    for (let i = 0; i < input.length; i+= 1)
    {
        let minpos = i
        for(let j = minpos; j < input.length; j += 1)
        {
            if(input[j] < input[minpos])
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
var minPairs = function(input) {
    sort(input)
    let mindiff = Infinity
    let minPairs = []
    for (let i = 0; i < input.length; i++)
    {
        for (let j = i+1; j < input.length; j++)
        {
            let diff = input[j]-input[i] 
            if(diff < mindiff)
            {
                mindiff = diff
                minPairs = [[input[i],input[j]]]
            }
            else if (diff == mindiff)
            {
                minPairs.push([input[i],input[j]])
            }

        }
    }
    console.log(minPairs)
    return minPairs
};