// require as usual
var fakerr = require("faker");

// loop for 10 things
for(var i = 0; i<10; i++){
    // productName inside commerce section gives what we need
    var fakeProduct = fakerr.commerce.productName();
    // price inside commerce section gives what we need
    // NOTE: compared to solution, price only gives 00 at the end...
    // on their github there's been report of problems for it, so not on my end
    // price(min, max, dec, symbol)
    var fakePrice = fakerr.commerce.price(1, 300, 2, '$');
    console.log((i+1) + ". We have a " + fakeProduct + " for: " + fakePrice);
}