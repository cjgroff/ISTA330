/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/
var sortq8 = function(input){
    for (let i = 0; i < input.length; i+= 1)
    {
        let minpos = i
        for(let j = minpos; j < input.length; j += 1)
        {
            if(input[j] > input[minpos])
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
var d_integer = function(input) {
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
        

    }
    let keys = []
    for (k in count)
    {
        keys.push(parseInt(k))
        
    }
    sortq8(keys)
    console.log(keys,count)
    for (let i = 0; i < keys.length; i+= 1)
    {
        if(count[keys[i]] == keys[i])
        {
            return keys[i]
        }
    }
    return -1
    
};