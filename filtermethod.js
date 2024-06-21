// filter method used to filter out values of array on some condition.

let digits=[1,2,3,4,5,6,7,8,9,10];

let newDigits=digits.filter((val)=>{
   return ( val % 2!==0);
});

console.log(newDigits);
