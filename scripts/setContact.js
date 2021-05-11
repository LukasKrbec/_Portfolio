document.querySelector('.menu-contact').click();

const messages = document.querySelectorAll('.form-msg-send')
for(let message of messages){
    message.style.visibility = "visible"
    // message.style.backgroundColor = "#00B333"

}
setTimeout(function(){
    for(let message of messages){
        message.style.transform = "translateY(200px)"
        message.style.opacity = "0"
        message.style.visibility = "hidden"
    }
}, 2000)