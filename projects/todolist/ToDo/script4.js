let toDoList = document.createElement("div");
toDoList.className = "toDoList";
document.querySelector(".toDo").appendChild(toDoList);
let ukoly = document.createElement("div");
ukoly.className = "ukoly";
toDoList.appendChild(ukoly);
// zadavaci pole
let zadavaciOkno = document.createElement("div");
zadavaciOkno.className = "zadavac";
toDoList.appendChild(zadavaciOkno);

let textoveOkno = document.createElement("textarea");
textoveOkno.oninput= function(){
    this.style.height = "";
    this.style.height = this.scrollHeight + "px"}
textoveOkno.rows = "1"
textoveOkno.autofocus = true
textoveOkno.className = "textoveOkno"
zadavaciOkno.appendChild(textoveOkno)
textoveOkno.placeholder ="toDoList"


let buttons = document.createElement("div");
buttons.className = "tlacitka"
zadavaciOkno.appendChild(buttons)

let clear = document.createElement("button");
clear.className = "clear"
clear.innerText = "clear"
clear.onclick = function() {
    textoveOkno.value =""
    textoveOkno.focus()
}
buttons.appendChild(clear)

let ok = document.createElement("button");
ok.className = "ok"
ok.innerText = "ok"
ok.onclick = function() {
    if(textoveOkno.value != ""){
        vytvorUkol()
        saveData()
    };
    textoveOkno.value = ""
    textoveOkno.style.height = ""
    textoveOkno.focus()

}
buttons.appendChild(ok)



function vytvorUkol(){
    let ukol = document.createElement("div");
    ukol.className = "ukol";
    ukoly.insertBefore(ukol, ukoly.firstChild);

    const textUkolu = document.createElement("textarea");
    textUkolu.type = "textarea"
    textUkolu.value = textoveOkno.value;
    textUkolu.className = "textUkolu"
    textUkolu.rows ="1"
    textUkolu.style.height = textoveOkno.style.height
    textUkolu.readOnly = false
    textUkolu.addEventListener("long-press", function(){
    })
    
    textUkolu.onkeyup = function() {
        textUkolu.style.height = "";
        textUkolu.style.height = this.scrollHeight + "px"

    }
    textUkolu.onclick = function (){
        this.readOnly= false
    }
    textUkolu.onblur = function (){
        this.readOnly= true
    }
    ukol.appendChild(textUkolu)

    let buttonsUkol = document.createElement("div");
    buttonsUkol.className = "tlacitkaUkol"
    ukol.appendChild(buttonsUkol)

    let del = document.createElement("button");
    del.innerText = "del"
    del.className = "del"
    del.onclick = function(){
        this.parentElement.parentElement.classList.add("odstraneni")
        setTimeout(function(){
            console.log("bang")
            del.parentElement.parentElement.parentElement.removeChild(del.parentElement.parentElement)
            saveData()
        },600)

    }
    buttonsUkol.appendChild(del)

    let done = document.createElement("button");
    done.innerText = "done"
    done.className = "done"
    done.onclick = function (){
        console.log("bang")
        textUkolu.disabled = true
        textUkolu.style.color = "rgb(106,106,106)"
        ukol.style.transform = "scale(0.9)"
        this.parentElement.removeChild(this)
        saveData()
    }
    buttonsUkol.appendChild(done)

}

window.addEventListener('resize', function(){
    var ukolyy = document.querySelectorAll(".textUkolu")
    if (ukolyy.length == 0) return;
    for (let i=0; i<ukolyy.lenght;i++){
        ukolyy[i].style.height = "";
        ukolyy[i].style.height = texUkolu.style.scrollHeight + "px";
        
    }  
});
function saveData(){
    let data = document.getElementsByClassName("ukol")
    localStorage.clear()
    let pole = []
    for (let i =data.length-1; i>=0; i--){
        pole.push([data[i].children[0].value,data[i].children[0].disabled])
    }
    pole = JSON.stringify(pole)
    localStorage.setItem("zaloha", pole)
    console.log(pole)
}
function obnova(){
    let pole = localStorage.getItem("zaloha")
    pole = JSON.parse(pole)
    console.log(pole)
    if(pole !== null) {
        for (let i = 0; i<pole.length; i++){
            zaloha(pole[i][0],pole[i][1])
        }
    }
    console.log("bang")

}


function zaloha(text, hotovo){
    function fxDone(){
        console.log("bang")
        textUkolu.disabled = true
        textUkolu.style.color = "rgb(106,106,106)"
        ukol.style.transform = "scale(0.9)"
        done.parentElement.removeChild(done)
    }
    let ukol = document.createElement("div");
    ukol.className = "ukol";
    ukoly.insertBefore(ukol, ukoly.firstChild);

    const textUkolu = document.createElement("textarea");
    textUkolu.type = "textarea"
    textUkolu.value = `${text}`;
    textUkolu.className = "textUkolu"
    textUkolu.rows ="1"
    textUkolu.style.height = textoveOkno.style.height
    textUkolu.readOnly = false
    textUkolu.addEventListener("long-press", function(){
        console.log("Bang")
    })
    
    textUkolu.onkeyup = function() {
        textUkolu.style.height = "";
        textUkolu.style.height = this.scrollHeight + "px"

    }
    textUkolu.onclick = function (){
        this.readOnly= false
    }
    textUkolu.onblur = function (){
        this.readOnly= true
    }
    ukol.appendChild(textUkolu)

    let buttonsUkol = document.createElement("div");
    buttonsUkol.className = "tlacitkaUkol"
    ukol.appendChild(buttonsUkol)

    let del = document.createElement("button");
    del.innerText = "del"
    del.className = "del"
    del.onclick = function(){
        this.parentElement.parentElement.classList.add("odstraneni")
        setTimeout(function(){
            console.log("bang")
            del.parentElement.parentElement.parentElement.removeChild(del.parentElement.parentElement)
            saveData()

        },600)

    }
    buttonsUkol.appendChild(del)

    let done = document.createElement("button");
    done.innerText = "done"
    done.className = "done"
    buttonsUkol.appendChild(done)
    done.onclick = function (){
        fxDone()
        saveData()
    }
    console.log(hotovo)
    if(hotovo === true) {
        fxDone()
    }
    

}
window.onload = function(){
    obnova()
}