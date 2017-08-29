var img = document.querySelector("img");
img.setAttribute("src", "UnsplashPhotos/a2.jpg")


// making the variables to be used
var button = document.querySelector("button");
var paragraph = document.getElementById("clicker");
var h1 = document.querySelector("h1");

// setup event listener
button.addEventListener("click", function(){
    paragraph.textContent = "Someone clciked the button!";
});

h1.addEventListener("click", function(){
    h1.textContent = "Event Listeners!";
    h1.style.border = "2px dashed orange";
});

// what happens if we add to a parent?
// clicking any of the li still prints out message to console log
document.querySelector("ul").addEventListener("click", function(){
    console.log("you clicked the UL!");
});

// Here we loop through and each of the li are events
uli = document.querySelectorAll("li");
for(var i = 0; i< uli.length; i++){
    uli[i].addEventListener("click", function(){
        this.style.color = "pink";
    });
}

// Another way of applying event listeners is:
var button2 = document.getElementsByTagName("button")[1];
var para2 = document.getElementById("clicked2");
var isYellow = false;

// There is an even easier way of doing this but using CSS and toggle
button2.addEventListener("click", changeText);

function changeText(){
    
    if(!isYellow){
        para2.innerHTML = "<em>Someone</em> <strong>CLICKED</strong> <u>me!</u>";
        document.body.style.background = "yellow";
        // isYellow = true;
    }else{
        para2.innerHTML = "Please click me!";
        document.body.style.background = "white";
        // isYellow = false;
    }
    // easier than setting true and false in each section
    isYellow = !isYellow;
}

// shorter way of doing the above
// button2.addEventListener("click", function(){
//     // this is the .yellow I made in the html doc.
//     // no need for isYellow if else mumbo jumbo
//     document.body.classList.toggle("yellow");
//     // para2.innerHTML = "<em>Someone</em> <strong>CLICKED</strong> <u>me!</u>";
// });