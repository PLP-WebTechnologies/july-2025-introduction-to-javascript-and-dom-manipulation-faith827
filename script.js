// ===== VARIABLES =====
let tasks = []; // array to store tasks
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearTasksBtn = document.getElementById("clearTasksBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// ===== CUSTOM FUNCTIONS =====

// 1. Function to add a task
function addTask() {
    let taskText = taskInput.value.trim(); // remove spaces

    // CONDITIONAL: check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Add task to array
    tasks.push(taskText);

    // Update the DOM
    updateTaskList();
    taskInput.value = ""; // clear input
}

// 2. Function to update the list in the DOM
function updateTaskList() {
    taskList.innerHTML = ""; // clear current list

    // LOOP EXAMPLE 1: For loop to create list items
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];
        taskList.appendChild(li);
    }

    // DOM interaction: updating text content
    taskCount.textContent = "Total tasks: " + tasks.length;
}

// 3. Function to clear all tasks
function clearTasks() {
    // LOOP EXAMPLE 2: While loop to empty array
    while (tasks.length > 0) {
        tasks.pop();
    }

    updateTaskList();
}

// ===== EVENT LISTENERS (DOM interactions) =====
addTaskBtn.addEventListener("click", addTask);          // DOM interaction 1
clearTasksBtn.addEventListener("click", clearTasks);    // DOM interaction 2
taskInput.addEventListener("keypress", function(e) {    // DOM interaction 3
    if (e.key === "Enter") {
        addTask();
    }
});
