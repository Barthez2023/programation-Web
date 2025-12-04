var btn=document.getElementById("btn");
var btn2=document.getElementById("btn2");
var textarea=document.getElementById("textarea");
var select=document.getElementById("select");
let voices=[];

let speech=new SpeechSynthesisUtterance();
//Crée un objet SpeechSynthesisUtterance qui représente le texte à prononcer et ses paramètres (voice, pitch, rate, volume, lang).

window.speechSynthesis.onvoiceschanged=()=>{ //speechSynthesis est l’API du navigateur pour la synthèse vocale.  
// L’événement onvoiceschanged se déclenche quand la liste des voix est prête / a changé (certaines voix peuvent être chargées de façon asynchrone).
    voices=window.speechSynthesis.getVoices();
    //getVoices() retourne un tableau d’objets SpeechSynthesisVoice (chaque voice a des propriétés comme name, lang, voiceURI, default, etc.).
    speech.voice=voices[0];

    voices.forEach((voice, i)=>(select.options[i]=new Option(voice.name,i)));

    //Pour chaque voix on crée une <option> dans le <select> :le label affiché = voice.name la valeur = i (l’indice). 
    // Cela permet ensuite d’utiliser select.value comme index pour retrouver la voix dans voices.
};

select.addEventListener("change", ()=>{
    speech.voice=voices[select.value];
    //Quand l’utilisateur change la voix dans la <select>, on met à jour speech.voice pour qu’elle corresponde à la voix sélectionnée.
});


btn.addEventListener("click",()=>{
    // arrêt de la lecture précédente si existante
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    speech.text = textarea.value.trim() || "Nothing to say";
    window.speechSynthesis.speak(speech);
    window.speechSynthesis.cancel(); // annule la lecture en cours
    window.speechSynthesis.speak(speech);

});
btn2.addEventListener("click",()=>{
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
});
speech.rate = 1;   // vitesse (0.1 à 10)
speech.pitch = 1;  // tonalité (0 à 2)
speech.volume = 1; // 0 à 1