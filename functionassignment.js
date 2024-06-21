// create a function using the function keyword that take a string as an arguement 
//and return the number of vowels in the string.

// function strngvow(str){
// let count=0;
// for (const char of str){
//     if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//         count++;
//     }
    
// }
// console.log(count);

// }
// strngvow("Khawaja Naqeeb Uddin");


// same above work with arrow function

let countVowel=(str) => {
    let count=0;
    for (const char of str){
        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
        
    }
    console.log(count);
    

    }
    countVowel("aeiou");
    



