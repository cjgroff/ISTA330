/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],
        [4,5,6]]
output: [[1,4], [2,5], [3,6]]
nm =[
    [M[0][0],M[1][0]],
    [M[0][1],M[1][1]]
*/

var transpose = function(M) { 
    let nm = []
    for (let col = 0; col < M[0].length; col +=1)
    {
        let newrow = []
        
        for (let row = 0; row < M.length; row+= 1)
        {
            newrow.push(M[row][col])
        }
        nm.push(newrow)
    }
   return nm 

};