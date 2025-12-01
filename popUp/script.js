let popup=document.getElementById('popup');
function openPopup(){
    popup.classList.add('open-popup');

    setTimeout(() => {
    closePopup()
    }, 2000); 
}
function closePopup(){
    popup.classList.remove('open-popup'); 
}
