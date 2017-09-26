var express = require("express");

// by convention the var will be app
var app = express();

/*
    "/" => "hi there!"
    simple route structure
    / usually means root
    and most used are get and post
    req and res is request and response and both are objects
    request is an object that contains all the info about request made when triggering the route
    response contain all info for what we respond with
*/
app.get("/", function(req, res){
    res.send("Hi there!");
});

// Here's another route for testing
app.get("/bye", function(req, res){
    res.send("Bye bye, Sayonara, adieu, zai jian");
});

app.get("/dog", function(req, res){
    console.log('Someone made a request to /dog')
    res.send("Mewoof");
});

// here's usage of route parameters
app.get("/r/:subRedditName", function(req, res){
    // Here we access the variable request object stored
    console.log(req.params);
    var subreddit = req.params.subRedditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

// you put the : in front of any we want to be a variable
app.get("/r/:subRedditName/comments/:id/:title/", function(req, res){
    // here we can access those variables through the req (request)
    // console.log(req.params);
    var subreddit = req.params.subRedditName;
    res.send("welcome to the" + subreddit.toUpperCase() + "page");
});

// * route example
// this will occur when there are any get requests that are not any of the 3 above
// NOTE! Order of routes matter, if you place this at beginning then this will always appear
app.get("*", function(req, res){
    res.send("You are a star!!");
});

// Tell express to listen for requests (start server)
// this will be cookie cutter lines used at bottom of a lot of apps
// you can add a callback function at the end to have a useful console text
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server has started!!")
// });

// since im not using cloud9 like the instructor and using my own terminal, here's another version
app.listen(3000, process.env.IP, function(){
    console.log("server has started!!")
});