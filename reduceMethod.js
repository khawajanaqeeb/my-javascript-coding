// it perform some orperation & reduce the array to a single value.it returns that single value.

let digits=[1,2,3,4];

let avr=0;
let sum=digits.reduce((previous,current)=>{
    return previous + current;
});

avr=sum/(digits.length);
console.log(avr);


