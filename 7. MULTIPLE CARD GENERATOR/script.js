let submitBtn = document.querySelector(".submit");
let inputs = document.querySelectorAll("input:not(.submit)");
let cards = document.querySelector(".cards");

let userArr = [
    {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQG3LNqvJad_fA/profile-displayphoto-shrink_800_800/B4DZbsw7QsGwAc-/0/1747728972213?e=1782950400&v=beta&t=LJGIlHyPtGSgR6CawQV8KrOirVlkpx3Dm9lXUhMYcY0",
        name: "Priya Sharma",
        email: "priyasharma45567@gmail.com",
        bio: "🚀 Passionate Web Developer in Making",
    },
    {
        url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        name: "Michael Anderson",
        email: "michael.anderson@example.com",
        bio: "Senior Software Engineer"
    },
    {
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        name: "Sophia Williams",
        email: "sophia.williams@example.com",
        bio: "UI/UX Designer"
    },
    {
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
        name: "David Johnson",
        email: "david.johnson@example.com",
        bio: "Data Scientist"
    },
    {
        url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        name: "Emma Brown",
        email: "emma.brown@example.com",
        bio: "Marketing Manager"
    },
    {
        url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
        name: "James Wilson",
        email: "james.wilson@example.com",
        bio: "Product Manager"
    }
];

function userCall() {

    cards.innerHTML = "";

    userArr.forEach(function (user) {
        let cardDiv = document.createElement("div");
        let photoDiv = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let email = document.createElement("h3");
        let bio = document.createElement("p");


        cardDiv.setAttribute("id", "card");
        photoDiv.setAttribute("class", "profile");


        img.setAttribute("src", user.url);
        name.textContent = user.name;
        email.textContent = user.email;
        bio.textContent = user.bio;


        cardDiv.appendChild(photoDiv);
        photoDiv.appendChild(img);
        cardDiv.appendChild(name);
        cardDiv.appendChild(email);
        cardDiv.appendChild(bio);
        cards.appendChild(cardDiv);
    })
}


userCall();


submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Please fill all fields");
            return;
        }
    }

    userArr.push({
        url: inputs[0].value,
        name: inputs[1].value,
        email: inputs[2].value,
        bio: inputs[3].value
    });

    userCall();

    inputs.forEach(function(input){
        input.value = '';
    })
});