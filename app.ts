import express from 'express';
import {listePersonnes} from "./ListePersonnes.js";
import {Personne, Travailleur} from "./Interfaces.js";

let app = express();

app.get('', function(req,res) {
    res.send({
        listePersonnes,
    })
    //TODO Definir le type ici
    listePersonnes.forEach((personne: Personne) => {
       console.log(personne);
    });
});


app.listen("9000");
