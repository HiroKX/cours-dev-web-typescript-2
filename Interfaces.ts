export enum TypeDeTravail {
    MEDECIN="Medecin",
    POLICIER="Policier",
    DEVELOPPEUR="Developpeur",
}

export interface Personne {
    nom:string,
    prenom:string,
    numTel:string,
    age: number,
    sexe: string,
}

export interface Travail {
    travail: TypeDeTravail
}

export type Travailleur = Travail & Personne;


