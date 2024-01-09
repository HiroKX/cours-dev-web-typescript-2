export class Personne{
    nom:string;
    prenom:string;
    numTel:string;
    age:number;
    sexe:"m"|"f";

    constructor(nom:string,prenom:string,numTel:string,age:number,sexe:"m"|"f"){
        this.nom = nom;
        this.prenom = prenom;
        this.numTel = numTel;
        this.age = age;
        this.sexe = sexe;
    }

    nomEntier():string{
        return this.nom + " " + this.prenom;
    }
}

export class Informaticien extends Personne{
    languages:string[];
    entreprise:string;

    constructor(nom:string,prenom:string,numTel:string,age:number,sexe:"m"|"f",languages:string[],entreprise:string){
        super(nom,prenom,numTel,age,sexe)
        this.languages = languages;
        this.entreprise = entreprise;
    }
}

export class Medecin extends Personne{
    hopital:string;
    specialite:string;

    constructor(nom:string,prenom:string,numTel:string,age:number,sexe:"m"|"f",hopital:string,specialite:string){
        super(nom,prenom,numTel,age,sexe)
        this.hopital = hopital;
        this.specialite = specialite;
    }
}