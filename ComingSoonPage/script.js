var countdownDate=new Date("Jan 1 ,2026,00:00:00").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countdownDate-now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    var Gdays=document.getElementById("days");
    var Ghours=document.getElementById("hours");
    var Gminutes=document.getElementById("minutes");
    var Gseconds=document.getElementById("second");

    Gdays.innerHTML=days;
    Ghours.innerHTML=hours;
    Gminutes.innerHTML=minutes;
    Gseconds.innerHTML=seconds;

    if (distance<0) {
        Gdays.innerHTML="00";
        Ghours.innerHTML="00";
        Gminutes.innerHTML="00";
        Gseconds.innerHTML="00";

    }
},1000)