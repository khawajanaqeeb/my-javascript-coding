// For a given array with prices of 5 items [250,645,300,900,50]. All items have an offer of 10% on them . change the array to store final price after offer.

let prices=[250,645,300,900,50];
let i=0;
for (let price of prices){
   let offer=price /10;
    prices[i]=prices[i]-offer;
    console.log(`value after offer=${prices[i]}`);
    i++;
}

// same problem with for loop

let listPrices=[200,300,400,500,700];

for ( let x=0; x<listPrices.length; x++){
    let offer=listPrices[x]/10;
    listPrices[x]-=offer;
    console.log(`pirces after offer${listPrices[x]}`);
}


