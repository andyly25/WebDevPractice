// When we have a lot of require vars, we can group them up like this
var express         = require("express"), 
    app             = express(),
    bodyParser      = require("body-parser"), 
    mongoose        = require("mongoose"); // this will help manage our db

// we connected to a Yelpcamp DB
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
// we'll use this a lot so memorize or copy/paste
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// compiling schema into a model and turn into a code we can use with methods
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//        name: "Granite Hill", 
//         image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//         description: "Huge granite hill, no bathrooms. No water. Beautiful"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Newly cfreated campground: ');
//             console.log(campground);
//         }
//     });

// // moving it out for now, later will be from database
// var campgrounds = [
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
// ];

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX route - show all our campgrounds
app.get("/campgrounds", function(req, res){
    // get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            // this time we use the allCampgrounds passed in 
            res.render("index", {campgrounds: allCampgrounds});
        }
    });

    // remember when passing in vars that the name on left is what we give to call in other pages.
    // You can name whatever, so don't get confused
    // res.render("campgrounds", {campgrounds: campgrounds});
});

// CREATE Route: add new campground to DB
// Named similarly following the REST convention:
// When we have a route for a new campground should have same name, but as post req
app.post("/campgrounds", function(req, res){
    // get data from forms and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    // name and image data will come from form
    var newCampground = {name: name, image: image, description: desc}

    // We don't need this line anymore
    // campgrounds.push(newCampground)

    // create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            // redirect back to campgrounds page
            // NOTE: a redirect is defaulted to get request not the post we have here
            res.redirect("/campgrounds")
        }
    });
});

// NEW route: show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
});

// SHOW route: shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // find campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else{
            // render show template with campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.PORT || 3000, process.env.IP, function(){
    console.log('YelpCamp started on localhost:3000');
});