const notecontainer=document.querySelector('.notes-container');
const createBtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');


function updateStorage(){
    localStorage.setItem("notes",notecontainer.innerHTML);
    //setItem("clé", "valeur") enregistre une donnée sous forme de texte.
}
function showNotes() {
    if (localStorage.getItem("notes")) {
        notecontainer.innerHTML=localStorage.getItem("notes");
    }
}
showNotes();
createBtn.addEventListener("click",createNotes);
function createNotes(){
    let inputBox=document.createElement("p");
    let imgage=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    imgage.src="images/delete.png";
    notecontainer.appendChild(inputBox).appendChild(imgage);
}
notecontainer.addEventListener("click",function(e){
    if (e.target.tagName==="IMG"){               //sert à connaître le nom de la balise HTML de l’élément sur lequel tu cliques ou que tu manipules.element.tagName renvoie :le nom de la balise HTML en majuscules (ex. : "DIV", "IMG", "BUTTON")
        e.target.parentElement.remove();        //e.target → l’élément exact cliqué
        updateStorage()
    }
    else if (e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup=function() {
                updateStorage();
            }
        });
    }
    //note.onkeyup = function() { updateStorage(); }:À chaque fois que l’utilisateur tape quelque chose dans une note, sauvegarde les notes dans localStorage. 
    // onkeyup est un événement JavaScript qui s’exécute à chaque fois que l’utilisateur relâche une touche du clavier dans un élément
    /*// modification d'une note
    else if (e.target.classList.contains("input-box")) {
        e.target.addEventListener("keyup", updateStorage);
    }*/
});