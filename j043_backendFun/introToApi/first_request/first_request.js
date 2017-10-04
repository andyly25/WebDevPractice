// Here we shall use a simple API called request
// Their site is at: https://github.com/request/request
// to run, type out node first_request.js

var request = require("request");

console.log('Sunset in Hawaii is at... ')
// Note: %20 is how you encode a space in urls
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
    // Now we need to check if there's an error
    if(!error && response.statusCode == 200){
        // if you do typeof body, you can see that body is a string, not object
        var parsedData = JSON.parse(body)
        // we look at the parsed data then keep going througg it to get data you want
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    } 
});