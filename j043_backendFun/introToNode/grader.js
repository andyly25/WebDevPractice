// another exercise to make a simple function

function average(arrTest){
    var sum = 0;
    for(var i = 0; i < arrTest.length; i++){
        sum += arrTest[i];
    }

    // Keep forgetting about the foreach way
    // arrTest.forEach(function(score){sum+=score;});

    avg = sum/arrTest.length;
    formattedNum = (avg).toFixed(2).replace(/[.,]00$/,"");

    // option 1
    // forgot that Math.round was used to round things
    // return Math.round(sum/arrTest.length);

    // option 2
    // if you waNt to round to 2 decimal places
    // return Math.round(avg*100)/100;

    // option 3
    // Here is if you want to also include 0 at end of things like 67.8 to make 67.80
    return formattedNum;

}

// should return 94 if use option 1
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));


// shouuld return 68 if use option 1
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));