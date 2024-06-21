// Creat an array to store companies"Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
// (a) remove the first company form the array
// (b) remove the uber & add Ola in its place
// (c) add Amazon at the end.

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

//companies.splice(5,0,"Amazon");// by suing splice
companies.push("Amazon");   // by using puch
console.log(companies);



