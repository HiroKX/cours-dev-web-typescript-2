interface Personne {
    nom:string,
    prenom:string,
    numTel:string,
    age: number,
    sexe: string,
    travail?: TypeDeTravail
}

enum TypeDeTravail {
    MEDECIN="Medecin",
    POLICIER="Policier",
    DEVELOPPEUR="Developpeur",
    ENSEIGNANT="Enseignant"
}

export {Personne,TypeDeTravail};
