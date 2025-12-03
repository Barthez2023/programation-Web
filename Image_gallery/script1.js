let scrollcontainer=document.querySelector(".gallery");
var btnback=document.getElementById("btnback");
var btnnext=document.getElementById("btnnext");

scrollcontainer.addEventListener("wheel",scroll);   //L’événement "wheel" sert à détecter le mouvement de la molette de la souris (scroll) Quand wheel se déclenche, 
// il donne un objet event avec plusieurs propriétés, les plus importantes :event.deltaY:Valeur positive → scroll vers le bas ,Valeur négative → scroll vers le haut

function scroll(evt){
    evt.preventDefault();  //evt.preventDefault() empêche le scroll vertical par défaut
    scrollcontainer.scrollLeft+= evt.deltaY; // <-- += et pas =  evt.deltaY = valeur positive (scroll vers le bas) ou négative (scroll vers le haut) 
    //scrollLeft représente la position horizontale du scroll à l’intérieur d’un élément.
    scrollcontainer.style.scrollBehavior="auto";

}

btnnext.addEventListener('click',()=>{
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft+=900;
});

btnback.addEventListener('click',()=>{
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft-=900;
});
