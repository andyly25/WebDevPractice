var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("Home page");
})

app.get("/results", function(req, res){
    request("http://omdbapi.com/?s=california&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            // Then we can narrow our search down
            // res.send(data["Search"][0]);
            res.render("results", {data: data})
        }
    });
});

app.listen(3000, process.env.IP, function(){
    console.log('Movie App started on localhost:3000');
})