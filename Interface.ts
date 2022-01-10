export interface Personne{
    nom:string,
    prenom:string,
    numTel:string,
    age: number,
    sexe: 'm',
    fruits: Fruit[]
}

export interface Fruit{
    nom: string,
    poids: number,
    mure: boolean
}
