var obj = {
    name: "chuck",
    age: 50,
    isAmazing: false,
    friends: ["bob", "bill"],
    add: function(x,y){
        return x + y;
    }
}

// to use add just do: obj.add(x, y) 

var comments = {};
comments.data = ["apple", "pear", "Bob"];

function print(arr){
    arr.forEach(function(el){
        console.log(el);
    });
}

// this can be ran with: print(comments.data);

// If I want to run it to become its own object
comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}

// can run with comments.print()