const btn = document.getElementById("Btn");
const content = document.getElementById("content");

btn.addEventListener("click", function () {
  if (content.style.display === "none") {
    content.style.display = "block";
    btn.textContent = "Hide";
  } else {
    content.style.display = "none";
    btn.textContent = "Show";
  }
});
