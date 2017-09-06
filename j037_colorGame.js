// 6 colors for testing
// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// 

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var colorHeader = document.querySelector("#colorHeader");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        
            squares[i].style.backgroundColor = colors[i];
        
            squares[i].style.display = "block";
        
    }
});

resetButton.addEventListener("click", function(){
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
    this.textContent = "New Colors";
});

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