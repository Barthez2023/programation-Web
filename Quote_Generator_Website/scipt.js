var quote=document.getElementById("quote");
var author=document.getElementById("author");

const api_url="http://api.quotable.io/random";
async function getquote(url){
    const reponse=await fetch(url);
    var data=await reponse.json();
    // console.log(data);
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

function tweet() {
    window.open(href="https://twitter.com/intent/tweet?text="+ quote.innerHTML+"----by " +author.innerHTML,"tweet window","width=600,height=300");

}