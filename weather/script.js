const apikey="5225e983413e71d12df79b8e061ad379";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const img_icon=document.querySelector(".weather_icon");


async function checkweater(city) {
    // const reponse = await fetch(`${apiurl}&appid=${apikey}`);
    const reponse = await fetch(apiurl + city+`&appid=${apikey}`);
    var data=await reponse.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=String(parseInt(data.main.temp))+"°C"
    document.querySelector(".humid1").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind1").innerHTML=data.wind.speed+" Km/h";

    if (data.weather[0].main=="Clouds") 
    {
        img_icon.src="images/clouds.png"
    }
    else if (data.weather[0].main=="Clear") {
        img_icon.src="images/clear.png"
    }
    else if (data.weather[0].main=="Rain") {
        img_icon.src="images/rain.png"
    }
    else if (data.weather[0].main=="Drizzle") {
        img_icon.src="images/drizzle.png"
    }
    else if (data.weather[0].main=="Mist") {
        img_icon.src="images/mist.png"
    }

    console.log(data);
}
/*  async function checkWeather() { ... }
    Le mot-clé async indique que la fonction va contenir du code asynchrone.
    cela permet d'utiliser le mot-clé await à l'intérieur.
    Ce type de fonction retourne toujours une promesse (Promise).
    const response = await fetch(${apiurl}&appid=${apikey});

    fetch(...) est une fonction intégrée qui permet de faire une requête HTTP (ici à une API météo).
    Elle retourne une promesse, car la requête met du temps à être effectuée (internet, serveur, etc.).
    await dit au code : "attends la réponse avant de continuer" (au lieu de passer à la ligne suivante directement).
    ${apiurl}&appid=${apikey} est une chaîne template : elle assemble une URL à partir de la variable apiurl (base URL) et apikey (clé d’authentification).
    const data = await response.json();
    La réponse obtenue (response) est brute (format HTTP).
    .json() transforme la réponse au format JSON (données lisibles) et retourne aussi une promesse → await est utilisé à nouveau.
    Finalement, data contiendra un objet JavaScript avec les données météo.

    async function...Déclare une fonction asynchrone:Permet await
    await fetch(...) Envoie une requête HTTP:Récupère la météo
    await response.json() Convertit la réponse en JSON:Transforme en objet JS
    */
searchbtn.addEventListener('click',()=>{
    checkweater(searchbox.value);
})

