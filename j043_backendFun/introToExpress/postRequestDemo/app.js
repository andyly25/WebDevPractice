var express = require("express");
var app = express();

// being able to read the body of forms, we use this
var bodyParser = require("body-parser");
// now to use it, we use this line of code
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// we need to make visible to all others so we move this array out from /friends
var friends = ["Nathan", "Anh", "Caycee", "Cindy", "Joseph"]

app.get("/", function(req, res){
    res.render("home");
});

// create a page for friends 
app.get("/friends", function(req, res){
    res.render("friends", {friends: friends})
})

// Remember we use a post route if we want to send any data through
app.post("/addFriend", function(req, res){
    // All form requests are put into the form body
    // problem is, you need to turn the req.body into a js object so we use body parser
    // console.log(req.body.newFriend);
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    // so after finishing pass values, we redirect to the updated friends page
    res.redirect("/friends")
})

app.listen(3000, process.env.IP, function(){
    console.log("server started on localhost:3000!")
})