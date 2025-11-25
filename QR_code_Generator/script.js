var imgbox=document.getElementById("imgbox");
var qrimage=document.getElementById("qrimage");
var qrtexte=document.getElementById("qrtexte");




function generate_QR(){
    if (qrtexte.value.length > 0) {
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtexte.value;
        imgbox.classList.add("show_image");
    }
    else{
        qrtexte.classList.add("error");
        setTimeout(()=>{
            qrtexte.classList.remove("error");
        },1000);
    }
}