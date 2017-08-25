// NOTE: these are javascript objects that are contructed from HTML

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

// takes a string arg and returns the one element with matching id
var tag = document.getElementById("highlight");

// The style property is one way to manipulate an element's style
tag.style.color = "red";
tag.style.border = "10px solid blue";
tag.style.fontSize = "50px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";



// takes string arg and returns a list of el that have matching class
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);

// NOTE: recommended for styles to be defined in separate files
// better to make the id or class (for this e.g.) in the css portion then do:
// tag.classList.add("someClass"); // in the JS portion
var someTag = document.querySelector("h1");
someTag.classList.add("someClass");


// returns a list of all el of a given tag name
var elTags = document.getElementsByTagName("li");
console.log(tags[0]);

// querySelector: returns the first element that matches a given 
// CSS-style selector; here we select by ID
// So all of the above can be done with just this. 
// NOTE: use CSS syntax
var qTag = document.querySelector("#highlight");
// NOTE: it ONLY returns the first element there are two class bolded just 
// returns 1st one
var qTag2 = document.querySelector(".bolded");

// How do we solve problem of just 1? Stick an All at the end
var qaTag = document.querySelectorAll("h1");


