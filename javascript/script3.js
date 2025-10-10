//DOM: Document Object Model
/*Modifier du contenu HTML en JavaScript*/
var titredocument=document.getElementById("gros_titre");
var titre_text=titredocument.innerHTML;
var contenu_para=document.querySelector(".para").textContent
alert("Titre :"+titre_text+
    "\n contenu du premieṙparagraphe :"+contenu_para
);

/*Il est possible de directement modifier le contenu d'une variable en html*/
var new_h1=document.getElementById("gros_titre").innerHTML="Apprentissage avance de langage javascript";
/*Permet d'ajouter des element a des elements present dans le html  ici on vas  ajouter un texte au paragraphe de id="paragraphe" innerhtml prend en lui l'element html
alors que textcontent prend en lui uniquement le l'element texte*/
document.getElementById("paragraphe").innerHTML+=" et qui permettra de changer de page";

/*Il est possible de modifier aussi les attribues*/
document.querySelector('a').href="http://wikipedia.org";

/*Il est possible aussi de modifier le style css d'une page html en utilisant la propriete style*/
/*Mettons le titre h1 en rouge*/
document.getElementById("gros_titre").style.color="red"
document.getElementById("gros_titre").style.fontSize='50px'

/*Ajouter et insérer des éléments HTML en JavaScript*/
/*Pour creer des elemnts  en javascrit on vas utilise  la methode createElement de l'objet document qui prendra en argument le nom de l'element que l'on souhaite creer*/

/*Creons un element p*/
var new_paragraphe=document.createElement('p');
new_paragraphe.id='nouveau';
var text=document.createTextNode("Je suis un nouveau text creer depuis le javascript");
new_paragraphe.append(text);
document.body.appendChild(new_paragraphe)

var avant=document.querySelector(".para");
document.body.insertBefore(new_paragraphe,avant);/*permet de mettre un element a une position precise dans le body*/

/*Comment ce deplacer dans les noeud en javascript*/
// parent Node permet d'acceder au propriete parent
var p=document.querySelector(".paraf");   //selectionne le premier paragraphe
var div= p.parentNode;                    //permet d'acceder au parent de notre element p
div.style.color='orange'

/*var b=document.body;
var div1=b.childNode[4];
var p1=div1.childNode[1];
var pTexte=p1.childNode[0].nodeValue;
alert(pTexte);*/

var modification = document.getElementById("modif");
//console.log(modification);
modification.onclick = function() {
    this.innerHTML = "Changement effectué"; // correction orthographique
    this.style.color = "green";
    this.style.transition = "color 0.3s ease"; // effet doux
};


/*Utilisation de l'outil  addEvenListener   :  cela permet de liee du code a un evenement*/

var p1=document.querySelector('.event1');
p1.addEventListener('click',textchange);
function textchange(){
    this.innerHTML='<strong>Bravo!</strong>';
    this.style.color='blue';
}


/*utilisation des fonctions anonymes*/
var p2=document.querySelector('.event2');
p2.addEventListener('click',function(){
    this.innerHTML='<strong>Binvenue!</strong>';
    this.style.color='pink';  
});


// uilisation de plusieurs evenement avec addEven Listener
var p3=document.querySelector('.event3');
p3.addEventListener('mouseover',fonction1);
p3.addEventListener('mouseout',reset1);
p3.addEventListener('mousedown',fonction2);
p3.addEventListener("mouseup",reset2);

function fonction1(){
    this.innerHTML='Cliquez sur moi maintenant';
    this.style.backgroundColor='orange';
}

function reset1(){
    this.innerHTML='Passez sur moi';
    this.style.backgroundColor='';
}

function fonction2(){
    this.innerHTML='Bravo!';
    this.style.color='#26C';
    this.style.fontSize='24px';
    this.style.fontWeight='bloder';
}

function reset2(){
    this.innerHTML='Passez sur moi';
    this.style.color='';
    this.style.fontSize='';
    this.style.fontWeight='';
}


/*Propagation des evenements  :permet de caracteriser l'odre dans lequel les differents evenements vont se declencher*/
// cela veut dire que si exemple on a un paragraphe contenue dans une div et on affecte a deux evenement click a notre div et notre paragraphe lorasque l'utilisateur vas cliquer 
//sur le paragraphe les deux evenements vont se declanche car le paragraphe est  dans le div.La question est de savoir dans quel ordre vont se declenche les evenements lorque l'utilisateur clique


var div=document.getElementById('propagation');
var para=document.querySelector('p');

div.addEventListener('click',MessageDiv);
div.addEventListener('click',MessageP);

function MessageDiv() {
    alert('Evenement du Div');
}
function MessageP() {
    alert('Evenement  du paragraphe');
}


//Accedation aux variables html

var div_1=document.getElementById('div1');
var p_1=document.getElementById("p1");
var div_2=document.getElementById('div2');
var p_2=document.getElementById("p2");
var div_3=document.getElementById('div3');
var p_3=document.getElementById("p3");
var strong=document.querySelectorAll('strong')
var body_3=document.body;


div_1.style.border='2px solid red';
div_2.style.border='2px solid orange';
div_3.style.border='2px solid yellow';
div_1.style.padding='20px';
div_1.style.margin='10px';
div_2.style.padding='20px';
div_2.style.margin='10px';
div_3.style.padding='20px';
div_3.style.margin='10px';
p_1.style.backgroundColor='green';
p_2.style.backgroundColor='green';
p_3.style.backgroundColor='green';

//phase de bouillonnement utilisee pour div1 et p1 les evenements se declenche de l'element le plus profond vers le haut (p->div->body...)
div_1.addEventListener('click',MessageDiv_1);
p_1.addEventListener('click',MessageP_1);
function MessageDiv_1() {alert('Evenement du Div 1');}
function MessageP_1() {alert('Evenement  du paragraphe p1');}

//phase de capture pour div 2 et p2 les evenements se declenche de l'element le moins profond vers les elements les plus bat (document->body->div->p...)
div_2.addEventListener('click',MessageDiv_2,true);
p_2.addEventListener('click',MessageP_2,true);
function MessageDiv_2() {alert('Evenement du Div 2');}
function MessageP_2() {alert('Evenement  du paragraphe p2');}

//phase de bouillennement et de capture
p_3.addEventListener('click',CP1,true);
strong[1].addEventListener('click',CS,true);
function CP1() {alert('Capture paragraphe');};
function CS() {alert('Capture Strong');};

div_3.addEventListener('click',BD1);
body_3.addEventListener('click',BB);
function BD1() {alert('Bouillonnement div');};
function BB() {alert('Bouillonnement body');};



/*Etude de l(objet Event*/
//Event contient des proprietes et des methodes qui vont nous informe sur le contexte de l'element declenche.Cet object n'est accessible que pendant le declenchement d'un evenement il faut donc y acceder 
//au sein de la fonction qui vas servir d'executer une action lors de l'execution de l'evenement.

//propriete target: elle retourne le type de l'element qui as declenche l'evenement
//Propriete  current target :va retourner le type d'element qui porte le gestionnaire de l'element declenché.
//type :retourne le type d'element qui a ete declenche

var div_4=document.getElementById('div4');
var p_4=document.getElementById("p4");
div_4.style.backgroundColor='gray';
div_4.style.color='white';
div_4.style.padding='10px';
div_4.style.margin='10px';

div_4.addEventListener('click',message1);
function message1(event) {
    this.innerHTML='Element declencheur :'+event.target+
    '<br>Element portant l\'evenement: '+event.currentTarget+
    '<br>Le type d\'declenche est :'+event.type;
}


//on peut aussi arrter la propagation d'un evenement
var div_5=document.getElementById('div5');
var p_5=document.getElementById("p5");
div_5.style.backgroundColor='orange';
div_5.style.padding='10px';
div_5.style.margin='10px';
div_5.style.color='white';

div_5.addEventListener('click',TextD,true);
p_5.addEventListener('click',TextP,true);
/*function TextD(e) {
    alert('Stop a la propagation');
    e.stopPropagation();  //permet de stopper la propagation
}
function TextP(e) {
    alert('Ceci ne s\'affichera pas');
}*/


function TextD(e) {
    e.preventDefault();  //stopper un element cible mais permet au autre de continuer la propagation (ideal pour verifier les formulaires avant la validations)
}
function TextP(e) {
    alert('La methode preventDefault n\'enpeche pas la propagation');
}


















/*BOM: Browser Object Model permet d'acceder au nivigateur nous allons utiliser l'objet windows qui represente la 
fenetre du navigateur(on ne precise pas windows lorsque on utilise les fonction qui lui sont lie.Comme exemple)
alert()  est une fonction windows.  windows.alert()=alert() ,windows.document.getElementById=document.getElementById car ""windows est explicite*/

//Methode  OPEN :permet de ouvrir un nouveau onglet ou fenetre.Open prend 4 arguments qui sont tous facultatives sans argument open ouvrir une fenetre vide
/*1-url de destination
 2- precise ou vas s'ouvrir la new page.Soit dans l'onglet courant , ou dans un autre onglet
 3-Liste d'elements qui vas nous permettre d'agir sur le fenetre ouverte(largeur ,hauteur...)
 4-booleen qui precise si la nouvelle fenetre dois remplacer la fenetre actuel ou etre ajouter a celui ci
*/

var but1=document.getElementById("but1");
var fenetre='';
but1.addEventListener('click',fOuvrir);

function fOuvrir(){
    fenetre=window.open("page2.html",'_blank','width=500,height=300');
}

//Methode  CLOSE :permet de ferme un  onglet ou fenetre.Close ne  prend  pas  d'arguments .
var but2=document.getElementById("but2");
but2.addEventListener('click',fFermer);

function fFermer(){
    fenetre.close();
}

//propriete object SCREEN:nous donnes acces a des infos sur la taille de l'ecran de nos visiteurs comme la taille ou la  resolutions

var hauteur =screen.height;   //retourne la hauteur de l'ecran du visiteur
var hauteurDispo=screen.availHeight;  //retourne la hauteur disponible(hauteur-hauteur de barre de tache) de l'ecran du visiteur
var largeur =screen.width;   //retourne la largeur de l'ecran du visiteur
var largeurDispo=screen.availWidth;  //retourne la hauteur disponible(hauteur-hauteur de barre de tache) de l'ecran du visiteur
var resolution=screen.pixelDepth;

var p_6=document.getElementById("p6");
p_6.innerHTML=
'Hauteur de l\'ecran :'+hauteur+
'<br>Hauteur disponible :'+hauteurDispo+
'<br>Resolution :'+resolution+'bit/px'+
'<br>Largeur :'+largeur+
'<br>Largeur disponible  :'+largeurDispo;


//Objet NAVIGATEUR:Nous donnes les infos sur le navigateur de nos visiteurs

var langue=navigator.language;    // retourne la langue du navigateur du visiteur
var navigateur=navigator.appName;  // retourne la nom du navigateur du visiteur
var version=navigator.appVersion;  // retourne la version du navigateur du visiteur
var moteur=navigator.product;  // retourne la nom du navigateur du visiteur
var cookieA=navigator.cookieEnabled;  // retourne la nom du navigateur du visiteur

p_6.innerHTML+=
'<br>La langue du navigateur est  :'+langue+
'<br>Le nom du navigateur :'+navigateur+
'<br>La version :'+version+
'<br>Le moteur :'+moteur+
'<br>Presence des cookies :'+cookieA;

// propriete geolocalisation
var localisation=navigator.geolocation;

(function (){
    if(localisation){
        p_6.innerHTML+=localisation.getCurrentPosition(coordonnes);
    }
    else{
        p_6.innerHTML+='<br>Localisation non disponible';
    }
})();

function coordonnes(x){
    p_6.innerHTML+=
    '<br>Latitude : '+x.coords.latitude+
    '<br>Longitude :'+x.coords.longitude;
}


//les  propriete Object location  retourne les element lie a l'URL de la page 
var p_7=document.getElementById("p7");
p_7.style.backgroundColor='red';
const but3=document.getElementById("charger");
const but4=document.getElementById("recharger");
const but5=document.getElementById("changer");

//on vas tester deux propriete de location
p_7.innerHTML="bonjour";
var url=location.href;
var chemin=location.pathname;
p_7.innerHTML=
    'L\'URL est : '+url+
    '<br>Le chemein est  :'+chemin;


but3.addEventListener('click',Fcharge);
but4.addEventListener('click',Frecharge);
but5.addEventListener('click',Fchange);


function Fcharge() {
    location.assign('page2.html');
}

function Frecharge() {
    location.reload();
}
function Fchange() {
    // alert("Bouton cliqué !");
    location.replace('https://wikipedia.org');
}
//la difference  entre recharge et replace est que avec replace on a la possibilite de revenir en arriere avec replace la page est completement modifie.


/*L'objet History :qui appartient a l'objet windows .Cet objet vas nous permettre de ce depalcer dans l'historique de nos visiteurs*/
var p_8=document.getElementById("p8");
const precedent=document.getElementById("precedent");
const suivant=document.getElementById("suivant");
const specifique=document.getElementById("specifique");

precedent.addEventListener('click',farriere);
suivant.addEventListener('click',Favant);
specifique.addEventListener('click',Fspecifique);

function farriere() {
    history.back();
}

function Favant() {
    history.forward();
}

function Fspecifique() {
    history.go(-3);        //retourner les 3 dernieres pages visite par l'utilisateur
}

var histo=history.length;
p_8.innerHTML='URLs :' +histo;







