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


