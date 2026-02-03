let form = document.getElementById("ContactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let FirstName = document.getElementById("Firstname");

  let LastName = document.getElementById("Lastname");

  let Email = document.getElementById("Email");

  let Phone = document.getElementById("Phone");

  if (
    FirstName.value === "" ||
    LastName.value === "" ||
    Email.value === "" ||
    Phone.value === ""
  ) {
    alert("Please fill all required fields ❗");
    return;
  }

  console.log("FirstName:", Firstname.value);
  console.log("LastName:", Lastname.value);
  console.log("Email:", Email.value);
  console.log("Phone:", Phone.value);
  console.log("Message:", Message.value);

  alert("Form submitted successfully ");

  form.reset();
});
