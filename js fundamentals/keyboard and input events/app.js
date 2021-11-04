const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

// Clear input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// Key down
// taskInput.addEventListener("keydown", runEvent);

// Key up
// taskInput.addEventListener("keyup", runEvent);

// Key press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Paste
// taskInput.addEventListener("paste", runEvent);

// Input
// taskInput.addEventListener("input", runEvent);



function runEvent(e) {
  console.log(`Event type: ${e.type}`);

  console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}
