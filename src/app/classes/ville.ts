export class Ville {
    id: number | undefined;
    nom : string | undefined;
    codePostal : number | undefined;

    constructor( id? : number | undefined , nom? : string | undefined, codePostal? : number | undefined) {
        this.id = id;
        this.nom = nom;
        this.codePostal = codePostal;
    }

}
