import {apiKey} from "./apikey"
import {initMap} from "./map"
function init(){
    initMap();
};
window.init = init; //rattache la fonction au scope global
// générer le script google map en cachant la clé api dans gitignore
function loadScript(){
    var script = document.createElement("script");
    //script.type = "text/javascript";
    script.async= true;
    script.src=`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=init` ;
    console.log(script.src);
    document.body.appendChild(script);
};
window.onload = loadScript;
