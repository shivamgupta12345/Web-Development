let todo = [];

function handleRequest() {
    let req = prompt("Please enter your request (list, add, delete, quit)");

    if (req === "quit") {
        console.log("Quitting app...");
        return;
    } else if (req === "list") {
        console.log("-------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("-------------");
    } else if (req === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } else if (req === "delete") {
        let index = prompt("Enter index of task to delete");
        todo.splice(index, 1);
        console.log("Task deleted");
    } else {
        console.log("Unknown command");
    }

    setTimeout(handleRequest, 0); // Allow the browser to breathe
}

handleRequest();
