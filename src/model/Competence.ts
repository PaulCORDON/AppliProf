import { SousCompetence } from "./SousCompetence";

export class Competence {
    public id:number;
    public name:String;
    public progress:number;
    public listeSousCompetence: Array<SousCompetence>;
   
    constructor(name:String,listeSousCompetence: SousCompetence[]){
           this.name=name;
           this.listeSousCompetence=listeSousCompetence;
           let somme=0;
           let compteur=0;
           listeSousCompetence.forEach(e => {               
                somme = e.progress+somme;
                compteur++;
           });
           this.progress=somme/compteur;
    } 
}