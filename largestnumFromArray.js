// using reduce method to find largest no. from array
let num=[5,10,3];

let result=num.reduce((pre,cur)=>{
    return pre>cur ? pre : cur;
})

console.log(result);

