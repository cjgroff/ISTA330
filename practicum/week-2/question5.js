/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/
//7,5,2,4
// 1 1 -1
// 7-5=1 sign  
//7,7,5,5,3,3
// 0 1 0 1  0

var isMonotonic = function(input) {
    let sign = undefined
    for (let i = 0; i < input.length-1; i+= 1)
    {
        
        let newsign = Math.sign(input[i]-input[i+1])
        if(newsign == 0){
            continue
        }
        else if(sign == undefined)
        {
            sign = newsign
        }
        else if(sign != newsign)
        {
            return false
        }
    }
    return true

};

console.log('hi');