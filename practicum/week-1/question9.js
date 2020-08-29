/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.
emelwco,1,5,6,2,0,3,4
0123456
4,0,3,5,6,1,2
welcome
Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
        01234
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    let result = ""
    for (let i = 0; i < input.length; i += 1)
    {
        result += input[shuffleIndices[i]]
    }
    return result

};