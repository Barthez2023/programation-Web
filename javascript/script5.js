/*L'outil Canvas de javascript*/

//Canvas est un element HTML5 qui permet de dessiner des graphiques via des scripts en javascript

//Syntaxe de base
//<canvas id="moncanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

var canvas = document.getElementById("canvas1");
var canvas1 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var context = canvas.getContext("2d");
var context1 = canvas1.getContext("2d");
var context3 = canvas3.getContext("2d");
var context4 = canvas4.getContext("2d");

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
