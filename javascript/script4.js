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

