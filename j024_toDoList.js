var todos = ["Something was here"];
var input = prompt("What would you like to do?");

// put inside a loop so it'll continue forever until you type in "quit"
while(input !== "quit"){
    // instead of using if/if else/else, I'm using switch statements
    switch (input){
        // lists out our array
        case 'list':
            console.log(todos);
            break;
        // add something to the array
        case 'new':
            newTodo();
            break;
        default:
            console.log("Please enter 'list', 'new' or 'quit'");

    }
    // just to prompt for another user input
    var input = prompt("What would you like to do?");
}

console.log("Quitting the app now");

// made a separate function for new
function newTodo(){
    addNew = prompt("Enter a new todo");
    todos.push(addNew);
}