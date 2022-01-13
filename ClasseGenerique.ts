/**
 * Classe permettant d'effectuer des actions sur des tableaux (Surcouche aux arrays)
 */
export class IterationSurTableau<T>{
    tableau:Array<T>;

    constructor(tableau: Array<T>) {
        this.tableau = tableau;
    }

    /**
     * Fonction ayant pour but d'afficher les données du tableau dans la console
     * @return void
     */
    public printData() : void {
        this.tableau.forEach(((value:T) => console.log(value)));
    }

    /**
     * Fonction ayant pour but de trier les données du tableau
     * @return void
     */
    public sortData() : void {
        this.tableau = [...this.tableau].sort();
    }

    /**
     * Fonction ayant pour but de trier les données du tableau
     * @return void
     */
    public sortDataByFonction(fonction:(a:T,b:T) => number) : void {
        this.tableau = [...this.tableau].sort(fonction);
    }

    /**
     * Fonction ayant pour but de filtrer les données d'un tableau pour ne garder que celle qui <u><b>SONT</b></u> égales à la valeure passée en paramètres
     * @param valeur valeur servant de comparatif
     */
    public filterEquals(valeur:T):Array<T>{
        return this.tableau.filter(value => value === valeur);
    }

    /**
     * Fonction ayant pour but de filtrer les données d'un tableau pour ne garder que celle qui <u><b>NE SONT PAS</b></u> égales à la valeure passée en paramètres
     * @param valeur valeur servant de comparatif
     */
    public filterNoEquals(valeur:T):Array<T>{
        return this.tableau.filter(value => value !== valeur);
    }

    /**
     * Fonction ayant pour but d'ajouter une données
     * @param valeur
     * @return T La valeure ajoutée dans le tableau
     */
    public addData(valeur:T): T{
        this.tableau.push(valeur);
        return valeur;
    }

}
