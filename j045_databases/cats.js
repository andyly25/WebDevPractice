
// remember to require mongoose to use it
// mongoose is an (ODM) object data mapper, a way for our JS to interact with the DB
var mongoose = require("mongoose");
/*
 * Here another error appears
 * (node:1521) DeprecationWarning: Mongoose: mpromise 
 * (mongoose's default promise library) is deprecated, plug in your own promise
 * library instead: http://mongoosejs.com/docs/promises.html
 * adding the code below removes this warning
 */
mongoose.Promise = global.Promise;

// Here is how we connect to our db and if db doesn't exist, it will create one
/* 
 * This problem will occur so add in the useMongoClient at the end
 * (node:1222) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, 
 * use `openUri()` instead, or set the `useMongoClient` option if using 
 * `connect()` or `createConnection()`. 
 * See http://mongoosejs.com/docs/connections.html#use-mongo-client
 */
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

// this is how we define a schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// took the cat schema whcih is just a pattern and compiled into a model and 
// save into a variable
// now we can do stuff with the Cat object
var Cat = mongoose.model("Cat", catSchema)

// // Adding a new cat to db
// var bob = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "evil"
// });

// // if internet is down or some other errors, it might not save
// // so we add in a callback function for potential errors
// // we'll add a callback function for pretty much all mongoose methods: find, remove, create etc
// bob.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong: " + err);
//     }else {
//         console.log("cat saved to the db!");
//         console.log(cat);
//     }
// });

// we can put all the commented out code in here
// This will create the cat when the code runs
Cat.create({
    name: "Snow",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }else {
        console.log(cat);
    }
});

// retrieve all cats from he db and console. Log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Error: " + err);
    }else {
        console.log('All the cats...');
        console.log(cats);
    }
})