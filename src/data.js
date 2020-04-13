import{Restaurant} from "./restaurant"

let restaurants =
[
    {
      name:"Bar Brasserie Le Soleil",
      address:"9 Boulevard Jules Ferry, 30470 Aimargues",
      latitude:43.687013,
      longitude:4.207999,
      ratings:[
          {
            stars:4,
            comment:"Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."
          },
          {
            stars:5,
            comment:"Tout simplement mon restaurant préféré !"
          }
       ]
    },
    {
       name:"Le Mazet",
       address:"3 Boulevard Saint-Louis, 30470 Aimargues",
       latitude:43.685779,
       longitude:4.207945,
       ratings:[
          {
             stars:5,
             comment:"Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"
          },
          {
             stars:5,
             comment:"J'ai trouvé ça correct, sans plus"
          }
       ]
    },
    {
      name:"La Pause d’Anaëlle",
      address:"17 Avenue des Anciens Combattants, 30470 Aimargues",
      latitude:43.685019,
      longitude:4.207409,
      ratings:[
         {
            stars:5,
            comment:"Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"
         },
         {
            stars:2,
            comment:"J'ai trouvé ça correct, sans plus"
         }
      ]
   }, {
      name:"Brasserie Le France by Simon - Aimargues",
      address:"1 Place Mont Redon, 30470 Aimargues",
      latitude:43.685469,
      longitude:4.208932,
      ratings:[
         {
            stars:5,
            comment:"Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"
         },
         {
            stars:5,
            comment:"J'ai trouvé ça correct, sans plus"
         }
      ]
   }
];
let restaurant1 = new Restaurant (restaurants[0].name, restaurants[0].address, restaurants[0].latitude, restaurants[0].longitude, restaurants[0].ratings,"");
let restaurant2 = new Restaurant (restaurants[1].name, restaurants[1].address, restaurants[1].latitude, restaurants[1].longitude, restaurants[1].ratings,"");
let restaurant3 = new Restaurant (restaurants[2].name, restaurants[2].address, restaurants[2].latitude, restaurants[2].longitude, restaurants[2].ratings,"");
let restaurant4 = new Restaurant (restaurants[3].name, restaurants[3].address, restaurants[3].latitude, restaurants[3].longitude, restaurants[3].ratings,"");
restaurant1.average();
restaurant2.average();
restaurant3.average();
restaurant4.average();
export {restaurant1, restaurant2, restaurant3, restaurant4}