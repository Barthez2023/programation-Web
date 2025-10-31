var progess=document.getElementById("progress");
var crtlsong=document.getElementById("crtlsong");
var forward=document.getElementById("forward");
var backward=document.getElementById("backward");
var music=document.querySelectorAll(".music");
var image=document.getElementById("image");
var cmp=0;
var table=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];
var cmpimage=1;
// console.log(table.length);
// console.log(table[0]);

var song=music[cmp];

song.onloadedmetadata=function(){/* song.onloadedmetadata = function() { ... } :Cet événement se déclenche lorsque les métadonnées du fichier audio sont chargées.
Les métadonnées incluent la durée, le type de média, etc.
Cela signifie que le navigateur connaît enfin la durée totale de la chanson.
Donc le code à l’intérieur ne s’exécute qu’après que le fichier audio est prêt.*/
    progess.max=song.duration;
    progess.value=song.currentTime; 
}
crtlsong.addEventListener('click',joueLeSon);
function joueLeSon(){
    console.log(song.readyState);
    if (crtlsong.classList.contains("fa-pause")) {
        song.pause();
        crtlsong.classList.remove("fa-pause");
        crtlsong.classList.add("fa-play");
    }
    else{
        song.play();
        crtlsong.classList.add("fa-pause");
        crtlsong.classList.remove("fa-play");
    }
}

if (song.play()){
        setInterval(() => {
            progess.value=song.currentTime;
        }, 500);
        
}
progess.onchange=function(){
    song.play();
    song.currentTime=progess.value;
    crtlsong.classList.remove("fa-play");
    crtlsong.classList.add("fa-pause");
}

// Chanson suivante
forward.addEventListener('click', function() {
  song.pause();
  song.currentTime = 0;
  cmp = (cmp + 1) % music.length;
  song = music[cmp];
  song.play();
  crtlsong.classList.add("fa-pause");
  crtlsong.classList.remove("fa-play");
  image.src=table[cmpimage];
  cmpimage = (cmpimage + 1) % table.length;
});

// Chanson précédente
backward.addEventListener('click', function() {
  song.pause();
  song.currentTime = 0;
  cmp = (cmp - 1 + music.length) % music.length;
  song = music[cmp];
  song.play();
  crtlsong.classList.add("fa-pause");
  crtlsong.classList.remove("fa-play");
  image.src=table[cmpimage];
  cmpimage = (cmpimage - 1 + table.length) % table.length;
});