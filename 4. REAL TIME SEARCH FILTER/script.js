let user = [
    {
        name: "Aanya",
        url: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?q=80&w=508&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Creative soul who loves art, coffee, and calm mornings.",
    },
    {
        name: "Rahul",
        url: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Creative thinker passionate about design, code, and ideas.",
    },
    {
        name: "Aarav",
        url: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Curious developer building cool stuff and learning daily.",
    },
    {
        name: "Ritika",
        url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Curious heart with interest in writing, books, and growth.",
    },
    {
        name: "Anika",
        url: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Creative mind exploring photography, travel, and stories.",
    },
    {
        name: "Rohan",
        url: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Curious learner who enjoys coding, late nights, and music.",
    }

];

function showUsers(arr) {
    arr.forEach(function (user) {
        let box = document.createElement("div");
        box.classList.add("box");

        let dp = document.createElement("img");
        dp.classList.add("dp");
        dp.src = user.url;

        let content = document.createElement("div");
        content.setAttribute("class", "content");

        let name = document.createElement("h6");
        name.setAttribute("class", "name");
        name.textContent = user.name;

        let bio = document.createElement("p");
        bio.setAttribute("class", "bio");
        bio.textContent = user.bio;

        content.appendChild(name);
        content.appendChild(bio);

        box.appendChild(dp);
        box.appendChild(content);

        let entries = document.querySelector("#entries");
        entries.appendChild(box);

    });
};

showUsers(user);

let inp = document.querySelector("input");

inp.addEventListener("input", function () {
    let value = inp.value.toLowerCase();

    let boxes = document.querySelectorAll(".box");
    let visibleDiv = 0;

    boxes.forEach(function (box) {
        let names = box.querySelector(".name").textContent.toLowerCase();
        if (names.startsWith(value)) {
            box.style.display = "initial";
            visibleDiv++;
        } else {
            box.style.display = "none";
        };
    });

    let oldNote = document.querySelector(".note");
    if (oldNote) {
        oldNote.remove();
    };


    if (visibleDiv === 0 && value !== "") {
        let note = document.createElement("h4");
        note.classList.add('note');
        entries.appendChild(note);
        note.textContent = `No User Found Starting From ${value}`;
    };

});
