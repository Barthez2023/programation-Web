var userinput=document.getElementById("date");
var calculate=document.getElementById("calculate");
var result=document.getElementById("your-age");



userinput.max=new Date().toISOString().split("T")[0];
/*new Date() Crée un objet Date contenant la date et l’heure actuelles.
.toISOString() Transforme la date en format ISO (standard web) :→ "2025-11-21T07:45:12.456Z"
.split("T") Sépare la chaîne en coupant au niveau du "T"  resultat : ["2025-11-21", "07:45:12.456Z"] et on prend l'element d'indice 0 du tableau
*/
calculate.addEventListener("click",()=>{
   let birthdate=new Date(userinput.value);

   let d1=birthdate.getDate();            //retourne le jour
   let m1=birthdate.getMonth()+1;        //car les mois commence a partir de 0
   let y1=birthdate.getFullYear();

   let today=new Date();

   let d2=today.getDate();
   let m2=today.getMonth()+1;
   let y2=today.getFullYear();

    let y3=y2-y1;
    let d3,m3;
    if (m2>=m1) {
        m3=m2-m1;
    } else {
        y3--;
        m3=12+m2-m1;
    }

    if (d2>=d1) {
        d3=d2-d1;
    } else {
        m3--;
        d3=getDayMonth(y1,m1)+d2-d1;
    }
    if (m3<0) {
        m3=11;
        y3--;
    }
    // console.log(y3 , m3, d3);
    result.innerHTML=`You are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old`
});

function getDayMonth(year,month) {
    return new Date(year,month,0).getDate();  //retorune le dernier jour du mois precedent
}

