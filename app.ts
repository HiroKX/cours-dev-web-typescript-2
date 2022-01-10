import express from 'express';
import {listePersonnes} from "./ListePersonnes.js";
import {Personne} from "./Classes";

let app = express();

app.get('', function(req,res) {
    res.send({
        listePersonnes,
    })

    listePersonnes.forEach((personne:Personne) => {
       console.log(personne.nomEntier());
    });
});


app.listen("9000");
