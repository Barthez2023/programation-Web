var r1=/[0-9.]/;
var nbr1="",nbr2="",operateur,resultat;
var cmp=0;
var boutton =document.querySelectorAll(".btn");
var ecran=document.querySelector(".result");
for (let index = 0; index < boutton.length; index++) {
    boutton[index].addEventListener('click',calcul);
    
}
function calcul(){
    var nbr=this.value;
    if (r1.test(nbr)){
        if (cmp==0) {
            nbr1+=nbr;
            ecran.innerHTML=nbr1;
        }
        else if (cmp==1) {
            nbr2+=nbr;
            ecran.innerHTML=nbr2;
        }
    }
    else if (nbr=='*'||nbr=='+'||nbr=='-'||nbr=='/'){
        operateur=nbr;
        cmp=1;
    }
    else if (nbr=='=') {
        resultat=0;
        switch (operateur) {
            case '+':
                resultat=Number(nbr1)+Number(nbr2);
                break;
            case '-':
                resultat=Number(nbr1)-Number(nbr2);
                break;
            case '*':
                resultat=Number(nbr1)*Number(nbr2);
                break;
            case '/':
                resultat=Number(nbr1)/Number(nbr2);
                break;            
            default:
                break;
        }
        console.log(nbr1);
        console.log(nbr2);
        console.log(resultat);
        var notasceintifique;
        if (resultat.toString().length>=10) {
            notasceintifique=Number(resultat).toExponential(2);
            ecran.innerHTML=notasceintifique;
        }
        else{
            ecran.innerHTML=resultat;
        }
    
        nbr1 = resultat.toString();
        nbr2="";
        cmp = 0;
    }
    else if (nbr=='AC'){
        nbr1 ="";
        nbr2 = "";
        cmp = 0;
        ecran.innerHTML=0;
    }
    else if (nbr=='+/-'){
        /*var constante=ecran.textContent;
        if (Number(constante)==Number(nbr1)){
            nbr1=-1*Number(nbr1);
            nbr1=nbr1.toString();
        }
        if (Number(constante)==Number(nbr2)){
            nbr2=-1*Number(nbr2);
            nbr2=nbr2.toString();
        }
        constante="-"+constante;
        ecran.innerHTML=constante;*/
        if (cmp==0) {
            nbr1 = (-1 * Number(nbr1)).toString();
            ecran.textContent = nbr1;
        }
        else{
            nbr2 = (-1 * Number(nbr2)).toString();
            ecran.textContent = nbr2;
        }
    }
    else if (nbr=='%'){
        if (cmp==0) {
            nbr1 = ((1/100) * Number(nbr1)).toString();
            ecran.textContent = nbr1;
            if (nbr1.length>=10) {
                ecran.textContent=(Number(nbr1).toExponential(2)).toString();
            }
        }
        else{
            nbr2 = ((1/100) * Number(nbr2)).toString();
            ecran.textContent = nbr2;
            if (nbr2.length>=10) {
                ecran.textContent=(Number(nbr2).toExponential(2)).toString();
            }
        }
    }
    /*console.log(nbr);
    console.log(typeof(nbr))*/
    
  

}