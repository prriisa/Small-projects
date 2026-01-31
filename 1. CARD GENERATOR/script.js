let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let container = document.querySelector(".container");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let oldCard = container.querySelector("#card");
    if (oldCard) {
        oldCard.remove();
    }

    let card = document.createElement("div");
    card.setAttribute("id", "card");

    let profile = document.createElement("div");
    profile.setAttribute("class", "profile");

    let img = document.createElement("img");
    img.setAttribute("class", "details");
    img.setAttribute("src", inputs[0].value);

    let h2 = document.createElement("h2");
    h2.setAttribute("class", "details");
    h2.textContent = inputs[1].value;

    let h2age = document.createElement("h2");
    h2age.setAttribute("class", "details");
    h2age.textContent = inputs[2].value;

    let h3 = document.createElement("h3");
    h3.setAttribute("class", "details");
    h3.textContent = inputs[3].value;

    let p = document.createElement("p");
    p.setAttribute("class", "details");
    p.textContent = inputs[4].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h2age);
    card.appendChild(h3);
    card.appendChild(p);
    container.appendChild(card);

    inputs.forEach(function (input) {
        if (input.type !== "submit") {
            input.value = "";
        }
    });
});