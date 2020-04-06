const path = require("path"); // transforme un chemin relatif en absolut
module.exports = {
    watch : true,
    entry : './src/index.js', // point d'entrée du projet
    output : { // endroit ou le programme donne le résultat
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    devtool : "source-map", 
    devServer : { // serveur local webpack : ouvrir la page dans dist au démarrage
        contentBase : path.resolve(__dirname, "dist"),
        open : true
    }
}