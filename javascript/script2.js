//Accerder a un element du html dans le script

var titre=document.getElementById("paragraphe");
var elements=document.getElementsByTagName('p');  // recupere tout les elements p de notre html et les stocque dans un tableau
var elementclass=document.getElementsByClassName('para');  // recupere tout les elements ayant pour nom de clase para de notre html et les stocque dans un tableau



alert(titre);
alert("Notre page contient "+ elements.length +" paragraphes");
alert(elementclass)


//Query selector(prend un css en argument) retourne le premier element retrouver correspondant au css selectioner et QueryselectorAll retourne
//les infos sur tout les  elements correspondant au css selectionner.

var lien =document.querySelector('p a') // selectionne le premier lien qui apparait  dans un paragraphe
var p=document.querySelectorAll('.para') // seletionne tous les elemnts qui porte la classe para

alert('Information dans le lien :'+lien+
      '\nDans p[0] : '+p[0]+
      '\nDans p[1] : '+p[1]
);

//InnerHtml nous permet de recuperer la valeur des elemnts dans le html
var titre1=document.getElementById("paragraphe");  //Nous dit judtr qu'il s'agit d'un element paragraphe present dans la page html
var titre2=document.getElementById("paragraphe").innerHTML;   //retourne la valeur du paragraphe
alert(titre2);

//InnerText recupere juste le txte present dans un element  html
var titre3=document.getElementById("paragraphe").innerText;   //retourne le texte present dans le paragraphe
alert(titre3)

//textContent recupere juste le txte present dans un element  html
var titre4=document.getElementById("paragraphe").textContent;   //retourne le texte present dans le paragraphe
alert(titre4)

alert("Contenu recuperer avec innerHTML :\n"+titre2+
    "\n contenu recupere avec innerTexte :\n"+titre3+
    "\n contenu recupere avec textContent:\n"+titre4
);
alert("Contenu recuperer avec innerHTML :\n"+titre2+
    "\n contenu recupere avec innerTexte :\n"+titre3+
    "\n contenu recupere avec textContent:\n"+titre4
);