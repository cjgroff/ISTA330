/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
[5,3,4,5]
[3,4,5,6]
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
var minMoves = function(A) {
    sort(A)
    Ndic = {}
    let count = 0
    //[1, 2, 2, 2, 3, 7]
    // count 1
    for (let i = 0; i < A.length; i++)
    {
        if(Ndic[A[i]] == undefined)
        {
            Ndic[A[i]] = true

        }
        else 
        {
            while (Ndic[A[i]] != undefined)
            {
                A[i]++
                count += 1
            }
            Ndic[A[i]] = true
        }
    }
    return count

};