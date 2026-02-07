let toggle = document.querySelector("#toggleBtn");
let span = document.querySelector("span");

function setDarkOrLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        span.innerHTML = "DARK";

    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        span.innerHTML = "LIGHT";
    };
};

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
    if(savedTheme = "dark"){
        document.body.classList.remove("light");
        span.innerHTML = "DARK";

    }else{
        document.body.classList.remove("dark");
        span.innerHTML = "LIGHT";
    }
} else {
    setDarkOrLight();
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    setDarkOrLight();

});

toggle.addEventListener('click', function () {
    if (document.body.classList.contains('light')) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme" , "dark");
        span.innerHTML = "DARK";

    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme" , "light");
        span.innerHTML = "LIGHT";
    };
});