// Here's the Select portion
var body = document.querySelector("body");
var isGreen = false;

// here's where we manipulate
setInterval(function (){
    if(isGreen){
        body.style.background = "white";
    } else{
        // remember its Red green blue
        body.style.background = "#22FF00";
    }
    isGreen = !isGreen;
    // this makes every 1 second with the 1000
}, 1000);