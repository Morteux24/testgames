const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        themeToggle.textContent = "☀️";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        themeToggle.textContent = "🌙";
    }
});
