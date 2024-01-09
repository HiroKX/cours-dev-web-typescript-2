import express from 'express';
import path from 'path';
import {listePersonnes} from "./ListePersonnes.js";
import {Personne} from "./Classes.js";
const __dirname = path.resolve();
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
