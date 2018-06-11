
export class EnonceAEnvoyer {
     
 
    public listeMots: Array<String>;
    public mot1:String=null;
    public mot2:String=null;
    public mot3:String=null;
    public mot4:String=null;
    public mot5:String=null;
    public mot6:String=null;
    
    constructor(arSt:Array<String>){   
        this.listeMots=arSt;
        if(this.listeMots[0]!=null){
            this.mot1=this.listeMots[0];
        }
        if(this.listeMots[1]!=null){
            this.mot2=this.listeMots[1];
        }
        if(this.listeMots[2]!=null){
            this.mot3=this.listeMots[2];
        }
        if(this.listeMots[3]!=null){
            this.mot4=this.listeMots[3];
        }
        if(this.listeMots[4]!=null){
            this.mot5=this.listeMots[4];
        }
        if(this.listeMots[5]!=null){
            this.mot6=this.listeMots[5];
        }
    } 
   
   
}