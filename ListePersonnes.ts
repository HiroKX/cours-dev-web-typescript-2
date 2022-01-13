import {Personne,TypeDeTravail} from "./Interface.js";


let marc:Personne = {
    nom: "Petitdemange",
    prenom: "Marc",
    numTel: "+33611510957",
    age: 24,
    sexe: "m",
}

let chefWiggum:Personne = {
    nom: "Wiggum",
    prenom: "Clancy",
    numTel: "+33548759574",
    age: 45,
    sexe: 'm',
    travail: TypeDeTravail.POLICIER
}

let drHouse:Personne = {
    nom: "House",
    prenom: "Gregory",
    numTel: "+33548759574",
    age: 56,
    sexe: 'm',
    travail: TypeDeTravail.MEDECIN
};


const listePersonnes:Personne[] = [chefWiggum,marc,drHouse];

export {listePersonnes};
