

let bigNumber = 10000000000;
let sum = 0;

let startTime = Date.now();
for(let i=0; i<bigNumber; i++){
    sum += i;
}
let endTime = Date.now();

console.log(endTime - startTime);
console.log(sum);