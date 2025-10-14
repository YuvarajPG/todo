const submit = document.getElementById("submit");
const addTask = document.getElementById("addTask");
const todoList = document.getElementById("todoList");

submit.addEventListener("click", (event) => {
  let li = document.createElement("li");
  let btn = document.createElement('button');
  if (`${addTask.value}` !== "") {
    btn.appendChild(li)
    todoList.appendChild(btn);
    li.innerText = `${addTask.value}`;
    li.className = "li";
    todoList.appendChild(li);
  } else {
    alert("enter a vaild value");
  }
  addTask.value = "";
});



document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Optional: Load theme preference from local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Optional: Save theme preference to local storage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
