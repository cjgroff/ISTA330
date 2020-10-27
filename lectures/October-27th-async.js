var fs = require('fs');

console.log('program started.');
let wait = (ms) => {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
let doSomething1 = (resolve, reject) => { 
       
      fs.readFile('test1.txt', (error, data) => {
        if(error) {
          reject(`something went wrong: ${error}`);
        }
        console.log('doSomething1 completed.');
        resolve(data);
      });                
    
}

let doSomething2 = (data) => {
   console.log(`Number of characters in this file: ${data.length}`);
}

let p1 = new Promise((resolve, reject) => {
  return doSomething1(resolve, reject);
});

p1.then(x => doSomething2(x));

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
for(let i = 1; i < primes.length + 1; i++) {
   console.log(`The ${i}${i == 2 ? 'nd' : (i == 3 ? 'rd' : 'th')} prime number is ${primes[i-1]}`);
   wait(1000);
}
console.log('Now I know what the first 15 prime numbers are!');

console.log('program ended');