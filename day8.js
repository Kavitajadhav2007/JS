// setTimeout(()=>
// {
//     console.log("Step 1");
//     setTimeout(()=> {
//         console.log("Step 2");

//     } , 1000)
// } , 1000)

// callback problem

// hard to read

// hard to debug

// promise
// A promise is an object that represents a value that will be available later

let promise = new Promise((resolve, reject) => {
  let internet = false;

  if (internet) {
    resolve("Data Received");
  } else {
    reject("No internet");
  }
});

console.log(promise);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

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

    users.forEach((user) => {
      let li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
    });
  });
