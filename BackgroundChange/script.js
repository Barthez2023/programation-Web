var imgbox=document.getElementById("img-box");
var imgwrap=document.getElementById("img-wrap");
var originalimg=document.getElementById("originalimg");
var arrow=document.querySelector(".arrow");
originalimg.style.width=imgbox.offsetWidth+"px";


var leftspace=imgbox.offsetLeft; //Calcule la distance entre la gauche de la page et la boite contenant l'image

imgbox.onmousemove=function(e){
    var boxwidht=(e.pageX-leftspace)+"px"; /*Parce que la souris (e.pageX) donne une position par rapport a la page, pas par rapport au conteneur.
    Donc on doit soustraire cette distance pour calculer correctement ou se trouve la souris dans l'image. e.pageX = position de la souris sur la page 
    leftspace = position du conteneur ,Resultat : position du curseur a l'interieur du conteneur*/
    imgwrap.style.width=boxwidht;
    arrow.style.left=boxwidht;
}
