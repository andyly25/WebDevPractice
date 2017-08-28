// Using getAttribute() and setAttribute() to read and write attributes 
// like src or href


// This is how you change a link
var link = document.querySelector("a");
link.getAttribute("href"); //this is www.google.com
// Now we change the HREF attribute
// note: if you do not include the http:// it will use the file path 
link.setAttribute("href", "http://www.unsplash.com");


// NOw here we can try to change image src:
var img = document.querySelector("img");
img.setAttribute("src", "UnsplashPhotos/a2.jpg")