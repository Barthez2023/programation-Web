
var toastBox=document.getElementById('toastBox');
var successMsg='<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
var errorsMsg='<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
var invalidsMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again please';



function showToast(msg){
    let toast=document.createElement('div');
    toast.classList.add('toast');
    /*toast.classList.add('toast'); permet d'ajouter une classe  toast.className='toast'; remplace le nom de la classe par toast 
    toast.classList.toggle('toast'); ajoute la classe toast si elle n'exixte pas et la supprime si elle existe*/
    toast.innerHTML=msg
    toastBox.appendChild(toast)

    if (msg.includes('error')){
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')){
        toast.classList.add('invalid');
    }


    setTimeout(()=>{
           toast.remove();
    },5000);
}