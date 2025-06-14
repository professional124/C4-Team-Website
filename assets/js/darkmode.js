document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-mode-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  });

  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
