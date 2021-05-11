const menuSlide = function(){
    const menuLines = document.querySelector(".menu-lines")
    const menu = document.querySelector(".menu")
    
    window.addEventListener("click", function (){
        menu.classList.remove("menu-active")
    })
    menuLines.addEventListener("click", function (e){
        menu.classList.add("menu-active")
        e.stopPropagation()
    })
    menu.addEventListener("click", function (e){
        // e.stopPropagation()
    })    
}
const translate = function(){
    const cz = document.querySelector(".cz-switch")
    const en = document.querySelector(".en-switch")
    const cz_text = document.querySelectorAll("#cz")
    const en_text = document.querySelectorAll("#en")
    const contact_email = document.querySelector(".form-email")
    const contact_btn = document.querySelector(".form-btn")
    const contact_text = document.querySelector(".form-text")
    const contact_language = document.getElementsByName("contact-language")

    translateCz()

    function translateCz(){
        en.classList.remove("translate-active")
        cz.classList.add("translate-active")
        for(let section of en_text){
            section.style.display = "none"
        }
        for(let section of cz_text){
            section.style.display = "inline-block"
        }
        contact_email.placeholder = "vas@email.com"
        contact_text.placeholder = "vase zprava"
        contact_btn.value = "odeslat"
        contact_language[0].value = "cz"
    }
    function translateEn(){
        cz.classList.remove("translate-active")
        en.classList.add("translate-active")
        for(let section of cz_text){
            section.style.display = "none"
        }
        for(let section of en_text){
            section.style.display = "inline-block"
        }
        contact_email.placeholder = "your@email.com"
        contact_text.placeholder = "your message"
        contact_btn.value = "send"
        contact_language[0].value = "en"
    }
    cz.addEventListener("click", translateCz)
    en.addEventListener("click", translateEn)
}

function nav(){
    const menuItems = document.querySelectorAll("main")
    const menuLabels = document.querySelectorAll(".menu a")
    const about = document.querySelector(".menu-about")
    about.addEventListener("click", goToPage)
    const skills = document.querySelector(".menu-skills")
    skills.addEventListener("click", goToPage)
    const projects = document.querySelector(".menu-projects")
    projects.addEventListener("click", goToPage)
    const contact = document.querySelector(".menu-contact")
    contact.addEventListener("click", goToPage)

    function goToPage(){
        for(let menuLabel of menuLabels){
            menuLabel.classList.remove("active")
        }
        for(let menuItem of menuItems){
            menuItem.classList.add("passive")
            if(menuItem.id.trim() == this.className.substring(5).trim()){
                menuItem.classList.remove("passive")}
        }
        this.classList.add("active")
    }
}
function changeProject(){
    const redArrowLeft = document.querySelector(".left-arrow-conteiner")
    redArrowLeft.addEventListener("click", prevProject)
    const redArrowRight = document.querySelector(".right-arrow-conteiner")
    redArrowRight.addEventListener("click", nextProject)
    const blackArrowsRight = document.querySelectorAll(".project-name i")
    for(let blackArrowRight of blackArrowsRight){
        blackArrowRight.addEventListener("click", nextProject)
    }
    const projects = document.querySelectorAll(".project")
    const projectNumber = document.querySelector("#project-number")
    const projectsNumber = document.querySelector("#projects-number")
    projectsNumber.innerText = projects.length

    let counter = 0;
    function reset(){
        for (let project of projects){
            if(projects[counter] != project){
            project.style.transition = "none"
            project.classList.add("passive-project-left")
            project.classList.add("passive-project-right")
            }
        }
        projectNumber.innerText = counter+1
    }
    function resetRight(){
        for (let project of projects){
            if(projects[counter] != project){
            project.style.transition = "none"
            project.classList.add("passive-project-right")
            project.classList.remove("passive-project-left")
            }
        }
    }
    function resetLeft(){
        for (let project of projects){
            if(projects[counter] != project){
            project.style.transition = "none"
            project.classList.add("passive-project-left")
            project.classList.remove("passive-project-right")
            }
        }
    }
    function prevProject(){ 
        resetLeft()
        projects[counter].style.transition = "0.7s transform ease-in"
        projects[counter].classList.add("passive-project-right")
        counter--
        counter = counter<0?projects.length-1:counter       
        projects[counter].style.transition = "0.7s transform ease-in"
        projects[counter].classList.remove("passive-project-left")
        projectNumber.innerText = counter+1

    }
    function nextProject(){
        reset()
        resetRight()
        projects[counter].style.transition = "0.7s transform ease-in"
        projects[counter].classList.add("passive-project-left")
        counter++
        counter = counter==projects.length?0:counter
        
       
        projects[counter].style.transition = "0.7s transform ease-in"
        projects[counter].classList.remove("passive-project-right")
        projectNumber.innerText = counter+1

    }
    reset()
    prevProject()
    nextProject()
}
function skills(){
    function activateSkill(){
        for( let skill of skills){
            skill.classList.add("passive")
            if(skill.id == this.id){
                skill.classList.remove("passive")
            }
        }
    }
    const frontendBtn = document.querySelector(".btn-frontend")
    frontendBtn.addEventListener("click", activateSkill)
    const backendBtn = document.querySelector(".btn-backend")
    backendBtn.addEventListener("click", activateSkill)
    const othersBtn = document.querySelector(".btn-others")
    othersBtn.addEventListener("click", activateSkill)
    const skills = document.querySelectorAll(".skill")
    activateSkill()
    skills[0].classList.remove("passive")

}
function emailFormCheck(){
    const formBtn = document.querySelector(".form-btn")
    const formCheckBox = document.querySelector(".spam-check input")
    const formCheckBoxLabels = document.querySelectorAll(".spam-check label")
    const formEmail = document.querySelector(".form-email")
    const formText = document.querySelector(".form-text")
    formEmail.addEventListener("keydown", function (){
        formEmail.style.borderColor = "rgb(219, 218, 218)"
    })
    formText.addEventListener("keydown", function (){
        formText.style.borderColor = "rgb(219, 218, 218)"
    })
    formBtn.addEventListener("click", function(e){
        if(formEmail.value == "" || !ValidateEmail(formEmail)){
            formEmail.style.borderColor = "#ff0404"
            e.preventDefault()
        }
        if(formText.value == ""){
            formText.style.borderColor = "#ff0404"
            formText.style.borderColor = "#ff0404"
            e.preventDefault()
        }
        if(formCheckBox.checked == false){
            for(let formCheckBoxLabel of formCheckBoxLabels){
            formCheckBoxLabel.style.color = "#ff0404"
            }
            e.preventDefault()
        }
    })
    function ValidateEmail(inputText)
        {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputText.value.match(mailformat))
        {
        
        return true;
        }
        else
        {
        
        return false;
        }
        }
}
const notRobot = function() {
    const notRobotBoxs = document.querySelectorAll(".spam-check label")
    const checkbox = document.querySelector(".spam-check input")
    checkbox.addEventListener("click", checkBlack)
    function checkBlack(){
        if(checkbox.checked){
            for(let notRobotBox of notRobotBoxs){
                notRobotBox.style.color = "#504E4E"
            }
        }
    }
    for(let notRobotBox of notRobotBoxs){
        notRobotBox.addEventListener("click",spamCheck)
    }
    function spamCheck(){
        checkbox.checked = !checkbox.checked
        for(let notRobotBox of notRobotBoxs){
            notRobotBox.style.color = "#504E4E"
        }
    }
}



changeProject();
menuSlide();
translate();
nav();
skills();
notRobot();
emailFormCheck();