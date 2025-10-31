var progess=document.getElementById("progress");
var song=document.getElementById("song");
var crtlsong=document.getElementById("crtlsong");

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