var fs = require('fs');

console.log('program started.');
let wait = (ms) => {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
let doSomething1 = () => {    
       
      fs.readFile('test1.txt', (error, data) => {
        if(error) {
          console.log(`something went wrong: ${error}`);
        }
        console.log(`doSomething1 completed.`);
        return data;
      }); 
               
    return 0;
}

let doSomething2 = (data) => {
  console.log(`Number of characters in this file: ${data.length}`);
}

let result = doSomething1();
doSomething2(result);

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
for(let i = 1; i < primes.length + 1; i++) {
   console.log(`The ${i}${i == 2 ? 'nd' : (i == 3 ? 'rd' : 'th')} prime number is ${primes[i-1]}`);
   wait(1000);
}
console.log('Now I know what the first 15 prime numbers are!');

console.log('program ended');