// For given array with marks of students[85,97,44,37,76,60]. Find the average marks of the entire class.

let marks=[85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
    sum +=mark;
    
}
avg=sum/marks.length;
console.log("The average marks of the class =", avg);


