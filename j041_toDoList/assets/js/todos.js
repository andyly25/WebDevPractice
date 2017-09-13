// Check off todos from click
// $("li").click(function(){
//     $(this).toggleClass("completed");
// });
// 
// Here we edit to include one, we changed to ul, because in juery we can only
// add listeners on elements that exist, and since we are accounting for future
// listeners, we do on the ul that then applies to their li
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on x to delete todo
// here I'll edit just like the above as well with span inside ul
$("ul").on("click", "span", function(event){
    // If you didn't have the parent, it would only remove the span
    // now if we wanted fadeout but the remove not to happen immediately, we
    // use another callback and with another $(this) which is different from
    // line above, where it already refer to the li
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // This is important, because span is inside an li > ul > container > body
    // all of the other events specific for those will trigger as well so we 
    // add the below code
    event.stopPropagation();
});

$("input[type='text").keypress(function(event){
    // enter key is 13
    if(event.which === 13){
        // grabbing from input new todo
        var todoText = $(this).val()
        // set an empty input
        $(this).val("");
        // create new li and add to ul using append
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
});