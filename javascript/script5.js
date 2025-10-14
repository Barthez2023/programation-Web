/*L'outil Canvas de javascript*/

//Canvas est un element HTML5 qui permet de dessiner des graphiques via des scripts en javascript

//Syntaxe de base
//<canvas id="moncanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

var canvas = document.getElementById("canvas1");
var canvas1 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var context = canvas.getContext("2d");
var context1 = canvas1.getContext("2d");
var context3 = canvas3.getContext("2d");


/*on vas desiner un rectangle de couleur blue donc le bord gauche  se situe a 50 unite a droite du bord gauche du canvas */
    //context.fillStyle = "blue";
    //context.fillRect(50, 20, 150, 70); //x,y,width,height  permet de dessiner un rectangle plein

/*On vas creer un rectangle vide*/
context1.lineWidth = 3; //epaisseur du trait
context1.strokeStyle = "green"; //couleur du trait  
context1.strokeRect(50, 20, 150, 70); //x,y,width,height permet de dessiner un rectangle vide

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