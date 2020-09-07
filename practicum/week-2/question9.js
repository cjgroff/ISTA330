/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
325

*/
var sumdig = function(n){
    let dig = n.toString().split('')
    let sumdig = 0
    for (let i = 0; i < dig.length; i+= 1)
    {
        let numdig = parseInt(dig[i])
        sumdig += numdig 
    }
    return sumdig
}
var largestGroupsCount = function(n) {
    let groups = {}//keys are sums, values are arrys of ints
    /*
    max = 1
    maxcount = 1
    after 1 : {1: [1]}
    after 9 : {1: [1],9: [9]}
    after 10 : {1: [1,10],9: [9],}
    after 45 : {1: [1,10],9: [9,45],}
    after 
    */
   let max = 0
   let maxcount = 0
    for (let i = 1; i <= n; i+= 1)
    {
        console.log('i:',i)
        let recordsum = sumdig(i)
        if (groups[recordsum] == undefined){
            groups[recordsum] = [i]
        }
        else{
            groups[recordsum].push(i)
        }
        if (groups[recordsum].length > max)
        {
            max = groups[recordsum].length
            maxcount = 1
        }
        else if (groups[recordsum].length == max)
        {
            maxcount += 1
        }
        
    }
    return maxcount
    

};