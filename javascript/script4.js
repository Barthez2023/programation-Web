//Les expressions regulieres(REGEX)
//consttue une suite de charactere qui vont forme ensemble en chemin de recherche,permet de verifier la presence de certains caractere dans une expression


//creation d'une regex
var r =/pierre/;

/*La fonction match() Permet de recherche un caractere dans une sequence de caractere.Elle prend en argument la sequence de caractere a recherche.
Elle renvoie sous forme de tableau l'expression autant de fois qu'elle a ete retrouve
Avec regex elle ne renvoie que la premiere occurence a part si on ajoute le parametre g pour une recherche global*/

var p_1=document.getElementById("p9");
var p_2=document.getElementById("p10");
var p_3=document.getElementById("p11");
var p_3=document.getElementById("p11");
var p_4=document.getElementById("p12");
var p_5=document.getElementById("p13");
var p_6=document.getElementById("p14");
var p_7=document.getElementById("p15");
var p_8=document.getElementById("p16");
var p_9=document.getElementById("p17");
var p_10=document.getElementById("p18");


/* match va retourner un tableau contenant l'expression rechercher autant de fois qu'elle a ete retrouver dans la chaine de caractere
ou null si elle n'a pas ete retrouver*/ 
var r1=/engagez/i; //i pour une recherche insensible a la casse
var r2=/engagez/ig; //g pour une recherche globale

var res1=p_1.textContent.match(r1);
var res2=p_1.textContent.match(r2);
p_2.innerHTML="Resultat de la recherche de 'engagez' dans p9 avec i : "+res1+
"<br>Resultat de la recherche de 'engagez' dans p9 avec ig : "+res2;

/* search() : va retourner la position ou a ete retrouver la premiere occurence de l'expression recherche dans une chaine
de caractere ou le chiffre -1 si elle n'a pas ete retrouve*/
var r3=/engagez/i; //Tiens compte de la casse
var r4=/engagez/; //Ne tient pas compte de la casse

var res3=p_1.textContent.search(r3);
var res4=p_1.textContent.search(r4);
p_3.innerHTML="Resultat de la recherche de la position de 'engagez' dans p9 en tenant compte de la casse : "+res3+
"<br>Resultat de la recherche de la position de  'engagez' dans p9 sans la casse : "+res4;


/*replace() :Permet de recherche une expression et de la remplacer par une autre.Prend en parametre deux elements ,lexppression a remplacer et l'expression qui va remplacer*/
var r5=/vous/; 
var r6=/vous/g; 

var res5=p_1.textContent.replace(r5,'moi');
var res6=p_1.textContent.replace(r6,'moi');
p_4.innerHTML="Resultat du remplacement de 'vous' par 'moi' dans p9 sans le g : "+res5+
"<br>Resultat du remplacement de 'vous' par 'moi' dans p9 avec le g : "+res6;   //remplace la premiere occurence sans g et toute les occurences avec g

/*La methode test: va recherche une  sequence de caractere dans un chaine de caractere 
si la sequence est trouvee elle retourne true cas contraire false*/
var r7=/ENGAGEZ/; 
var r8=/ENGAGEZ/i;  //i pour une recherche insensible a la casse

var res7=r7.test(p_1.textContent);
var res8=r8.test(p_1.textContent);
p_5.innerHTML="Resultat de la recherche de 'ENGAGEZ' dans p9 en tenant compte de la casse : "+res7+
"<br>Resultat de la recherche de 'ENGAGEZ' dans p9 sans tenir compte de la casse : "+res8;     //false et true 


//le methode exec: va rechercher une sequence de caractere dans une chaine de caractere
//si la sequence est trouvee elle retourne un tableau contenant la sequence trouver et des informations supplementaires
//si la sequence n'est pas trouvee elle retourne null
var r9=/engagez/i;
var res9=r9.exec(p_1.textContent);
p_6.innerHTML="Resultat de la recherche de 'engagez' dans p9 avec exec : "+res9;  //retourne un tableau contenant l'expression rechercher et des infos supplementaires
//si on ajoute le parametre g a la regex elle retourne la premiere occurence de l'expression rechercher



/*Les quantificateurs et les options :Les quantificateurs sont des signes aui vont nous aider a definir une quantite d'une sequnce a recherche
+:veut dire que l'on recherche au moins une occurence*/
var r10=/10+/g    //veut dire que je recherche l'expression "1" suivie d'un moins un  zero
var res10=p_7.textContent.match(r10);
p_8.innerHTML="Resultat pour la methode '/10+/g '       : "+res10;

var r11=/x+/g;    //veut dire que je recherche l'expression "x" suivie d'un moins un  x
var res11=r11.test(p_9.textContent);
p_8.innerHTML+="<br>Resultat pour la methode  '/x+/g'     : "+res11;

var r12=/e(nd)?/g;    //veut dire que je recherche l'expression "e" suivie ou non de "nd"
var res12=p_9.textContent.match(r12);
p_8.innerHTML+="<br>Resultat pour la methode  '/e(nd)?/g'    : "+res12;

var r13=/e$/i;    //veut dire que je recherche l'expression "e" a la fin de la chaine insensible a la casse
var res13=r13.test(p_9.textContent);
p_8.innerHTML+="<br>Resultat pour la methode  '/e$/i'    : "+res13;

var r14=/p{2}/i;    //veut dire que je recherche l'expression "p" qui doit apparaitre au moins 2 fois de suite insensible a la casse
var res14=r14.test(p_9.textContent);
p_8.innerHTML+="<br>Resultat pour la methode  '/p{2}/i'       : "+res14;

var r15=/java(?=script)/i;    //veut dire que je recherche l'expression "java" qui doit etre suivie de "script" insensible a la casse
var res15=r15.test(p_9.textContent);
p_8.innerHTML+="<br>Resultat pour la methode  '/java(?=script)/i'       : "+res15;



/*Les options ou modificateur: permet d'ajouter des options a notre recherche .Im existe 3 options
i : effectue des recherche insemsible a la casse
g : effectue des recherche globales
m : effectue des recherche sur plusieurs ligne elle considere chaque retour a la ligne comme fin d'une premiere ligne et debut d'une seconde ligne*/

var rec1='Je suis sue \ndeux lignes en JS';
var r16=/on/i;    //recherche  de "on" insensible a la casse
var res16=p_9.textContent.match(r16);
p_8.innerHTML+="<br>Resultat pour la methode  '/on/i      ': "+res16;

var r17=/e/g;    //recherche  de "e" globalement
var res17=p_9.textContent.match(r17);
p_8.innerHTML+="<br>Resultat pour la methode  '/e/g       ': "+res17;

var r18=/^d/;   //recherche  de "d" au debut de la chaine
var res18=r18.test(rec1);
p_8.innerHTML+="<br>Resultat pour la methode  '/^d/       ': "+res18;

var r19=/^d/m;   //recherche  de "d" au debut de chaque ligne
var res19=r19.test(rec1);
p_8.innerHTML+="<br>Resultat pour la methode  '/^d/m       ': "+res19;









/*Classes de Caracteres / Metacaracteres*/
/*Les classes de caracacteres vont nous permettre de mentionner une plage de 
caractere pour faire une recheche.[abc] : recherche un caractere qui peut etre a ou b ou c*/

var r20=/aeiouy/g;   //on recherche la suite de aractere 'aeiouy'  globalement
var res20=p_9.textContent.match(r20);
p_10.innerHTML="Resultat pour la methode  '/aeiou/g   sans classe     ': "+res20;

var r21=/[aeiouy]/g;  //recherche  de "a" ou "e" ou "i" ou "o" ou "u" ou "y" globalement
var res21=p_9.textContent.match(r21);
p_10.innerHTML+="<br>Resultat pour la methode  '/[aeiou]/g avec classe          ': "+res21;



var r22=/[C-X]/g;  //recherche  de tous les caracteres entre C et X globalement
var res22=p_9.textContent.match(r22);
p_10.innerHTML+="<br>Resultat pour la methode  '/[C-X]/g avec classe          ': "+res22;

var r23=/[^aeiou]/g;  //recherche  de tous les caracteres sauf a ou e ou i ou o ou u globalement
var res23=p_9.textContent.match(r23);
p_10.innerHTML+="<br>Resultat pour la methode  '/[^aeiou]/g avec classe          ': "+res23;

var r24=/[0-9]/g;  //recherche  de tous les chiffres entre 0 et 9 globalement
var res24=p_9.textContent.match(r24);
p_10.innerHTML+="<br>Resultat pour la methode  '/[0-9]/g avec classe          ': "+res24;

var r25=/\d/g;  //recherche  de tous les chiffres entre 0 et 9 globalement (\d equivalent a [0-9])
var res25=p_9.textContent.match(r25);
p_10.innerHTML+="<br>Resultat pour la methode  '/\\d/g avec metacaractere          ': "+res25;

var r26=/\D/g;  //recherche  de tous les caracteres sauf les chiffres entre 0 et 9 globalement (\D equivalent a [^0-9])
var res26=p_9.textContent.match(r26);
p_10.innerHTML+="<br>Resultat pour la methode  '/\\D/g avec metacaractere          ': "+res26;

var r27=/\w/g;  //recherche  de tous les caracteres alphanumerique globalement (\w equivalent a [A-Za-z0-9_])
var res27=p_9.textContent.match(r27);
p_10.innerHTML+="<br>Resultat pour la methode  '/\\w/g avec metacaractere          ': "+res27;  

var r28=/\W/g;  //recherche  de tous les caracteres non alphanumerique globalement (\W equivalent a [^A-Za-z0-9_])
var res28=p_9.textContent.match(r28);
p_10.innerHTML+="<br>Resultat pour la methode  '/\\W/g avec metacaractere          ': "+res28;  

var r29=/^[A-Z]/;  //recherche  de tous les caracteres en majuscule au debut de la chaine
var res29=r29.test(p_9.textContent);
p_10.innerHTML+="<br>Resultat pour la methode  '/^[A-Z]/ avec metacaractere          ': "+res29;

var r30=/[0-9]{4}/;  //recherche  de 4 chiffres qui se suivent
var res30=p_9.textContent.match(r30);
p_10.innerHTML+="<br>Resultat pour la methode  '/[0-9]{4}/ avec metacaractere          ': "+res30;

var r31=/[a-zA-Z0-9]/g;  //recherche  de tous les caracteres alphanumerique globalement (\s equivalent a [ \t\n\r\f])
var res31=p_9.textContent.match(r31);
p_10.innerHTML+="<br>Resultat pour la methode  '/[a-zA-Z0-9]/g avec metacaractere          ': "+res31;

//metacaractere \s : recherche  de tous les espaces,tabulation,retour a la ligne globalement

var r32=/\s/g;  //recherche  de tous les espaces,tabulation,retour a la ligne globalement
var res32=p_9.textContent.match(r32);
p_10.innerHTML+="<br>Resultat pour la methode  '/\\s/g avec metacaractere          ': "+res32;
