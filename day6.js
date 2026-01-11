// localStorage

// local storage is a browser memory it stores data as key value pair. Data stays even after browser refresh or close ;

localStorage.setItem("name", "Ved");

let name = localStorage.getItem("name");

console.log(name);

// localStorage.removeItem("name");

// let name = localStorage.getItem("name");

// console.log(name);

localStorage.clear();

let skills = ["html", "css", "js"];

console.log(JSON.stringify(skills));

localStorage.setItem("skills", JSON.stringify(skills));
// localStorage.setItem("skills" , "html0css1js");

let data = JSON.parse(localStorage.getItem("skills"));

console.log(data);

let button = document.getElementsByClassName("btn");

button[0].addEventListener("click", function () {
  alert("Clicked");
});

button[1].addEventListener("dblclick", function () {
  alert("Double Clicked");
});

let container = document.getElementsByClassName("container");

container[0].addEventListener("mouseover", () => {
  container[0].style.background = "green";
});

container[0].addEventListener("mouseout", () => {
  container[0].style.background = "black";
});

// mousedown
// mouseup

// keydown       ,(e)
// keyup

let input = document.querySelector(".input");

input.addEventListener("input", () => {
  console.log(input.value);
});

// task 1 : try out different triggers in addEventListener
