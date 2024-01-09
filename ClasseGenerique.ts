/**
 * TODO
 * Classe permettant d'effectuer des actions sur des tableaux (Surcouche aux arrays)
 */
export class IterationSurTableau<T> {

    tableau:T[];

    constructor(tableau:T[]) {
        this.tableau = tableau;
    }

    /**
     * Fonction ayant pour but d'afficher les données du tableau dans la console
     * @return void
     */
    printData() {
        for(let i = 0; i < this.tableau.length; i++) {
            console.log(this.tableau[i]);
        }
    }

    /**
     * Fonction ayant pour but de trier les données du tableau
     * @return void
     */
    sortDataByFonction(fonctionDeTri:(p1:T,p2:T) => number) {
        this.tableau.sort(fonctionDeTri);
    }

    /**
     * Fonction ayant pour but d'ajouter une données
     * @param valeur
     * @return T La valeure ajoutée dans le tableau
     */

    addData(valeur:T):T {
        this.tableau.push(valeur);
        return valeur;
    }
}




