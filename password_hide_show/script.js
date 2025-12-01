let password=document.getElementById("password");
let eyeicon=document.getElementById("eyeicon");

eyeicon.addEventListener('click',showpasword);
function showpasword() {
    if (password.type=="password"){
        password.type="text";
        eyeicon.src= "image/eye-open.png";
    }
    else{
        password.type="password";
        eyeicon.src= "image/eye-close.png";
    }
       
}