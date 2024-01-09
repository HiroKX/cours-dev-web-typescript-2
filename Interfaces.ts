
export enum TypeDeTravail{
    POLICIER="policier",
    MEDECIN="medecin",
}

export interface Personne{
    nom:string;
    prenom:string;
    numTel:string;
    age:number;
    sexe:"m"|"f";
}

export interface Travail{
    travail:TypeDeTravail;
}

export type Travailleur = Personne & Travail;