var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// moving it out for now, later will be from database
var campgrounds = [
    {name: "River Grove", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
    {name: "Gazelle Peak", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
    {name: "Grass Valley", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}
]

// we'll use this a lot so memorize or copy/paste
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

// show all our campgrounds
app.get("/campgrounds", function(req, res){
    
    // remember when passing in vars that the name on left is what we give to call in other pages.
    // You can name whatever, so don't get confused
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
});

// Named similarly following the REST convention:
// When we have a route for a new campground should have same name, but as post req
app.post("/campgrounds", function(req, res){
    // get data from forms and add to campgrounds array
    var name = req.body.name
    var image = req.body.image
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground)
    // redirect back to campgrounds page
    // NOTE: a redirect is defaulted to get request not the post we have here
    res.redirect("/campgrounds")
});


app.listen(process.PORT || 3000, process.env.IP, function(){
    console.log('YelpCamp started on localhost:3000');
});