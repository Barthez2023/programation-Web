var number=document.getElementById("number");
let counter=0;
var error=document.getElementById('error');
var btn=document.getElementById("btn");
var cercle=document.getElementById("cercle");
/*setInterval(()=>{
    if (counter==65) {
        clearInterval();
    }
    else{
        counter+=1;
        number.innerHTML=counter+"%";
    }
    
},30);*/

btn.addEventListener("click",()=>{
    var sayi=document.getElementById("sayi").value;
    nbr=Number(sayi)
    if (nbr<0 || nbr >100) {
        error.classList.add("erreur");
        setTimeout(() => {
            enleve();
        }, 2000); 
    } 
    else{ 
        error.classList.remove("erreur");
        // Calcul du dashoffset
        const CIRC = 472;
        const targetOffset = CIRC - (CIRC * sayi / 100);
        cercle.style.strokeDashoffset = CIRC;
        cercle.style.setProperty("--offset", targetOffset);
        // circle.style.strokeDashoffset = offset;
        // Reset animation pour pouvoir la rejouer a chaque clic
        cercle.classList.remove("anim");
        void cercle.offsetWidth; // hack pour forcer le reset
        cercle.classList.add("anim");
        // Animation du texte %
        counter = 0;
        number.innerHTML = "0%";
        let intervalID =setInterval(()=>{
            if (counter>=nbr) {
                clearInterval(intervalID);
            }
            else{
                counter+=1;
                number.innerHTML=counter+"%";
            }
        
        },30);
    }
});
function enleve(){
    error.classList.remove('erreur'); 
}