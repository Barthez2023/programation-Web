var search_form=document.getElementById('search_form');
var search_input=document.getElementById('search_input');
var search_result=document.getElementById('search_result');
var show_more_btn=document.getElementById('show-more-btn');


/*var utl=Ism8PtZ3_C0AxpyIX7iQp8LeKpjkPeimlZn0zK7yCpU;
var url2="https://api.unsplash.com/search/photos?page="+page+"&query="+query+"&client_id="+utl+"&per_page=12";
var url3=<https://api.unsplash.com/search/collections?page=1&query=office>;*/

let keyword= "";
let page=1;
var acceskey="Ism8PtZ3_C0AxpyIX7iQp8LeKpjkPeimlZn0zK7yCpU";

async function searchImages(){
    keyword=search_input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`;
    const response = await fetch(url);
    const data=await response.json();
    // console.log(data);
    if(page===1){
        search_result.innerHTML="";
    } 
    
    
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        search_result.appendChild(imageLink);
    }); 
    page++;
    show_more_btn.style.display="block";
}
search_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
});


show_more_btn.addEventListener("click",()=>{
    searchImages();
});



