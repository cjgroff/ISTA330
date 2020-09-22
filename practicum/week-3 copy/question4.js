/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  let ps = [[]];
    for (let i=0; i < input.length; i++) {
        for (let j = 0, len = ps.length; j < len; j++)
         {
            ps.push(ps[j].concat(input[i]))
        }
    }
    return ps
};