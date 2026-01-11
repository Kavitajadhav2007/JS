// on click show text or hide text
let button = document.querySelector(".btn");

console.log(button);

let Para = document.querySelector(".text");

button.addEventListener("click", function () {
  // document.style X
  if (Para.style.display === "none") {
    Para.style.display = "block";
  } else {
    Para.style.display = "none";
  }
});

// btn "show" if hidden

// "hide" if shown

let Name = document.getElementById("Name");
let Email = document.getElementById("Email");

let Form = document.getElementById("myForm");

// Form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (Name.value === "") {
//     alert("Name is required");

//     if (2 == 2) {
//       console.log("2 is equal");
//     }
//   } else if (Email.value === "") {
//     alert("Email is required");
//   } else {
//     alert("Form Submitted");
//   }

//   console.log(Name.value);
//   console.log(Email.value);
//   console.log("Form Submittted");
// });

// validation

// without alert

let msg = document.querySelectorAll("#msg");
Form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (Name.value === "") {
    msg[0].textContent = "Name cannot be empty";
    msg[0].style.color = "red";
  } else if (Email.value === "") {
    msg[1].textContent = "Email cannot be empty";
    msg[1].style.color = "red";
  } else {
  }

  // revision

  console.log(Name.value);
  console.log(Email.value);
  console.log("Form Submittted");
});
