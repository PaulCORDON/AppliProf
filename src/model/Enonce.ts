
export class Enonce {
     
 
    public listeMots: Array<String>;
    public resultat:String;
    constructor(arSt:Array<String>){
        console.log(JSON.stringify(arSt));  
        this.resultat="";
        arSt.forEach(element => {
            this.resultat=element+" "+this.resultat;
        });    
        console.log(JSON.stringify(this.resultat));   
        this.listeMots=arSt;
    } 

   
}