// We are given an array of marks of students. filter out of the marks of students that score 90+.

let marks=[55,69,90,91,95];

let aPlus=marks.filter((val)=>{
    return val > 89;
})

console.log(aPlus);

