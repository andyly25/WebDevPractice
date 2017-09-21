// goal, create file in terminal, then create a function called echo
// run the file using node

function echo (stringInput, num){
    for(var i = 0; i < num; i++){
        console.log(stringInput + ", " + (i+1));
    }
}


echo("Echo!!", 10);
echo("tater tots", 3);