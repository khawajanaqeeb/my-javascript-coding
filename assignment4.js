// write a code which can give grades to students according to their scores:
// 90-100 A+ , 80-89 A, 70-79 B, 60-69 C, 50-59 D , 0-49 F

let marks=prompt("Enter marks between 0-100");
let grade;

if (marks>=90 && marks<=100){
    grade="A+";
} else if (marks>=80 && marks<=89){
    grade="A"; 
}else if (marks>=70 && marks<=79){
    grade="B"; 
}else if (marks>=60 && marks<=69){
    grade="C"; 
}else if (marks>=50 && marks<=59){
    grade="D"; 
}else if (marks>=0 && marks<=49){
    grade="F"; 
}
console.log("Your garde is ",grade);