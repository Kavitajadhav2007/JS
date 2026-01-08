let heading = document.getElementById("title");
console.log(heading);

heading.textContent = "Welcome to DOM";

let button = document.querySelector("#btn");
console.log(button);

button.addEventListener("click", function () {
  alert("button clicked");
  heading.textContent = "This is DOM";
});

let para = document.querySelectorAll(".text");
console.log(para[1]);

para.textContent = "Heyy This is kavita";

button.addEventListener("click", function () {
  document.body.style.color = "blue";
});
