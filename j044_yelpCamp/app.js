var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "River Grove", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
        {name: "Gazelle Peak", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
        {name: "Grass Valley", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}
    ]
    // remember when passing in vars that the name on left is what we give to call in other pages.
    // You can name whatever, so don't get confused
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.listen(process.PORT || 3000, process.env.IP, function(){
    console.log('YelpCamp started on localhost:3000');
});