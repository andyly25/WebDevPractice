$("h1").click(function(){
    alert("h1 clicked!");
});

$("button").click(function(){
    // instead of just this.asdasd that we do, jQuery you do $(this).asdsa
    // quick googling and they have a toggleClass you can use 
    $(this).toggleClass("done");
    var text = $(this).text();
    console.log("you clicked " + text);
})

// keyup and keydown are also quite useful
// Here we shall try using keypress() this is easy way to add keypress listener
// very similar to click
// Note if you want for specific keyboard press, look up the char codes keycode
// enter is 13
$("#keyPressed").keypress(function(event){
    if(event.which === 13){
        alert("you hit endter!")
    }
})

// on() works similar to addEventListener, specify type of event to listen for
// supports all types of events not just click e.g. click, dblclick, keypress
$("h2").on("click", function(){
    $(this).css("color", "purple");
})

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
})
$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
})

/*
 * Why use on() vs click()?
 * click adds listeners for existing elements
 * on() will add listeners for all potential future elements
 */
$("#deathToDivs").on("click", function(){
    //if we want to have code go after 1 second, we do a callback here as well
    // changed the fadeout to fadetoggle so I guess they aren't truly dead
    $('div').fadeToggle(1000, function(){
        console.log("Fade accomplished!");
        // to be completely evil, add in
        // $(this).remove();
    });
})
$("#deathToDivss").on("click", function(){
    //if we want to have code go after 1 second, we do a callback here as well
    // changed the fadeout to fadetoggle so I guess they aren't truly dead
    $('div').slideToggle(1000, function(){
        console.log("slide accomplished!");
        // to be completely evil, add in
        // $(this).remove();
    });
})