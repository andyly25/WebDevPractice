// Future should follow the module design method where we
// add variables and functions to objects instead of hanging freely like this
// helps avoid namespace collisions
// example below:
// var game = {};
// game.init = function(){
//     setupModeBtns();
//     setupSquares();
//     reset();
// }
// game.init();


// 6 colors for testing
// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// 

// keeping all variables here
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var colorHeader = document.querySelector("#colorHeader");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// cleans up a lot of the floating things and creating more functions
function init(){
    setupModeBtns();
    setupSquares();
    reset();
}

// for mode buttons; doing this way makes easier to add more difficultes



// commenting these two out since i made mode buttons
// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
        
//             squares[i].style.backgroundColor = colors[i];
        
//             squares[i].style.display = "block";
        
//     }
// });

// resetButton.addEventListener("click", function(){
//     reset();
// });
// same as above
resetButton.addEventListener("click", reset);

// don't need this since doing in init function
// colorDisplay.textContent = pickedColor;



function changeColors(color){
    // loop through all squares to change given color
    for(var i = 0; i <colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function reset(){
    // generate new colors again
    colors = generateRandomColors(numSquares);
    // pick new random color winner from array
    pickedColor = pickColor();
    // change color display for pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    colorArrayFunct(squares);
    colorHeader.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

// pick random color from the colors we have
function pickColor(){
    // sample of random number between 1-6 and chopping off decimals at end
    // Math.floor(Math.random() * 6 + 1);
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// grab a random RGB color; have to get r, g, b randomly from 0-255
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // rgb(255, 255, 0);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// return x nums of random colors
function generateRandomColors(num){
    // make array
    var arr = [];
    //add num ran colors to array
    for(var i = 0; i < num; i++){
        // get random color and pussh into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function colorArrayFunct(arr){
    for(var i=0; i<arr.length; i++){
        if(colors[i]){
            // turning all the displays again so not hidden
            squares[i].style.display = "block";
            arr[i].style.backgroundColor = colors[i];
        }else{
            // hiding the last 3 if for easy mode
            arr[i].style.display = "none";
        }
    }
}

// sets up our hard and easy buttons to function correctly
function setupModeBtns(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            // removing from both buttons to be safe
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            // if(this.textContent ==="Easy"){
            //     numSquares = 3;
            // }else{
            //     numSquares = 6;
            // }
            // reset(numSquares);

            // Here's a shorter way writing above using ternary operators
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i<squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = (this.style.backgroundColor);

            // compare color
            // if right answer
            if(clickedColor == pickedColor){
                // alert("yay");
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                colorHeader.style.backgroundColor = clickedColor;
            // chose wrong answer
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}