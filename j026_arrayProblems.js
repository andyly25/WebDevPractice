
// Recall that push adds to end and pop removes from end is what we usually use for Queues
// The opposite is shift and unshift. Weird naming but shift removes the front
// and unshifts add to the front
// Hmm the code I did below did not seem to work
// function printReverse(someArray){
//     for ( i = 0; i <= someArray.length-1; i++){
//         var popped = someArray.pop();
//         console.log(popped);
//     }
// }

function printReverse(someArray){
    var result = new Array;
    for(i = someArray.length-1; i >= 0; i--){
        console.log(someArray[i]);
        result.push(someArray[i]);
    }
    return result;
}

// goes through array and see if everything inside is the same
function isUniform(someArray){
    var first = someArray[0];
    for( i = 1; i <= someArray.length -1; i++){
        console.log("first " + first + " and second " + someArray[i])
        if(first !== someArray[i]){
            return false;
        }
        first = someArray[i]
    }
    return true;
}

// add the sum of array content
function sumArray(someArray){
    var sum = 0;
    // for( i = 0; i <= someArray.length-1; i++){
    //     sum += someArray[i];
    // }
    // can also do:
    someArray.forEach(function(element){
        sum += element;
    });
    return sum;
}

// find the maximum number in array. Assumption array should be numbers
function max(someArray){
    max = 0;
    for(i=0; i < someArray.length; i++){
        if(max < someArray[i]){
            max = someArray[i];
        }
    }
    return max;
}