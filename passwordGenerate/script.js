const passwordBox=document.getElementById("password");
var generate=document.getElementById("generate")
var len=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbole="@#$%^&*()_+~|{}[]<>/-=";

const allchars=uppercase+lowercase+number+symbole;

generate.addEventListener("click",createpasseword);
function createpasseword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbole[Math.floor(Math.random()*symbole.length)];

    while (len>password.length) {
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordBox.value=password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
    
}

