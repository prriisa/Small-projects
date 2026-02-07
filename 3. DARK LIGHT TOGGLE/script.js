let toggle = document.querySelector("#toggleBtn");

function setDarkOrLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");

    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");

    };
};

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
    document.body.classList.remove(savedTheme === "dark" ? "light" : "dark");
} else {
    setDarkOrLight();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    setDarkOrLight();

});

toggle.addEventListener('click', function () {
    if (document.body.classList.contains('light')) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme" , "dark");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme" , "light");
    };
});

