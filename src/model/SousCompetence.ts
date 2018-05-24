export class SousCompetence {
    public competenceId:number;
    public name:String;
    public progression:number;
    public sousCompetenceId:number;
    public description:String;
   
    constructor(name:String,progression:number){
           this.name=name;
           this.progression=progression;
    } 
}