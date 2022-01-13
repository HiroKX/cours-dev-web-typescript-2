import express from 'express';
import {listePersonnes} from "./ListePersonnes.js";
import {Personne, TypeDeTravail} from "./Interface.js";
import {IterationSurTableau} from "./ClasseGenerique.js";

let app = express();

app.get('', function(req,res) {
    let utilitaireTableau:IterationSurTableau<Personne> = new IterationSurTableau<Personne>(listePersonnes); //On utilise notre classe
    console.log("Données de base : \n");
    utilitaireTableau.printData();


    utilitaireTableau.sortDataByFonction(triPersonneParAge);
    console.log("Données triées par age \n");
    utilitaireTableau.printData();

    utilitaireTableau.addData({
        nom: "White",
        prenom: "Walter",
        age: 46,
        sexe:'m',
        numTel:'+33548759574',
        travail: TypeDeTravail.ENSEIGNANT
    });
    utilitaireTableau.sortDataByFonction(triPersonneParNom);
    console.log("Ajout du bon vieux Walter + Tri par nom :\n");
    utilitaireTableau.printData();

    res.send({
        data:utilitaireTableau.tableau
    })

});

function triPersonneParAge(p1:Personne, p2:Personne):number {
    return p1.age - p2.age;
}

function triPersonneParNom(p1:Personne, p2:Personne):number{
    return p1.nom.localeCompare(p2.nom);
}


app.listen("9000", () => console.log("Serveur opérationnel !"));
