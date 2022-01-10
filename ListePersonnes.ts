import {Personne,Fruit} from "./Interface.js";

let banane: Fruit = {
        nom:"banane",
        poids:0.5,
        mure: true
};

let fraise: Fruit = {
    nom:"fraise",
    poids:0.2,
    mure: true
};


let peche: Fruit = {
    nom:"peche",
    poids:0.3,
    mure: true
};

let pasteque: Fruit = {
    nom:"Pasteque",
    poids:1.5,
    mure: false,
};

let framboise: Fruit = {
    nom:"framboise",
    poids:0.1,
    mure: true,
};

let marc:Personne = {
    nom: "Petitdemange",
    prenom: "Marc",
    numTel: "+33611510957",
    age: 24,
    sexe: "m",
    fruits: [
        banane,
        fraise
    ]
};

let homer:Personne = {
    nom: "Homer",
    prenom: "Simpson",
    numTel: "+33548759574",
    age:45,
    sexe: 'm',
    fruits: [
        peche,
        pasteque
    ]
};
let apu:Personne = {
    nom: "Apu",
    prenom: "Nahasapeemapetilon",
    numTel: "+33548754574",
    age:45,
    sexe: 'm',
    fruits: [
        framboise
    ]
}


const listePersonnes:Personne[] = [marc,homer,apu];

export {listePersonnes};
