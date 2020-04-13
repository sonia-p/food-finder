class Map {
    constructor (map, latitude, longitude,position, zoom){
        this.map = map,
        this.latitude = latitude,
        this.longitude = longitude,
        this.position = position,
        this.zoom = zoom
    }
}
let map, infoWindow, position;
let userMap = new Map ("","","","", 16);
import {restaurant1, restaurant2, restaurant3, restaurant4} from "./data"
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: userMap.latitude, lng: userMap.longitude},
        zoom: userMap.zoom,
    // personnalisation de la map
    styles :
    [
        {"elementType": "geometry","stylers": [{"color": "#ebe3cd"}]},
        {"elementType": "labels.text.fill","stylers": [{"color": "#523735"}]},
        {"elementType": "labels.text.stroke","stylers": [{"color": "#f5f1e6"}]},
        {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#c9b2a6"}]},
        {"featureType": "administrative.land_parcel","elementType": "geometry.stroke","stylers": [{ "color": "#dcd2be"}]},
        {"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#ae9e90"}]},
        { "featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#dfd2ae"}]},
        {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#dfd2ae"}]},
        { "featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#93817c"}]},
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#a5b076"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#447530"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#f5f1e6"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#fdfcf8"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#f8c967"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#e9bc62"
            }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#e98d58"
            }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#db8555"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#806b63"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8f7d77"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#ebe3cd"
            }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#b9d3c2"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#92998d"
            }
            ]
        }
        ]
    });   
    // marqueur à la position de l'utilisateur
    let marker = new google.maps.Marker({position: userMap.position, map: map});
    restaurant1.addRestaurantMarker();
    restaurant2.addRestaurantMarker();
    restaurant3.addRestaurantMarker();
    restaurant4.addRestaurantMarker(); 
    // geolocalisation de l'utilisateur
    infoWindow = new google.maps.InfoWindow;
        // geolocation du user
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            userMap.latitude = position.coords.latitude;
            userMap.longitude = position.coords.longitude;
            userMap.position = {lat: userMap.latitude, lng: userMap.longitude};
            let pos = userMap.position;
            console.log(typeof(pos));
            console.log(typeof(userMap.latitude));
            console.log(pos);
            console.log(userMap.position);
            infoWindow.setPosition(pos);
            infoWindow.setContent('Tu es là !');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    




export {initMap};
window.map = map; //rattache la fonction au scope global
