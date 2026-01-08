//  DOM

let heading = document.getElementById("title");
console.log(heading);

// let para = document.getElementsByClassName("text");
// console.log(para);

let h1 = document.querySelector("#title");
console.log(h1);

h1 = document.querySelectorAll("#title");
console.log(h1);

let p = document.querySelectorAll(".text");
console.log(p);

p = document.querySelector(".text");
console.log(p);

// querySelector

// querySelectorAll

// DOM manipulation

// let heading = document.querySelector("#title");

// console.log(heading);

heading.textContent = "Welcome to DOM";

heading.innerHTML = "<span> Hello </span>";

heading.style.color = "red";

heading.style.fontSize = "30px";

let para = document.querySelectorAll(".text");

console.log(para[1]);

para[1].textContent = " hello i am Developer";

para[2].innerHTML = "<a href=''> Github </a>";

let button = document.querySelector("#btn");

console.log(button);

button.addEventListener("click", function () {
  alert("button clicked");
  heading.textContent = "Welcome to DOM";
});

// task 1
// button click changes heading text

// task 2
// button click changes backgroud color

//task 3
// button click to hide/show text
