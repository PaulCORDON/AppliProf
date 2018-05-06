import { Eleve } from "./Eleve";

export class Classe {
     
    public name:String;
    public listeEleve: Eleve[];
    
    constructor(name:String,listeEleve: Eleve[]){
        this.name=name;
        this.listeEleve=listeEleve;
        } 
}