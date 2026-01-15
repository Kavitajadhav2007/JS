let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks when page opens
showTasks();

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  showTasks();
}

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerText = tasks[i];

    let btn = document.createElement("button");
    btn.innerText = "❌";
    btn.onclick = function () {
      deleteTask(i);
    };

    li.appendChild(btn);
    list.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}
