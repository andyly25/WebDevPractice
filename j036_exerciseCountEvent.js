// Goal: count how many events are within this website 
// https://web.archive.org/web/20151105221640/https://developer.mozilla.org/en-US/docs/Web/Events

/*
 * My thoughts: each event is the first element in each tr
 * so probably try looping through all the tr and incrementing counter
 * from all elements in the tbody, not thead
 * 
 */

var eventItem = document.querySelectorAll("table.standard-table tbody tr");
var counter = 0;


for(var i = 0; i < eventItem.length; i++){
    console.log(eventItem[i]);
    counter++;
}

console.log(counter);


// Instructor's solution was, but website changed a lot so this isn't as accurate:
document.querySelectorAll("tr").length - document.querySelectorAll("table").length;


// solution I saw on forum that seems to work is:
var trs = document.querySelectorAll(".standard-table tbody tr td:first-of-type");
var count = 0;

for(var i = 0; i < trs.length; i++){
    count++;
}

