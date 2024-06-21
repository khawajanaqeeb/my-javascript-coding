let a=6;
let b=7;

let cond1=a<b;
let cond2=a===6;
console.log("cond1 && cond2 =", cond1 && cond2);

console.log("cond1 && cond2 =", a<b && a===6);// this is another way to avoid using variable cond1 and cond2

console.log("cond1 || cond2 =", a>b || a===6);
console.log("cond1 || cond2 =", a>b || a===5);

console.log(" !(a >b) =", !(a>b));

// conditional statement

let age=14;

if (age>=18) {
    console.log("you can vote");
 
}
if (age < 18){
    console.log("you cannot vote");
}

let mode="light";
let color;

if (mode==="light"){
    color="white";
} else {
    color="black";
}
console.log(color);

let num=11;

if (num%2===0){
    console.log(num, "is even");
} else {
    console.log(num,"is odd");
}

let money=200;
let food;

if (money===500){
    food="you can buy large zinger";
} else if (money===400){
    food="you can buy medium pizza";
} else if (money===300){
    food="you can buy biryani";
} else {
    food="eat daal chawal at home"
}
console.log(food);


let pocket="money";

let wallet= pocket==="money"? "not empty" : "empty";
console.log(wallet);











