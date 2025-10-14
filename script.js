let submit = document.getElementById("submit");
let addTask = document.getElementById("addTask");
let todoList = document.getElementById("todoList");

submit.addEventListener("click", (event) => {
  let li = document.createElement("li");
  if (`${addTask.value}` !== "") {
    li.innerText = `${addTask.value}`;
    todoList.appendChild(li);
  } else {
    alert("enter a vaild value");
  }
  addTask.value = "";
});
