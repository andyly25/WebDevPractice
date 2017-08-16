var answer = prompt("Are we there yet?");

// simple exercise with an infinite loop until condition is met.
// while(answer !== "yes" && answer !== "yeah" ){
//     var answer = prompt("Are we there yet?");
// }

// alert("Yay, now I'll be quiet");


// Here we encounter the loop until we encounter any form of "yes" within 
// your answer. We use indexOf to do this and -1 is if the answer is not found.
while(answer.indexOf("yes") === -1){
    var answer = prompt("Are we there yet?");
}

alert("Yay, now I'll be quiet");