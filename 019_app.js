years = Number(prompt("Please enter your age in years"));
days = 365.25 * years;
if(years % Math.sqrt(years)===0){
    console.log("your age is a perfect square!");
}
console.log("You are about: " + days + " old")
alert("You are about: " + days + " old")
