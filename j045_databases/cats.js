var mongoose = require("mongoose");
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
var Cat = mongoose.model("Cat", catSchema)

// now we can do stuff with the Cat object

// Adding a new cat to db

// retrieve all cats from he db and console. Log each one