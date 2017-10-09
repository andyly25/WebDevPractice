var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    // here we grab the value searched from home page
    var query = req.query.searched;
    // better to keep url inside a var to save space and look nicer
    // forgot the instructor didnt need API key back then
    var apiKey = "&apikey=thewdb"
    // here we form the basic url that the api uses to grab things we need
    var url = "http://omdbapi.com/?s=" + query + apiKey
    // basic request format we should try remember
    request(url, function(error, response, body){
        // if everything works daijoubu
        if(!error && response.statusCode == 200){
            // The JSON.parse(body) is necessary to make a JS object that we can use
            var data = JSON.parse(body)
            // Then we can narrow our search down
            // res.send(data["Search"][0]);
            res.render("results", {data: data})
        }
    });
});

// A simple one I found you can try using online, although the IP address depends
// app.listen(process.PORT || 3000, process.env.IP || '192.168.178.1', function(){
//     console.log('Movie App started on localhost:3000');
// })
// Simple cookie cutter, decided to google and this works
app.listen(process.PORT || 3000, process.env.IP, function(){
    console.log('Movie App started on localhost:3000');
})