import express from 'express';
import {listePersonnes} from "./ListePersonnes.js";

let app = express();

app.get('', function(req,res) {


    res.send({
        listePersonnes
    })
});


app.listen("9000");
