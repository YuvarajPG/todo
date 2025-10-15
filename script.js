const submit = document.getElementById("submit");
const addTask = document.getElementById("addTask");
const todoList = document.getElementById("todoList");
const btn = document.createElement("button");
const complete = document.getElementById("completed");

complete.style.display = "none"; //default hidden
let length = 0;

submit.addEventListener("click", (event) => {
  if (`${addTask.value}` !== "") {
    btn.innerHTML += `<li "class='li'" onclick=deleteFun() id=${length++} >${
      addTask.value
    } </li>`;
    btn.className = "liBtn";
    todoList.appendChild(btn);
  } else {
    console.log("enter a vaild value");
  }
  addTask.value = "";
});

const deleteFun = (event) => {
  complete.appendChild(btn)
  console.log("object");
  complete.style.display = "block";
};

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
});
