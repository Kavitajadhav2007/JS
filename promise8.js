fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // converts the response to json
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error", error);
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    let list = document.getElementById("users");
    let mail = document.getElementsByClassName("email");
    list.style.listStyleType = "none";

    users.forEach((user) => {
      let li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      list.appendChild(li);
    });
  });
