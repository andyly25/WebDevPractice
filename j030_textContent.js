// selecting the first <p> tag:
var tag = document.getElementsByTagName("li")[1];

// retrive the textContent
tag.textContent; 

// alter the textContent 
tag.textContent = "blah blah blah";

// Note: replacing content with textContent removes all tags of the replaced
// content so the strong tag I gave to example is gone now.


// Solving that problem is innerHTML which returns a string of all HTML 
// contained in given element
var tag = document.querySelector("p");
tag.innerHTML = "something <strong>APPLES</strong>"
