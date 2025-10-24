
var Hours=document.getElementById("hours");
var Minute=document.getElementById("minute");
var Seconde=document.getElementById("seconde");
var Tiers=document.getElementById("tiers");
var start=document.getElementById("start");
var compte=document.getElementById("comp");
var refresh=document.getElementById("refresh");
var stopcode=document.getElementById("stop");
var compteur=document.getElementById("compteur");
var tiers=0;
var seconde=0;
var minute=0;
var hours=0;
let intervalID; // variable pour stocker l'identifiant du timer


function timer(){
    tiers=tiers+1;
    if (tiers==60) {
        seconde=seconde+1;
        tiers=0;
    }
    if (seconde==60) {
        minute=minute+1;
        seconde=0;
    }
    if (minute==60) {
        hours=hours+1;
        minute=0;
    }
    Tiers.innerHTML=tiers;
    Hours.innerHTML=hours;
    Minute.innerHTML=minute;
    Seconde.innerHTML=seconde;

    // console.log("Days="+days+" Heure="+hours+" Minutes="+minute+" Seconde="+seconde);
}

start.addEventListener('click',debut);
function debut() {
    // on empêche plusieurs timers simultanés
    clearInterval(intervalID);
    intervalID=setInterval(timer,(1000/60));//sert à exécuter une fonction de façon répétée, toutes les X millisecondes 
}

stopcode.addEventListener('click',fin);
function fin() {
    clearInterval(intervalID);
}
refresh.addEventListener('click',reinitialise);
function reinitialise() {
    Tiers.innerHTML='00';
    Hours.innerHTML='00';
    Minute.innerHTML='00';
    Seconde.innerHTML='00';
    tiers=0;
    seconde=0;
    minute=0;
    hours=0;
    compteur.innerHTML="";
}

compte.addEventListener('click',affichecompte);

function affichecompte(){
    compteur.innerHTML+=hours+" : "+minute+" : "+seconde+" : "+tiers+"<br/>";
}



