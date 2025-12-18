var lists=document.getElementsByClassName("list");
var rightBox=document.getElementById("right");
var leftBox=document.getElementById("left");

for (const list of lists) {
    list.addEventListener("dragstart",function(e){   
        //Role de dragstart Se declenche au moment exact ou l'utilisateur commence a glisser un element. Sert a identifier l'element en cours de deplacement
        //dragstart permet de savoir quel element est en train d'etre glisse
        let selected=e.target;

        rightBox.addEventListener("dragover",function(e){
            //Se declenche quand un element est deplace au-dessus d'une zone
            e.preventDefault();                          //Sans e.preventDefault(), Le navigateur bloque le drop L'evenement drop ne se declenche jamais
             
        });
        rightBox.addEventListener("drop" ,function(e){                  //Se declenche lorsque l'utilisateur relache la souris
            rightBox.appendChild(selected);
            selected=null;
        });

        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
            
        });
        leftBox.addEventListener("drop" ,function(e){
            leftBox.appendChild(selected);
            selected=null;
        });
    });
}

/*Le mecanisme Drag & Drop repose sur l'identification de l'el'ment lors de dragstart, 
l'autorisation du depot via dragover et l'insertion finale de l'element avec drop.*/
