// buttons for each player
var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
// grabbed from the p tag that contains spans
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
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
            gameOver = true;
        }
        score2.textContent = p2score;
    }
});

