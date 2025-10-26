// Task 0
const studentName = "Aika";
const group = "MT-2401";
alert("Hello, JavaScript World!");
console.log(`Name: ${studentName}, Group: ${group}`);
document.getElementById("userIntro").textContent =
  `Welcome ${studentName} from group ${group}.`;

// Task 1
let name1 = "Aika";
let age = 20;
let isStudent = true;

let num1 = 15;
let num2 = 4;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

let intro = "My name is " + name1 + ".";
let details = " I am " + age + " years old and student status is " + isStudent + ".";

console.log("=== Task 1 ===");
console.log("Name:", name1);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log(intro + details);

// Task 2
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("motivationText").textContent =
    "Believe you can and you're halfway there";
});

// Task 3
const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");
const changeFontBtn = document.getElementById("changeFontBtn");

let isOriginalColor = true;
let isOriginalFont = true;

changeColorBtn.addEventListener("click", () => {
  if (isOriginalColor) {
    colorBox.style.background = "#8b6f47";
    colorBox.style.color = "#fff";
  } else {
    colorBox.style.background = "#c7a26c";
    colorBox.style.color = "#0e0e11";
  }
  isOriginalColor = !isOriginalColor;
});

changeFontBtn.addEventListener("click", () => {
  colorBox.style.fontSize = isOriginalFont ? "22px" : "18px";
  isOriginalFont = !isOriginalFont;
});

// Task 4
const itemList = document.getElementById("itemList");
document.getElementById("addItemBtn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Note " + (itemList.children.length + 1);
  itemList.appendChild(li);
});
document.getElementById("removeItemBtn").addEventListener("click", () => {
  if (itemList.lastChild) itemList.removeChild(itemList.lastChild);
});

// Task 5
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "#b08c3e";
  hoverBox.style.color = "white";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "#222";
  hoverBox.style.color = "var(--text-muted)";
});

// Task 6
const input = document.getElementById("liveInput");
const display = document.getElementById("displayText");
input.addEventListener("keyup", () => {
  display.textContent = input.value;
});

// Task 7
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("errorMsg");

  if (!name || !email || !pass) {
    error.textContent = "Please fill all fields.";
  } else {
    error.textContent = "";
    alert(`Welcome, ${name}! Registration successful.`);
    form.reset();
  }
});

// Task 8
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "×";
  del.addEventListener("click", () => li.remove());

  li.addEventListener("click", () => li.classList.toggle("completed"));

  li.appendChild(del);
  taskList.appendChild(li);
  taskInput.value = "";
});
