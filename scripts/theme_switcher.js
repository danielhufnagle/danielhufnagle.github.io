// theme switcher using button

var curr_theme = localStorage.getItem("theme"); // localStorage allows me to set "variables" that persist across multiple pages
// curr_theme has two settings "dark" and "light", which correspond to css classes that set color variables in styles.css

var theme_button = document.getElementById("theme");

if (curr_theme != "dark") {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
    theme_button.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    theme_button.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

function theme_switch() {
    if (localStorage.getItem("theme") != "dark") {
        localStorage.setItem("theme", "dark");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        theme_button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    else {
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        theme_button.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}
