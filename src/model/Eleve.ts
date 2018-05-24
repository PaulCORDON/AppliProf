import { Competence } from "./Competence";

export class Eleve {
     
    public nomPrenom:String;   
    public dateDeNaissance:Date;
    public classeId:number;
    public listeCompetence: Array<Competence>;
    public classeName: String ;
    constructor(name:String,classeId:number,dateDeNaissance:Date,classeName: String,listeCompetence: Competence[],){
           this.nomPrenom=name;
           this.classeId=classeId;
           this.dateDeNaissance=dateDeNaissance;
           this.listeCompetence=listeCompetence;
           this.classeName=classeName;
    } 
}