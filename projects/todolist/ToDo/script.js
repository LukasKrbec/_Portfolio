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
textoveOkno.placeholder ="task"


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
    if(textoveOkno.value != "")vytvorUkol();
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

        },600)
    }
    buttonsUkol.appendChild(del)

    let done = document.createElement("button");
    done.innerText = "done"
    done.className = "done"
    done.onclick = function(){
        textUkolu.disabled = true
        textUkolu.style.color = "grey"
        ukol.style.transform = "scale(0.9)"
        this.parentElement.removeChild(this)
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
function padaciEfekt(){

}