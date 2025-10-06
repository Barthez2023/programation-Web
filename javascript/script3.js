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
