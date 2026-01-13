let taskinput = document.getElementById("taskinput");
console.log(taskinput);
let addbtn = document.querySelector("#addbtn");
console.log(addbtn);
let list = document.getElementById("list");
console.log(list);

addbtn.addEventListener("click", function () {
  task.push(taskinput.value);
  console.log(task);
});

taskinput.addEventListener("keypress", function (e) {
  if (e.key === enter) {
    addtask();
  }
});

let task = [];
