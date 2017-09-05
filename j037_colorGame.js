// 6 colors for testing
// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// 

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var colorHeader = document.querySelector("#colorHeader");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    // generate new colors again
    colors = generateRandomColors(6);
    // pick new random color winner from array
    pickedColor = pickColor();
    // change color display for pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    colorArrayFunct(squares);
    colorHeader.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = (this.style.backgroundColor);

        // compare color
        // if right answer
        if(clickedColor == pickedColor){
            // alert("yay");
            messageDisplay.textContent = "Correct";
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

function changeColors(color){
    // loop through all squares to change given color
    for(var i = 0; i <colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
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
        arr[i].style.backgroundColor = colors[i];
    }
}