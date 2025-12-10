var selectfield=document.getElementById("selectfield");
var selectText=document.getElementById("selectText");
var options=document.getElementsByClassName("option");
var list=document.getElementById("list");
var arrowIcon=document.getElementById("arrowIcon");

for (option of options){
    option.onclick=function(){
        selectText.innerHTML=this.textContent
        list.classList.toggle("hide");
        arrowIcon.classList.toggle('rotate');
    }
}
selectfield.addEventListener('click',()=>{
    list.classList.toggle("hide");
    arrowIcon.classList.toggle('rotate');
});


