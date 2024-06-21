let fullName=["naqeeb","bilawal","ayub"];
console.log(fullName);

let age=[51,22,30];
console.log(age);
console.log(fullName.length);
console.log(age.length);

console.log(typeof age);

console.log(age[2]);

console.log(age[2]=38);

console.log(age);

// print array element using for loop
for(i=0;i<fullName.length;i++){
    console.log(fullName[i]);
}

// for-of

for(let name of fullName){
    console.log(name);
} 

let cities=["Karachi","Lahore","Quetta","Peshawar","Hyderabad"];
for (let city of cities){
    console.log(city.toUpperCase());
}
 cities.push("Rahimyarkhan","Saghoda");

 console.log(cities);

 cities.pop();

 console.log(cities);

 let deletedItem=cities.pop();
 console.log("The deleted item is ", deletedItem);

 console.log(cities.toString());

 //concat arrays

 let pakMovies=["Zakham","Dukh"];
 let indMovies=["3idots","Munna Bhai"];

 let subContMovies=pakMovies.concat(indMovies);

 console.log(subContMovies);

 pakMovies.unshift("Merana hay muhabbat");
 console.log(pakMovies);

 pakMovies.shift();
 console.log(pakMovies);

// slice of array

let num=[1,2,3,4,5];
console.log(num.slice(1,3));

// splice in array
let z=[100,200,300,400,500,500];
let p=z.splice(2,3,101,90,100);
console.log(p);
console.log(z);

// add element through splice

z.splice(1, 0,55 ,66);
console.log(z);













 




