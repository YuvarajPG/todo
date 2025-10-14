let submit = document.getElementById("submit");
let addTask = document.getElementById("addTask");
let todoList = document.getElementById("todoList");

let length = 0;

submit.addEventListener("click", (event) => {
  let li = document.createElement("li");
  if (`${addTask.value}` == "") {
    li.innerText = `${addTask.value}`;
    li.className = 'li'
    li.setAttribute("contenteditable", "true");
    todoList.appendChild(li);
  } else {
    alert("enter a vaild value");
  }
  addTask.value = "";
});


