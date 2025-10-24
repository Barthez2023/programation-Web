
var Days=document.getElementById("days");
var Hours=document.getElementById("hours");
var Minute=document.getElementById("minute");
var Seconde=document.getElementById("seconde");

const targetDte = new Date("December 25 2025 12:00:00:00").getTime();

function timer(){
    const currentdate=new Date().getTime();
    const distance=targetDte-currentdate;  //donne l'ecart de temps en milli seconde

    const days=Math.floor(distance/1000/60/60/24);
    const hours=Math.floor(distance/1000/60/60)%24;
    const minute=Math.floor(distance/1000/60)%60;
    const seconde=Math.floor(distance/1000)%60;

    Days.innerHTML=days;
    Hours.innerHTML=hours;
    Minute.innerHTML=minute;
    Seconde.innerHTML=seconde;

    console.log("Days="+days+" Heure="+hours+" Minutes="+minute+" Seconde="+seconde);
}
setInterval(timer,1000);//ert à exécuter une fonction de façon répétée, toutes les X millisecondes 