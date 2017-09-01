// grabbing all of the li's
var allLi = document.querySelectorAll("li");

// now we make a loop so we can apply it to all item in the list
for(var i = 0; i < allLi.length; i++){
    // here is when the mouse hovers over
    allLi[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    })

    // returnng back to deafault black when hover out
    allLi[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    })

    // allows you to toggle on and off strikethrough of list item
    allLi[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}
