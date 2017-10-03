// Here we shall use a simple API called request
// Their site is at: https://github.com/request/request
// to run, type out node first_request.js

var request = require("request");
request('http://www.google.com', function(error, response, body){
    // Now we need to check if there's an error
    if(error){
        console.log("Something went wrong!");
        console.log(error);
    } else{
        // Note: 200 stands for OK: if we got a successful response
        if(response.statusCode == 200){
            //Things worked!
            console.log(body)
        }
    }
});