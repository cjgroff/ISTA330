/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
    dic = {}
    for (let i = 0; i < input.length; i+= 1)
    {
        let value = input[i]
        if(dic[value] == undefined)//We have not see this value 
        {
            dic[value] = true
        }
        else // We have see this value it a dub
        {
            return true
        }
    }
    return false
};