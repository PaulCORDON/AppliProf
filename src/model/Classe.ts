import { Eleve } from "./Eleve";

export class Classe {
     
    public nom:String;
    public listeEleve: Array<Eleve>;
    public id: number;
    constructor(name:String,listeEleve: Array<Eleve>,id: number){
        this.nom=name;
        this.listeEleve=listeEleve;
        this.id=id;
        } 
}