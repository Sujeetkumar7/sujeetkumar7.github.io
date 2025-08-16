const btn = document.getElementById("theme-btn");
const body = document.body;

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  btn.textContent = "☀️ Light";
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙 Dark";
    localStorage.setItem("theme", "light");
  }
});
