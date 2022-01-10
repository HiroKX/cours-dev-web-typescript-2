import {Personne,TypeDeTravail,Travailleur} from "./Interfaces.js";


let marc:Personne = {
    nom: "Petitdemange",
    prenom: "Marc",
    numTel: "+33611510957",
    age: 24,
    sexe: "m"
}

let chefWiggum:Travailleur = {
    nom: "Wiggum",
    prenom: "Clancy",
    numTel: "+33548759574",
    age: 45,
    sexe: 'm',
    travail: TypeDeTravail.POLICIER
}

let drHouse:Travailleur = {
    nom: "House",
    prenom: "Gregory",
    numTel: "+33548759574",
    age: 56,
    sexe: 'm',
    travail: TypeDeTravail.MEDECIN
};

//TODO Definir le type ici
const listePersonnes: = [marc,chefWiggum,drHouse];

export {listePersonnes};
