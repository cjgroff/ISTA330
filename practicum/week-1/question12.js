/*
A string, input, which contains only letters a and b is given.
  
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'

*/
//The number of pars of str on length n is 2^(n-1)
//abc; a bc; ab c; a b c;
//0 00 abc
//1 01 ab c
//2 10 a bc
//3 11 a b c
//0 000 abcd
//1 001 abc d
//2 010 ab cd
//3 011 ab c d
//4 100 a bcd
//5 101 a bc d
//6 110 a b cd
//7 111 a b c d
var partition = function(s,bits){
  //partition('abcd','101') returns ['a','bc','d']
  let parry = [s[0]]
  for (let i = 0; i < bits.length; i+= 1)
  {
    if(bits[i]== '0')
    {
      parry[parry.length-1] += s[i+1]
      //add next character to last element
    }
    else
    {
      parry.push(s[i+1])
      //create new element starting with next charater  
    }
  }
  return parry
  
}
var maxBalanceNumber = function(s){
  let mnb = 0
  for (let i = 0; i < Math.pow(2,s.length-1); i+= 1)
  {
    let p = partition(s,i.toString(2).padStart(s.length-1,0))
    let nb = numbal(p)
    if(nb > mnb)
    {
      mnb = nb
    }
    console.log(p,nb)
    
  }
  return mnb

}
var numbal = function(p){
  let count = 0
  for (let i = 0; i < p.length; i+= 1)
  {
    if(isbal(p[i]))
    {
      count +=1
    }
    
  }
  return count
}
//(1).toString(2).padStart(3,0)
//'aabbb
var isbal = function(s){
  let acount = 0
  let bcount = 0
  for (let i = 0; i < s.length; i+= 1)
  {
    if (s[i]=='a')
    {
      acount += 1
    }
    else
    {
      bcount += 1
    }
  }
  return acount == bcount
}

