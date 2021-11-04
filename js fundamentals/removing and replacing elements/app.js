// Replace element

// Create an element
const newHeading = document.createElement("h2");
// Add if
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);
