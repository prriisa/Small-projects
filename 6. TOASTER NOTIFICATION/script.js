let div = document.querySelector(".toasterContainer");
let button = document.querySelector("button");

function toasterCall() {
    return function () {
        let messageDiv = document.createElement("div");
        messageDiv.textContent = "This is a Toaster Notification";
        messageDiv.classList.add("toasterMessage");
        div.appendChild(messageDiv);
        setTimeout(() => {
            div.removeChild(messageDiv);
        }, 2000);

    }
}
fcn = toasterCall();

button.addEventListener("click", function(){
    fcn();
});
