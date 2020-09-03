/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
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
var maxMinusMin = function(n) {

    d = (n+"").split("")
    sort(d)
    let dnum0 = parseInt (d[0])
    let dnum1 = parseInt (d[d.length-1])
    return dnum1 - dnum0



};