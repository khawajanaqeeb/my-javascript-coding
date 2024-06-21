const expr="pears";
switch(expr){
    case"oranges":
    console.log("oranges are Rs.200 per dozen");
    break;
    case"mangoes":
    case"papayas":
    console.log("mangoes and papayas are Rs.150 per kilo");
    break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
};
