let form = document.querySelector("form");
let email = document.querySelector('#email');
let password = document.querySelector("#password");
let validate = document.querySelector("#validate");
let error = document.querySelectorAll(".error");
let remark = document.querySelector(".remark");

form.addEventListener("submit" , function(dets){

    dets.preventDefault();

    error[0].style.display = "none";
    error[1].style.display = "none";
    remark.style.display = "none";


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
        error[0].style.display = "initial";
    }

    if(!passwordans){
        error[1].style.display = "initial";
    }

    else{
        remark.style.display = "initial";
    };

});