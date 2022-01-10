class Personne {
    nom:string;
    prenom:string;
    numTel:string;
    age: number;
    sexe: 'm';

    constructor(nom: string, prenom: string, numTel: string, age: number, sexe: "m") {
        this.nom = nom;
        this.prenom = prenom;
        this.numTel = numTel;
        this.age = age;
        this.sexe = sexe;
    }

    nomEntier():string{
        return  this.prenom + " " + this.nom;
    }

}

class Informaticien extends Personne{
    languages:string[];
    entreprise:string;

    constructor(nom: string, prenom: string, numTel: string, age: number, sexe: "m", languages: string[], entreprise: string) {
        super(nom, prenom, numTel, age, sexe);
        this.languages = languages;
        this.entreprise = entreprise;
    }


    nomEntier(): string {
        return super.nomEntier();
    }
}

class Medecin extends Personne{
    hopital:string;
    specialisation:string;


    constructor(nom: string, prenom: string, numTel: string, age: number, sexe: "m", hopital: string, specialisation: string) {
        super(nom, prenom, numTel, age, sexe);
        this.hopital = hopital;
        this.specialisation = specialisation;
    }

    nomEntier(): string {
        return super.nomEntier();
    }
}

export {Personne,Medecin,Informaticien};
