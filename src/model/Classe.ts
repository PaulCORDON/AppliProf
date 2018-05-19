import { Eleve } from "./Eleve";

export class Classe {
     
    public nom:String;
    public listeEleve: Eleve[];
    
    constructor(name:String,listeEleve: Eleve[]){
        this.nom=name;
        this.listeEleve=listeEleve;
        } 
}