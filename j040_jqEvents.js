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