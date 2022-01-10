import express from 'express';
import {listePersonnes} from "./ListePersonnes.js";
import {Personne, Travailleur} from "./Interfaces";

let app = express();

app.get('', function(req,res) {
    res.send({
        listePersonnes,
    })
    //TODO Definir le type ici
    listePersonnes.forEach((personne) => {
       console.log(personne);
    });
});


app.listen("9000");
