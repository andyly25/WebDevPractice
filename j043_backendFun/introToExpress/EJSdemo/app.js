var express = require("express");
var app = express();


app.get("/", function(req, res){
    // ejs is for embedded javascript. We don't want to use plain html if we 
    // want to make a dynamic page
    // don't forget to npm install ejs --save
    res.render("homepage.ejs");
})

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing);
    res.render("love.ejs", {thingVar: thing});
})

app.listen(3000, process.env.IP, function(){
    console.log("Server has started");
})