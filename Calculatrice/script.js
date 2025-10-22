var r1=/[0-9.]/;
var nbr1="",nbr2="",operateur;
var cmp=0;
var boutton =document.querySelectorAll(".btn");
for (let index = 0; index < boutton.length; index++) {
    boutton[index].addEventListener('click',calcul);
    
}
function calcul(){
    var nbr=this.value;
    if (r1.test(nbr)){
        if (cmp==0) {
            nbr1+=nbr;
        }
        if (cmp==1) {
            nbr2+=nbr;
        }
    }
    else{
        cmp=1;
        operateur=nbr;
        if (operateur=='*'||operateur=='+'||operateur=='-'||operateur=='/'){
            console.log("nbr1="+nbr1);
            console.log("nbr2="+nbr2);
        }
    }
   
    /*console.log(nbr);
    console.log(typeof(nbr))*/
    
  

}