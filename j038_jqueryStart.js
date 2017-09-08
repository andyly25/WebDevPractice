// woops, forgot to add "quotes around" so was wondering why didn't work
// selecting element with id and give it a style
$("#something").css("border", "2px solid blue");

// can define a style to an object to be passed into, saves a lot of work;
// multiple properties and/or keyvalue pairs
var styles = {
    backgroundColor: "pink",
    fontWeight: "bold",
    border: "3px dashed red",
    fontSize: "35px"
};

$("#special").css(styles)

// with jQuery, we don't have to use a loop if we wanted to edit all the li
$("li").css("color", "green");

// Note!: CSS font-size, but in JS and jQuery it's camelCase fontSize.


$("#third").css("border", "2px solid orange");
$("div").css("backgroundColor", "purple");
// select all div with class divss
$("div.divss").css("width", "200px");
// this works but I forgot there was... first-of-type
// $("div:nth-of-type(1)").css("backgroundColor", "lime");
$("div:first-of-type").css("color", "lime");
// however... jQuery has a built in shorter version, but it takes longer
// to load since it's not built in css 
// $("div:first").css("color", "lime");