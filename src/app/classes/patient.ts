import { Ville } from "./ville";

export class Patient {
    // comme java
    id : number | undefined; 
    nom : string | undefined;
    prenom:  string | undefined;
    email : string | undefined;
    telephone : string | undefined;
    ville : Ville | undefined;

    constructor( _id? : number | undefined, _nom? : string | undefined, _prenom? : string | undefined,_email? : string | undefined, _telephone? : string | undefined, _ville? : Ville | undefined) {
        this.id = _id;
        this.nom = _nom;
        this.prenom = _prenom;
        this.email = _email;
        this.telephone = _telephone;
        this.ville = _ville;
    }

    // construction et declaration en 1 ligne
    //constructor( private id : number, private nom : string, private prenom : string , private telephone : string, private email : string, private ville : string) {}
 
}
