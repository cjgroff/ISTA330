
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
             
          */

 var findDuplicates = function(input) {
    var object = {};
    var result = [];

    input.forEach(function(item) {
      if(object[item] == undefined)
      {
        object[item] = 1
      }
      else
      {
        object[item] += 1
      }
    })

    for (var key in object) {
       if(object[key] >= 2) 
       {
        result.push(parseInt(key))
       }
    }

    return result
    
 };
