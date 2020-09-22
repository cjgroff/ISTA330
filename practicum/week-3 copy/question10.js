/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    s = s.split('').map(c => c.toLowerCase()).filter(c => c >= 'a' && c <= 'z' || c >= '0' && c <= '9')
    let len = s.length
    let mid = Math.floor(len/2)
    for (let i = 0; i < mid; i++ ) 
    {
        if (s[i] != s[len - 1 - i]) 
        {
            return false
        }
    }

    return true;

};