export class Ville {
    id: number;
    nom : string;
    codePostal : number;

    constructor( id : number, nom : string, codePostal : number) {
        this.id = id;
        this.nom = nom;
        this.codePostal = codePostal;
    }

}
