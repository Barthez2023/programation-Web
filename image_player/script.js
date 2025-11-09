var precedent=document.querySelector('.but1');
var suivant=document.querySelector('.but2');
var image=document.getElementById("img");
var images=["img1.jpg","img2.png","img3.webp","img4.jpg","img5.webp","img6.png","img7.webp","img8.webp","img9.jpeg","img10.jpg"];
cmp=0;

suivant.addEventListener('click',function(){
    cmp=(cmp+1)%images.length;
    source="image/"+images[cmp];
    // alert(source);
    img.src=source;

});

precedent.addEventListener('click',function(){
    cmp=(cmp-1+images.length)%images.length;
    source="image/"+images[cmp];
    // alert(source);
    img.src=source;

});


