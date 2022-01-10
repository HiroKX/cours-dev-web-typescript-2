import {Informaticien, Medecin, Personne} from "./Classes.js";


let marc:Personne = new Personne(
     "Petitdemange",
     "Marc",
     "+33611510957",
     24,
     "m"
);

let misterRobot:Informaticien = new Informaticien(
    "Robot",
    "Mister",
    "+33548759574",
    26,
    'm',
    ["python", "typescript","node","angular"],
    "Aucune haha ! Contre la corporation ! #D3a6 4 K0rp0r8"
);

let drHouse:Medecin = new Medecin(
    "Nahasapeemapetilon",
    "Apu",
    "+33548754574",
    45,
    'm',
     "Princeton-Plainsboro",
     "Diagnosticien"
);


const listePersonnes:Personne[] = [marc,misterRobot,drHouse];

export {listePersonnes};
