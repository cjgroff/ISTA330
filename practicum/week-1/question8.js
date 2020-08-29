/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
        0   1   2   3
        i j
        0 0 skip
        0 1
        0 2
        0 3
        1 0
        1 2
        1 3
        2 0
        2 1
        2 3

    

output: [1,]
*/

var biggerAndEven = function(input) {
    let counts = []
    
    
    for (let i = 0; i < input.length; i += 1)
    {
        let count = 0
        for (let j = 0 ; j < input.length; j += 1){
            if (i == j){
                continue
            }
            if (input[j] > input[i] && input[j]%2 == 0){
                count += 1
                
            }

            
        }
        counts.push(count)
    }
    return counts
  
};