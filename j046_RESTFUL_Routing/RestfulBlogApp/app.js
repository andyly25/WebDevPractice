
// Here is all of our requires we are using for this app
var bodyParser  = require("body-parser"),
methodOverride  = require("method-override"),
mongoose        = require("mongoose"),
express         = require("express"),
app             = express();

// some weird promise depreciation so use this to get rid of warnings
// on web people say it occurs when you try create docutments with an array subdocuments inside them
// e.g var data = {field: 'value', another_fld: [{subdocFld: 'val', subdocFld2: 'val'}]}
mongoose.Promise = global.Promise;

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", {useMongoClient: true});
app.set("view engine", "ejs");
// can serve custom style sheets
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// here is where we use method-override and the _method could be anything but by convention we use this
// Whenever we get a request that has _method as a parameter we take whatever it is equal to
// And then treat as a PUT or DELETE request for our case
app.use(methodOverride("_method"));

// MONGOOSE/MODEL CONFIG
// Will have title, image, body, created
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now} // we can specify date or use default
});

var Blog = mongoose.model("Blog", blogSchema);

// // Sample data 
// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1500835176302-48dbd01f6437?auto=format&fit=crop&w=989&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
//     body: "Hello this is a blog post"
// })

// RESTFUL ROUTES, cluttered, will split off into separate files later

app.get("/", function(req, res){
    res.redirect("/blogs");
})

// INDEX Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("Error");
        }else{
            // we want to render index with data
            // passing in data with our .find
            res.render("index", {blogs: blogs});
        }
    })
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
    // create blog
    // if we do req.body.blog it auto has title, image, body to be used
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            // instead of console log err, we'll render new form again
            res.render("new");
        }else{
            // Then, redirect to index
            res.redirect("/blogs");
        }
    })
})

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    // grab the blog from given id
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            // if can't find, then redirect back to the blog page
            res.redirect("/blogs");
        } else{
            // if found render the show page of the blog posting
            res.render("show", {blog: foundBlog});
        }
    })
});

// Edit Route
// Reminder: req = request: A question from client like "What is/on your server?"
// res = response: answer from server like "it's a text/html, ~2000 btyes, and here is the docs"
app.get("/blogs/:id/edit", function(req, res){
    // We have to use the id above to find the correct blog
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE Route: NOTE we use put instead of get if folly RESTFUL routing
app.put("/blogs/:id", function(req, res){
    // now we attempt to find the existing blog and update with new data
    // Blog.findByIdAndUpdate(id, newData, callback) // we use this
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            // and we then redirect to show page of specific blog
            res.redirect("/blogs/" + req.params.id);
        }
    })
})

// Starting on localhost 3000 site
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log('started on localhost:3000');
});