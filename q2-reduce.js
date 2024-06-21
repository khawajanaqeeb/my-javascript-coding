// take a number n as input from user.create an array of numbers from 1 to n.
//use reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbers in the array.

let n=prompt("Enter a number");

let num=[];
let sum=0;
let product=0;

for (let i=1 ; i<=n ; i++){
  num[i-1]=i;
}
console.log(num);
sum=num.reduce((pre , cur)=>{
    return pre+cur;
})
 console.log("sum of Array",sum);

 product=num.reduce((pre , cur)=>{
    return pre*cur;
})

console.log("product of array",product);


