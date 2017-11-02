var bodyParser  = require("body-parser"),
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
    // if we do req.body.body it auto has title, image, body to be used
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
    res.send("SHOW PAGE");
});

// Starting on localhost 3000 site
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log('started on localhost:3000');
});