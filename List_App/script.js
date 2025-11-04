

const inputBox=document.getElementById("input_box");
const listContent=document.getElementById("list_content");
const add=document.getElementById("add");

add.addEventListener('click', AddToCard);
function AddToCard(){
    if (inputBox.value==='') {
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContent.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";  /*code pour creer une croix x*/
        li.appendChild(span);
    }
    inputBox.value='';
    savedataInBrowser();
}
listContent.addEventListener("click" ,function (e){
    if (e.target.tagName==="LI"){        //e.target représente l’élément précis sur lequel l’utilisateur a cliqué. ici un li
        e.target.classList.toggle("checked"); //on bascule (toggle) une classe CSS appelée "checked".
        savedataInBrowser();
    } 
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedataInBrowser();
    }
    
},false);
//cette fonction permet de sauvegarder les donnees dans le browser meme en cas d'actualisation de la page les data sont conserver
function savedataInBrowser(){
    localStorage.setItem("data",listContent.innerHTML);
}
//cette fonction permet d'afficher les data lorsque on relance le browser
function showtask() {
    listContent.innerHTML=localStorage.getItem("data");
}
showtask();
