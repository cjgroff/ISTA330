/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
i:0 J:1 mutli :1



*/

var productOfOthers = function(input) {
    narry = []
    
    for(let i = 0 ; i < input.length; i++)
    {
        //form produc of all expect input[i]
        let multi = 1
        for(let j = 0 ; j < input.length; j++)
        {
            if (i != j)
            {
                multi *= input[j]
                
            }

        }
        narry.push(multi)
       
    }
    
    return narry
};

console.log('hi');