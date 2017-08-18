var colors = ["red", "orange", "purple", "pink"];

// this is the normal for loop
for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// color is a placeholder, similar to pythons: e.g. for item in items:
// Here we use forEach which provides easy built in way iterate arrays
// nice since don't need to work with the syntax or call array[i] 
colors.forEach(function(color)){
    console.log(color);
}