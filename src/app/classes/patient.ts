import { Ville } from "./ville";

export class Patient {
    // comme java
    id : number; 
    nom : string;
    prenom:  string;
    telephone : string;
    email : string;
    ville : Ville;

    constructor( _id : number, _nom : string, _prenom : string, _telephone : string, _email : string, _ville : Ville) {
        this.id = _id;
        this.nom = _nom;
        this.prenom = _prenom;
        this.telephone = _telephone;
        this.email = _email;
        this.ville = _ville;
    }

    // construction et declaration en 1 ligne
    //constructor( private id : number, private nom : string, private prenom : string , private telephone : string, private email : string, private ville : string) {}
 
}
