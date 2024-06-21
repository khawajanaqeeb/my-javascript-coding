// Prompt the suer to entr theri full name , Fenerate username for them based on input. Start username with @,followed by their full name and ending with fullname length.

let fullName=prompt("Enter your full name");

console.log(`@${fullName}${fullName.length}`);// first way

console.log("@"+fullName+fullName.length);// second way

let userName="@"+fullName+fullName.length;// third way
console.log(userName);


