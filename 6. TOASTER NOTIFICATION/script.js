let button = document.querySelector("button");

function toasterCall() {
    return function (){

        let toasterNotification = document.querySelector(".toasterNotification");

        // show toaster
        toasterNotification.style.display = 'flex';

        // hide after 3 sec
        setTimeout(() => {
            toasterNotification.style.display = "none";
        }, 2000);
    }
}

let fcn = toasterCall();

button.addEventListener("click", function(){
    fcn();
});