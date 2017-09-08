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