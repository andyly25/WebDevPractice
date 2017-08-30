// buttons for each player
var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
// grabbed from the p tag that contains spans, also the DISPLAY
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
// grabbing the number user input
var numInput = document.querySelector("input");
// grabbing the only span within a p tag 
var playto = document.querySelector("p span");
// keeping track of scores here
var p1score = 0;
var p2score = 0;
// boolean variable to control state of game
var gameOver = false;
// a winning score
var winningScore = 5;

// first player button listener 
p1button.addEventListener("click", function(){
    // as long game not over
    if(!gameOver){
        // everytime clicked add 1 to p1 score
        p1score++;
        if(p1score === winningScore){
            // if reaches 5, then game no over!
            console.log("Game is now over!");
            score1.classList.add("winner");
            gameOver = true;
        }
        // here we update the score
        score1.textContent = p1score;
    }
});

// same explanation as p1 button listener
p2button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === winningScore){
            console.log("Game is now over!");
            score2.classList.add("winner")
            gameOver = true;
        }
        score2.textContent = p2score;
    }
});

// reset button with reset function separate
resetButton.addEventListener("click", reset);

function reset(){
    // console.log("reset clicked");
    p1score = 0;
    p2score = 0;
    // resets the counter we see to 0
    score1.textContent = 0;
    score2.textContent = 0;
    // easy way to remove green is just to remove from both
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    // this way we can resume the game after we reset
    gameOver = false;
}

// a change event runs anytime the value changes
numInput.addEventListener("change", function(){
    playto.textContent = this.value;
    // even with values changing correctly, the game doesn't stop at number 
    // we inputted due to the === check, because it's comparing a number to 
    // string, so we just need to convert into a Number
    winningScore = Number(this.value);
    // Now error of if you change playing to some number after starting, 
    // you can go past winning score, so let's just reset everything when that
    // happens since it's weird to just change the rules in middle game.
    reset();
})