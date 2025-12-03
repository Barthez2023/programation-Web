# programation-Web
Dans ce ripo nous allonṡetudier le devellopement d'application web


ce lien nous permet d'utiliser les icones de Font Awesome 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />


Google Font :Nous permet d'avoir access a des font que l'on peut telecharger te utiliser dans notre page web

https://github.com/lukePeavey/quotable:ce lein nous dirige vers un gitup qui a les api  pour les dayli quote
le lien de l'api a mettre dans le js http://api.quotable.io/random
https://developer.x.com/en/docs/x-for-websites/tweet-button/overview :permet de partager du moins d'ouvrir une page twitter 


 https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example  :L'api qui permet de changer et de generer un QR code il suffit de changer le mot Example par l'url voulu  (pour acceder a ce lien on recherche qr code api sur google)


 .error {
    animation: shake 0.1s linear 10;
}
/*Quand un élément reçoit la classe error, il lance une animation :
shake → nom de l'animation définie en dessous
0.1s → durée d'un cycle (100 ms)
linear → vitesse constante
10 → l'animation se répète 10 fois
Résultat : l'élément va “trembler” rapidement pendant 1 seconde au total (0.1s × 10).*/

/* permet d'enlever la petite icone oeil qui apparait a la fin de saisir du champ passeword
input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
    display: none;
}
input[type="password"]::-webkit-textfield-decoration-container,
input[type="password"]::-webkit-clear-button,
input[type="password"]::-webkit-inner-spin-button,
input[type="password"]::-webkit-credentials-auto-fill-button {
    display: none !important;
}
input[type="password"]::-webkit-password-toggle {
    display: none;
}
*/
scrollcontainer.addEventListener("wheel",scroll);   //L’événement "wheel" sert à détecter le mouvement de la molette de la souris (scroll) Quand wheel se déclenche, 
// il donne un objet event avec plusieurs propriétés, les plus importantes :event.deltaY:Valeur positive → scroll vers le bas ,Valeur négative → scroll vers le haut

function scroll(evt){
    evt.preventDefault();  //evt.preventDefault() empêche le scroll vertical par défaut
    scrollcontainer.scrollLeft+= evt.deltaY; // <-- += et pas =  evt.deltaY = valeur positive (scroll vers le bas) ou négative (scroll vers le haut) 
    //scrollLeft représente la position horizontale du scroll à l’intérieur d’un élément.
}