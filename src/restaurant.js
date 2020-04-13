import {apiKey,streetViewApiKey} from "./apikey"
export class Restaurant {
    constructor (name, address, latitude, longitude,position, ratings, averageRating,marker){
        this.name = name,
        this.address = address,
        this.latitude = latitude,
        this.longitude = longitude,
        this.position = position,
        this.ratings = ratings,
        this.averageRating = averageRating,
        this.marker= marker
    }
    average(){
        let sumRatings=0;
        let nb=0;
        for(let i=0; i< this.ratings.length; i++){
            sumRatings = sumRatings + this.ratings[i].stars;
            nb+=1;
        }
        this.averageRating=parseInt(sumRatings/nb);
    }
    generateRestaurantList(){
        $('.result').append(`
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="https://maps.googleapis.com/maps/api/streetview?size=250x250&location=${this.latitude},${this.longitude}&key=${streetViewApiKey}" class="card-img" alt="image google street view">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.address}</p>
                        <p class="card-text"><small class="text-muted">Note Moyenne : ${this.averageRating}</small></p>
                        <button type="button" class="btn btn-secondary">Visiter</button>                       
                        <!-- Boutton ouvrant la modal pour lire les avis-->
                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#commentsModal" onclick=${this.generateCommentsOnModal()}>
                        Voir les avis
                        </button>
                        <div class="modal fade" id="commentsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <!-- avis dans la modal -->                        
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">${this.name}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                  <!-- génération des avis dans la modal -->
                                  
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" class="btn btn-secondary">Ajouter un avis</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        `);
    }
    generateCommentsOnModal(){        
        for(let i=0; i<this.ratings.length; i++){
            $('.modal-body').append(`           
            <p>Note : ${this.ratings[i].stars}</p>
            <p>Commentaire : ${this.ratings[i].comment}</p><br>
            `)
        }                  
    }
    addRestaurantMarker(){
        let myLatLng = new google.maps.LatLng({lat:this.latitude,lng:this.longitude});
        this.position = new google.maps.LatLng(this.latitude,this.longitude);      
        console.log(this.latitude);
        console.log(typeof(this.latitude));
        console.log(this.longitude);
        console.log(typeof(this.longitude));
        console.log(typeof(this.position));
        console.log(this.position);
        console.log(myLatLng);
        console.log(typeof(myLatLng));
        var marker = new google.maps.Marker({
            position : myLatLng,
            map: map,
            title : 'hello'
        });
        console.log(this.marker);
    }


}



