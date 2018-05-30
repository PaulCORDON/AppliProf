export class SousCompetence {
    public competenceId:number;
    public name:String;
    public progress:number;
    public sousCompetenceId:number;
    public description:String;
    public nomCompetenceMere:String;
    public nbFoisTest:Number;
    constructor(name:String,progression:number){
           this.name=name;
           this.progress=progression;
    } 
}