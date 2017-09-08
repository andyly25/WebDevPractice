// If you don't provide argument, then only the information will be grabbed
// this is the getter
// if you provide an argument, then things can change which is the setter

$("h2").text("Some fruits");

// I can use something.html(addSomeHtml) if I don't want to edit just text

//now to edit an image
$("img").css("width", "300px");
// now using attr to change image src
$('img:first-of-type').attr("src", "UnsplashPhotos/a3.jpg");
$('img:last-of-type').attr("src", "UnsplashPhotos/a4.jpg");

// changing input type
$("input:first-of-type").attr("type", "color");


// val() will usually get values of form elements such input, select, and 
// textarea, here I'll just fill in some values
$("input:last-of-type").val("Banana");
$("input:first-of-type").val("#00FF00");


// When using $("something").addClass("asd asds") you can add more than one 
// class at a time
$('h1').addClass("correct");
// If no jQuery, then we would be using a for loop to manually change each li
$('li').addClass("wrong");
$('li').first().toggleClass("done");
