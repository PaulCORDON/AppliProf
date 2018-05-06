import { Competence } from "./Competence";

export class Eleve {
     
    public name:String;
    public listeCompetence: Competence[];
    public dateDeNaissance:Date;
   
    constructor(name:String,listeCompetence: Competence[]){
           this.name=name;
           this.listeCompetence=listeCompetence;
    } 
}