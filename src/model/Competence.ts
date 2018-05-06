import { SousCompetence } from "./SousCompetence";

export class Competence {
     
    public name:String;
    public progression:number;
    public listeSousCompetence: SousCompetence[];
   
    constructor(name:String,listeSousCompetence: SousCompetence[]){
           this.name=name;
           this.listeSousCompetence=listeSousCompetence;
           let somme=0;
           let compteur=0;
           listeSousCompetence.forEach(e => {               
                somme = e.progression+somme;
                compteur++;
           });
           this.progression=somme/compteur;
    } 
}