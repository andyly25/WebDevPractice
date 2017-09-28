var express = require("express");
var app = express();

// tells express to serve the contents of the public directory
app.use(express.static("public"));
// If you want express to assume all views are ejs files(we can drop .ejs at end of filenames)
app.set("view engine", "ejs");

app.get("/", function(req, res){
    // ejs is for embedded javascript. We don't want to use plain html if we 
    // want to make a dynamic page
    // don't forget to npm install ejs --save
    res.render("homepage");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing);
    res.render("love", {thingVar: thing});
});

// creating a posts page that passes objects
app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "Bob"},
        {title: "post 2", author: "Bobby"},
        {title: "post 3", author: "Bobobo"}
    ];
    res.render("posts", {posts: posts});
});

// starts server
app.listen(3000, process.env.IP, function(){
    console.log("Server has started in localhost:3000");
});