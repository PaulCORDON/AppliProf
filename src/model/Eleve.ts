import { Competence } from "./Competence";

export class Eleve {
     
    public nomPrenom:String;
    public listeCompetence: Competence[];
    public dateDeNaissance:Date;
    public classeId:number;
   
    constructor(name:String,listeCompetence: Competence[]){
           this.nomPrenom=name;
           this.listeCompetence=listeCompetence;
    } 
}