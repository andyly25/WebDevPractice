var todos = ["Something was here"];
var input = prompt("What would you like to do?");

// put inside a loop so it'll continue forever until you type in "quit"
while(input !== "quit"){
    // instead of using if/if else/else, I'm using switch statements
    switch (input){
        // lists out our array
        case 'list':
            listTodo();
            break;
        // add something to the array
        case 'new':
            newTodo();
            break;
        // delete a todo with index provided
        case 'delete':
            deleteTodo();
            break;


        default:
            console.log("Please enter 'list', 'new' or 'quit'");

    }
    // just to prompt for another user input
    var input = prompt("What would you like to do?");
}

console.log("Quitting the app now");

// list out all the todos
function listTodo(){
    console.log("*************");
    todos.forEach(function(todo, index){
        console.log(index + ": " +todo);
    });
    console.log("*************");
}

// made a separate function for new
function newTodo(){
    addNew = prompt("Enter a new todo");
    todos.push(addNew);
}

// delete todos
function deleteTodo(){
    // ask for index of todo item to be deleted
    var index = prompt("Enter index to be deleted:");
    // remove that todo using splice
    // splice takes index pos, then how many elements to be deleted
    console.log(todos[index] + " item deleted!")
    todos.splice(index,1);
}