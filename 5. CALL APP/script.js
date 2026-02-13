// ALL VARIABLES AND DOC SELECTION

let container1 = document.querySelector("#container1");
let container2 = document.querySelector("#container2");
let leftIcons = document.querySelectorAll(".icon");
let close = document.querySelectorAll(".c2-button")[1];
let form = document.querySelector(".c2-data");

let inpLink = document.querySelectorAll("input")[0];
let inpName = document.querySelectorAll("input")[1];
let inpTown = document.querySelectorAll("input")[2];
let inpPurpose = document.querySelectorAll("input")[3];

let category = document.querySelectorAll("input[name='category']");

let createButton = document.querySelectorAll(".c2-button")[0];


// CODE STARTS FROM HERE ONWARDS


leftIcons[0].addEventListener("click", function (dets) {
    container1.style.display = "none";
    container2.style.display = "flex";
});

close.addEventListener("click", function () {
    container2.style.display = "none";
    container1.style.display = "flex";
});

// function to add data to local storage

function addToLocalStorage(obj) {
    let oldTasks;
    if (localStorage.getItem("tasks") === null) {
        oldTasks = [];
    } else {
        oldTasks = JSON.parse(localStorage.getItem("tasks"));
    };
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
};

// code for values validation

function makeValidation() {
    form.addEventListener("submit", function (dets) {
        dets.preventDefault();

        let urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/\S*)?$/;
        let namePattern = /^[A-Za-z\s]{3,}$/;
        let townPattern = /^[A-Za-z\s\.\-]{2,}$/;

        let selected = false;
        category.forEach(function (dets) {
            if (dets.checked) {
                selected = dets.value;
            };
        });

        if (!urlPattern.test(inpLink.value)) {
            alert("Please enter a valid URL");
            return;
        };

        if (!namePattern.test(inpName.value)) {
            alert("Please enter a valid NAME");
            return;
        };

        if (!townPattern.test(inpTown.value)) {
            alert("Please enter a valid HOME TOWN");
            return;
        };

        if (!selected) {
            alert("Please select a Category");
            return;
        };

        addToLocalStorage({
            "link": inpLink.value,
            "name": inpName.value,
            "town": inpTown.value,
            "purpose": inpPurpose.value,
            "category": selected
        });

        form.reset();
        alert("Note Created Successfully ✅");
        location.reload();
    });
};

makeValidation();

//==== CARD CREATION ====

let data = JSON.parse(localStorage.getItem("tasks")) || [];


data.forEach(function (val) {

    // Main container
    let c1Data = document.createElement("div");
    c1Data.className = "c1-data";
    c1Data.style.display = "none";
    c1Data.setAttribute("data-category", val.category);


    // ===== DETAIL SECTION =====
    let detail = document.createElement("div");
    detail.className = "detail";

    let img = document.createElement("img");
    img.className = "dp";
    img.src = val.link;

    let Uname = document.createElement("h5");
    Uname.className = "name";
    Uname.textContent = val.name;

    detail.appendChild(img);
    detail.appendChild(Uname);

    // ===== INFO SECTION =====
    let info = document.createElement("div");
    info.className = "info";

    // HomeTown Section
    let hometownDiv = document.createElement("div");
    hometownDiv.className = "hometown";

    let homeLabel = document.createElement("p");
    homeLabel.className = "homeTown";
    homeLabel.textContent = "Home Town";

    let homeValue = document.createElement("p");
    homeValue.textContent = val.town;

    hometownDiv.appendChild(homeLabel);
    hometownDiv.appendChild(homeValue);

    // Purpose Section
    let bookingDiv = document.createElement("div");
    bookingDiv.className = "booking";

    let purposeLabel = document.createElement("p");
    purposeLabel.className = "purpose";
    purposeLabel.textContent = "Purpose";

    let purposeValue = document.createElement("p");
    purposeValue.textContent = val.purpose;

    bookingDiv.appendChild(purposeLabel);
    bookingDiv.appendChild(purposeValue);

    info.appendChild(hometownDiv);
    info.appendChild(bookingDiv);

    // ===== CONTACT SECTION =====
    let contact = document.createElement("div");
    contact.className = "contact";

    let callBtn = document.createElement("button");
    callBtn.className = "call";
    callBtn.innerHTML = `<i class="bx bx-phone"></i><h6>Call</h6>`;

    let messageBtn = document.createElement("button");
    messageBtn.className = "message";
    messageBtn.innerHTML = `<p>Message</p>`;

    contact.appendChild(callBtn);
    contact.appendChild(messageBtn);

    // ===== APPEND ALL =====
    c1Data.appendChild(detail);
    c1Data.appendChild(info);
    c1Data.appendChild(contact);

    document.querySelector("#c1-main").appendChild(c1Data);
});

// ==== ARROW DOWN EVENTLISTENER ====

leftIcons[2].addEventListener("click", function () {
    let allCards = document.querySelectorAll(".c1-data");
    let currentIndex = 0;

    for (let i = 0; i < allCards.length; i++) {
        if (allCards[i].style.display !== "none") {
            currentIndex = i;
        }
    }

    if (currentIndex < allCards.length - 1) {
        allCards.forEach(function (card, index) {
            if (index === currentIndex + 1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    } else {
        allCards.forEach(function (card, index) {
            if (index === 0) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});

//==== ARROW UP EVENT LISTENER ====

leftIcons[1].addEventListener("click", function () {
    let allCards = document.querySelectorAll(".c1-data");
    let currentIndex = 0;

    for (let i = 0; i < allCards.length; i++) {
        if (allCards[i].style.display !== "none") {
            currentIndex = i;
        }
    }

    if (currentIndex > 0) {
        allCards.forEach(function (card, index) {
            if (index === currentIndex - 1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    } else {
        allCards.forEach(function (card, index) {
            if (index === allCards.length - 1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});

