// strings

let myStr="Bitcraft";

console.log(myStr.length);

console.log(myStr[0]);

console.log(myStr.length-1);

let obj={
    name:"pen",
    price:100,
}
// difficult way to print
console.log("price of ",obj.name,"is",obj.price,"rupees");

// easer way

console.log(`price of ${obj.name} is ${obj.price} rupees`);

// tamplate letrals- escape characters

console.log("Bitcarft\nInstitute");

console.log("Bitcarft\tInstitute");

let strng="Bitcraft\tInstitute";
console.log(strng.length);

let school="    Bitcraft    ";
let newSchool=school.toUpperCase();
console.log(newSchool);
console.log(newSchool.toLowerCase());
console.log(school.trim());

let nam="Wahid";
console.log(nam.slice(1 , 4));

let nam1="Bit";
let nam2="carft";

console.log(nam1.concat(nam2));

console.log(nam1.replace("i","o"));










