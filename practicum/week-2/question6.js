/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return undefined.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let floorhalf = Math.floor(input.length/2)
    let count = {}
    for (let i = 0; i < input.length; i+= 1)
    {
        let value = input[i]
        if (count[value] == undefined)
        {
            count[value] = 1
        }
        else 
        {
            count[value] += 1
        }
        if (count[value] > floorhalf)
        {
            return value
        }

    }
    return undefined
};