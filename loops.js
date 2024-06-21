// print your name 5 times

for (let i=1; i<=5 ; i++){
    console.log("Bitcraft");
}

// sum of first 5 natural numbers

let sum=0;
for ( let n=1 ; n<=5; n++) {
    sum=sum + n;
}
console.log("sum of first 5 natural nuombers is :",sum);

// while loop
let x=1;
while(x<=10){
    console.log(x,"Bitcarft");
    x++;
}

// do-while loop

let p=1;
do{
    console.log("Bitcraft");
    p++;
} 
while(p<=5);

// for-of loop

let str="Bitcraft";
for (let y of str){
    console.log(y);
}
let size=0;
let string="Bitcraft";
for (let y of string){
    console.log(y);
    size++;
}
console.log("Our word size is ",size);

// for-in loop

let Biodata={
    name:"Abubakar",
    age:20,
    address:"Dastagir ,Karachi",
    contact:"12345",
    e_mail:"abc@google.coom",
}

for (let i in Biodata){
    console.log("key     : ",i,"    value     :",Biodata[i]);
}






