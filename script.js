let submit = document.getElementById("submit");
let addTask = document.getElementById("addTask");
let todoList = document.getElementById("todoList");

submit.addEventListener("click", (event) => {
    let li = document.createElement('li'); 
    li.innerText = `${addTask.value}`
    todoList.appendChild(li)
});
