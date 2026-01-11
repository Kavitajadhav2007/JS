const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    error.textContent = "Please fill in all fields!";
  } else {
    error.textContent = "";
    alert("Login Successful!");
  }
});

function togglePassword() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}
