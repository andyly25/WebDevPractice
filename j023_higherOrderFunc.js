function sing(){
    console.log("Twinkle twinkle... ");
    console.log("How I wonder...");
}

// setInterval is a higher order function where we can pass another function
// to it as an argument.

// setInterval(sing, 1000)

// Can also do something like this if func not defined yet
setInterval(function(){
    console.log("Something something \n yay!");
}, 2000);

// you can use clearInterval(someNumber) to stop it repeating 