export interface Fruit{
    nom: string;
    poids: number;
    mure: boolean;
}

export interface Personne{
    nom: string;
    prenom: string;
    age: number;
    numTel: string;
    sexe: "m"|"f";
    fruits: Fruit[];
}