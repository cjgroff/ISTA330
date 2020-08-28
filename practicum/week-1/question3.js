/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
        0  1  2  3
        i j
        0 1
        0 2
        0 3
        1 2
        1 3
        2 3
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    let count = 0
    for (let i = 0; i < input.length; i += 1)
    {
        for (let j = i+1; j < input.length; j += 1)
        {
            if (input[i]< input[j])
            {
                count += 1
            }


        }
    }


    return count
};
