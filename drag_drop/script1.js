const droparea=document.getElementById("drop_area");
const inputfile=document.getElementById("input_file");
const img_view=document.getElementById("img_view");

inputfile.addEventListener("change",uploadImage);

function uploadImage() {
    let imgLink=URL.createObjectURL(inputfile.files[0]);
    /*inputfile.files:files est une liste de fichiers (FileList) Elle contient tous les fichiers sélectionnés
    inputfile.files[0]:Le premier fichier sélectionné
    C’est un objet de type File :
        {
        name: "photo.png",
        size: 34567,
        type: "image/png",
        lastModified: 171000000
    }
    URL.createObjectURL(...):Cette méthode, crée une URL temporaire qui pointe vers un fichier local sans l’envoyer au serveur    
    a la fin ,on a imgLink contient une URL temporaire utilisable directement dans HTML :*/
    img_view.style.backgroundImage=`url(${imgLink})`;
    img_view.textContent="";
    img_view.style.border="none";
    
}
droparea.addEventListener("dragover" ,function(e){
    e.preventDefault();
});
droparea.addEventListener("drop" ,function(e){
    e.preventDefault();
    inputfile.files=e.dataTransfer.files;
    uploadImage();
});