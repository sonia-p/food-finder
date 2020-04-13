import {apiKey} from "./apikey"
import {initMap} from "./map"
import {restaurant1, restaurant2, restaurant3, restaurant4} from "./data"
// générer le script google map en cachant la clé api dans gitignore
function loadScript(){
    var script = document.createElement("script");
    script.async= true;
    script.src=`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=init` ;
    document.body.appendChild(script);
}; 
window.onload = loadScript;
//initialise la carte
function init(){
    initMap();  
};

// génére la liste des restaurant
restaurant1.generateRestaurantList();
restaurant2.generateRestaurantList();
restaurant3.generateRestaurantList();
restaurant4.generateRestaurantList();
//rattache la fonction au scope global
window.init = init; 


