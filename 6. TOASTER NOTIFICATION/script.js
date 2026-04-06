function toasterCall(config){
    return function(){
        
    }
}
let fcn = toasterCall({
    positionX:"left",
    positionY : "top",
    theme : "dark",
    duration : 3 ,
})

fcn("this is a Toaster Notification");
let toasterNotification = document.getElementsByClassName("toasterNotification");
let toasterFont = document.querySelector("h5");
