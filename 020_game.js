// simple exercise using conditionals

// make a secret number
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));


// check if right
if(guess === secretNumber){
    alert("You got it right!")
}else if(guess < secretNumber){
    alert("Cold!");
}else{
    alert("hot!");
}