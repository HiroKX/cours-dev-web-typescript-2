import express from 'express';
import {listePersonnes} from "./ListePersonnes.js";
import {Personne, Travailleur} from "./Interfaces";

let app = express();

app.get('', function(req,res) {
    res.send({
        listePersonnes,
    })

    listePersonnes.forEach((personne:Personne | Travailleur) => {
       console.log(personne);
    });
});


app.listen("9000");
