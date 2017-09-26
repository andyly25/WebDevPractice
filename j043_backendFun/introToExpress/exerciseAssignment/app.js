/*
 * Exercise reviewing routing
 * 1. npm init and add express as dependency
 * 2. create app.js and then add 3 different routes
 */


// Remember to require and then the app is by convention
var express = require("express");
var app = express();

// Now define the routes
// The first is the default /, dont forget the function needs the request and response args
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignement!");
});

// certain sites for animals
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase(); 
    // My method was with the switch
    var speech = " "
    switch (animal) {
        case "pig":
            // statements_1
            speech = "oink";
            break;
        case "cow":
            speech = "moo";
            break;
        case "dog":
            speech = "woof";
            break;
        default:
            // statements_def
            speech = "What is " + animal + "?";
            break;
    }

    // Instructor's is by using an object
    // var sounds ={
    //     pig: "oink",
    //     cow: "moo",
    //     dog: "woof",
    //     sloth: "..."
    // }
    // var speech = sounds[animal];


    res.send("The " + animal + " says " + speech);
});

// repeating words, probably a better way to do this
app.get("/repeat/:repeated/:num", function(req, res){
    var wordRep = req.params.repeated;
    // I didn't add in the Number earlier, but it makes sense I should
    var nums = Number(req.params.num);
    var result = ""
    for( var i = 0; i< nums; i++){
        result = result + " " + wordRep;
    }
    res.send(result);
});

// if visit any other routes
app.get("*", function(req, res){
    res.send("Sorry page not found... what are you doing with your life?")
});

// now to set up where the site will appear
app.listen(3000, process.env.IP, function(){
    console.log("Server starting on localhost:3000");
})

