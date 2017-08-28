// NOTE: this was a code along on the actual website, so I'll take notes on
// what was used here.

// Let's manipulate the logo
// var logo = document.querySelector("#hplogo");
// logo.setAttribute("src", "UnsplashPhotos/a2.jpg");

// NOTE! Above does not work anymore!
// now you have to use srcset to do so
var logo = document.getElementByID('hplogo');
logo.srcset = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g";

// or you can do by:
logo.setAttribute("srcset", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g");

// Now you can just use style to manipulate how you want to look on the site
logo.style.height = "100px";
logo.style.width = "200px";
logo.style.border = "2px dashed blue";

// let's manipulate all of the anchor tags
var links = document.getElementsByTagName("a");
// setAttribute only exists for individual elements so you have to loop through
for(var i = 0; i<links.length; i++){
    // console.log(links[i].textContent);
    links[i].style.background = "pink";
    links[i].style.border = "1px dashed green";
    links[i].style.color = "red";
    //Just to see which links we're working with
    // console.log(links[i].getAttribute("href"));
    // now let's redirect all links to bing!
    links[i].setAttribute("href", "https://www.bing.com"); 
}