/*L'outil Canvas de javascript*/

//Canvas est un element HTML5 qui permet de dessiner des graphiques via des scripts en javascript

//Syntaxe de base
//<canvas id="moncanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

var canvas = document.getElementById("canvas1");
var canvas1 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var canvas5 = document.getElementById("canvas5");
var canvas6 = document.getElementById("canvas6");
var canvas7 = document.getElementById("canvas7");
var canvas8 = document.getElementById("canvas8");
var canvas9 = document.getElementById("canvas9");
var context = canvas.getContext("2d");
var context1 = canvas1.getContext("2d");
var context3 = canvas3.getContext("2d");
var context4 = canvas4.getContext("2d");
var context5 = canvas5.getContext("2d");
var context6= canvas6.getContext("2d");
var context7= canvas7.getContext("2d");
var context8 = canvas8.getContext("2d");
var context9 = canvas9.getContext("2d");



/*on vas desiner un rectangle de couleur blue donc le bord gauche  se situe a 50 unite a droite du bord gauche du canvas */
    //context.fillStyle = "blue";
    //context.fillRect(50, 20, 150, 70); //x,y,width,height  permet de dessiner un rectangle plein

/*On vas creer un rectangle vide*/
    //context1.lineWidth = 3; //epaisseur du trait
    //context1.strokeStyle = "green"; //couleur du trait  
    //context1.strokeRect(50, 20, 150, 70); //x,y,width,height permet de dessiner un rectangle vide

//Rectangle 1:blue ,plein et opaque
context.fillStyle = "blue";
context.fillRect(100, 50, 200, 100);
//Rectangle 2: vert,plein et semi-transparent
context.fillStyle = "rgba(50,200,100,0.5)";
context.fillRect(50, 25, 100, 50);
//Rectangle 3: bordure violet ,vide
context.lineWidth = 2;
context.strokeStyle = "violet";
context.strokeRect(250, 125, 100, 50);


/*dessiner des lignes :pour dessiner des lignes le point de depart et le point d'arrive doit etre fournir*/
context3.strokeStyle = "violet"; //couleur de la ligne
context3.lineWidth = 2; //epaisseur de la ligne
context3.moveTo(0,0); //point de depart
context3.lineTo(400, 200); //point d'arrive
context3.lineTo(400, 0); //point d'arrive
context3.lineTo(0, 200); //point d'arrive
context3.stroke(); //dessiner la ligne

//avec beginPath() et closePath() on peut dessiner plusieurs formes et redefinir les styles de chaque forme

context3.beginPath(); //debut du dessin
context3.strokeStyle = "blue";
context3.lineWidth = 1;
context3.moveTo(200, 0);
context3.lineTo(200, 200);
context3.stroke();  
context3.closePath(); //fin du dessin

context3.beginPath(); //debut du dessin
context3.strokeStyle = "green";
context3.lineWidth = 2;
context3.moveTo(0, 100);    
context3.lineTo(400, 100);
context3.stroke();  
context3.closePath(); //fin du dessin

/*Dessiner des arcs de cercles plein ou vide*/
context4.fillStyle = "blue"; //couleur de remplissage
context4.beginPath(); //debut du dessin
context4.arc(100, 75, 50, 0, Math.PI * 2, true); //x,y,radius,startAngle,endAngle,anticlockwise
context4.fill(); //dessiner le cercle plein
context4.closePath(); //fin du dessin

context4.strokeStyle = "red"; //couleur du trait
context4.lineWidth = 5; //epaisseur du trait    
context4.beginPath(); //debut du dessin
context4.arc(300, 75, 50, 0, Math.PI + (Math.PI / 2), false); //x,y,radius,startAngle,endAngle,anticlockwise
context4.stroke(); //dessiner le cercle vide
context4.closePath(); //fin du dessin

context4.strokeStyle = "violet"; //couleur du trait
context4.lineWidth = 2; //epaisseur du trait    
context4.beginPath(); //debut du dessin
context4.arc(200, 120, 50, 0,(Math.PI *2), true); //x,y,radius,startAngle,endAngle,anticlockwise
context4.stroke(); //dessiner le cercle vide
context4.closePath(); //fin du dessin


/*Creation des degrades de type lineaires et radial*/
//degrade lineaire
var degrade = context1.createLinearGradient(100, 50, 300, 150); //x0,y0:point de depart du degrader,x1,y1:point d'arrive du degrader
degrade.addColorStop(0, "rgba(246, 194, 194, 0.5)");
degrade.addColorStop(0.5, "rgba(158, 239, 204, 0.5)");
degrade.addColorStop(1, "rgba(65, 74, 249, 0.5)");
context1.fillStyle = degrade;
context1.fillRect(100, 50, 200, 100);

//degrade radial
var degradeRadial = context1.createRadialGradient(200, 100, 20, 200, 100, 100); //x0,y0,r0:centre et rayon du cercle de depart,x1,y1,r1:centre et rayon du cercle d'arrive
degradeRadial.addColorStop(0.10, "rgba(19, 21, 188, 0.5)");
degradeRadial.addColorStop(0.55, "rgba(230, 11, 11, 0.5)");
degradeRadial.addColorStop(1, "rgba(65, 249, 93, 0.5)");
context3.fillStyle = degradeRadial;
context3.arc(200, 100, 100, 0, Math.PI * 2, true);
context3.fill(); 


/*Ecrire du texte dans le canvas*/
context5.font = "30px Arial"; //definir la police et la taille du texte
context5.fillStyle = "blue"; //definir la couleur du texte
context5.fillText("Bonjour", 10, 50); //ecrire le texte x,y:position du texte

context5.strokeStyle = "red"; //definir la couleur du contour du texte
context5.lineWidth = 3; //definir l'epaisseur du contour du texte
context5.strokeText("Bonjour", 10, 100); //ecrire le texte x,y:position du texte

context5.font = "20px Verdana";
context5.fillStyle = "green";
context5.fillText("Salut", 150, 50);

context5.strokeStyle = "violet";
context5.lineWidth = 1;
context5.strokeText("Salut", 150, 100);

context5.font = "25px Tahoma";
context5.fillStyle = "orange";
context5.fillText("Coucou", 250, 50);

context5.strokeStyle = "black";
context5.lineWidth = 2;
context5.strokeText("Coucou", 250, 100);

context5.font = "blod  20px Verdane,Arial,serif";
context5.strokeStyle = "brown";
context5.strokeText("Text creux", 250, 150);

context5.font = "blod  20px Verdane,Arial,serif";
context5.fillStyle = "brown";
context5.fillText("Text plein", 250, 180);



/*Importation des images sur le canvas*/
var image1=document.getElementById("image");

image1.addEventListener('load', afficherImage());

function afficherImage(){
    context6.drawImage(image1, 50, 25,300,150); //x,y:position de l'image
    console.log("Image affichée sur le canvas !");
}  


/*Importation des images sur le canvas methode 2*/
/*var image1 = new Image();
image1.src = "img5.jpg";
image1.onload = function() {
    context6.drawImage(image1, 0, 0, 400, 200);
};*/


/*Incliner un dessin avecċla methode Rotate et Translate*/
//La methode rotate() permet d'incliner un dessin selon un angle en radian.Elle execute avant la creation du dessin

context7.fillStyle = "#48A";
context7.fillRect(150, 25, 75, 75); //dessiner un carre

context7.rotate(Math.PI /9); //incliner le dessin de 20 degres (PI/9 radian)
context7.fillStyle = "rgba(64,192,128,0.6";
context7.fillRect(150, 25, 75, 75); //dessiner un carre

context7.rotate(Math.PI /9); //incliner le dessin de 20 degres (PI/9 radian) par rapport au dexieme carre ou de 40 degres par rapport au premier carre
context7.fillStyle = "rgba(192,64,192,0.6";
context7.fillRect(150, 25, 75, 75); //dessiner un carre


//La methode translate() permet de deplacer le point d'origine du canvas avant la creation du dessin 
//permet de definir un nouveau point d'origine(x,y) pour le canvas
context8.fillStyle = "#48A";
context8.fillRect(10, 10, 75, 75); //dessiner un carre

context8.translate(75, 75); //deplacer le point d'origine du canvas a (100,50)

context8.fillStyle = "rgba(64,192,128,0.6";
context8.fillRect(10, 10, 75, 75); //dessiner un carre


//deplacer encore le point d'origine du canvas a (200,150)
context9.translate(200, 150);

context9.fillStyle = "#48A";
context9.fillRect(0, 0, 75, 75); //dessiner un carre

context9.rotate(Math.PI /2); //incliner le dessin de 90 degres (PI/2 radian) 
context9.fillStyle = "rgba(192,64,128";
context9.fillRect(0, 0, 75, 75); //dessiner un carre

context9.rotate(Math.PI /2); //incliner le dessin de 90 degres (PI/2 radian) par rapport au deuxieme carre ou de 180 degres par rapport au premier carre
context9.fillStyle = "#A3A";
context9.fillRect(0, 0, 75, 75); //dessiner un carre

context9.rotate(Math.PI /2); //incliner le dessin de 90 degres (PI/2 radian) par rapport au troisieme carre ou de 270 degres par rapport au premier carre
context9.fillStyle = "rgba(64,192,255";
context9.fillRect(0, 0, 75, 75); //dessiner un carre








