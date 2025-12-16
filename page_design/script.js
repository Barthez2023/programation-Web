var productid=document.getElementById("productid");
var btn=document.getElementsByClassName("btn");

function change1(e){
    productid.src='image/img3.png';
    for (bt of btn) {
        bt.classList.remove("active");
    }
    e.classList.add("active")
}
function change2(e){
    productid.src='image/img8.png';
    for (bt of btn) {
        bt.classList.remove("active");
    }
    e.classList.add("active")
}
function change3(e){
    productid.src='image/img7.png';
    for (bt of btn) {
        bt.classList.remove("active");
    }
    e.classList.add("active")
}