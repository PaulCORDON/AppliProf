import { ParamMath } from "./ParamMath";

export class ParamEm2 extends ParamMath {
    public operateur4: Boolean;
    public operateur3: Boolean;
    public operateur2: Boolean;
    public operateur1: Boolean;
    /**
     * nom du parametre donner par le prof
     */
    public nom:String;
    
    
    public typeRep: Number;
    /**
     * type de réponse à donner par l'élève
     */

    public nbCalcul: Number;
    /**
     * Nombre de question
     */

    public valMaxOperande: Number;

    public nombrePair: Boolean;
    public nombreImpair: Boolean;
    public typeNombre: Number;


    public repDeuxBornes: Boolean;
    public repQuatreBornes: Boolean;
    public repPaveNum: Boolean;
    public calcChaine: Boolean;

    public constructor(nom:String,typeRep: Number, nbCalcul: Number, valMaxOperande: Number, nombrePair: Boolean, nombreImpair: Boolean, repDeuxBornes: Boolean, repQuatreBornes: Boolean, repPaveNum: Boolean, t: Number, p: Boolean, o: Boolean[],c:Boolean)
        /**
        * Constructeur de paramètres personalisés
        */ {
       
        super(t, p, o);
        this.operateur1=o[0];
        this.operateur2=o[1];
        this.operateur3=o[3];
        this.operateur4=o[4];
        this.nom=nom;
        this.typeRep = typeRep;
        this.nbCalcul = nbCalcul;
        this.nombrePair = nombrePair;
        this.nombreImpair = nombreImpair;
        this.repDeuxBornes = repDeuxBornes;
        this.repQuatreBornes = repQuatreBornes;
        this.repPaveNum = repPaveNum;
        this.valMaxOperande = valMaxOperande;
        if (nombrePair) {
            this.typeNombre = 0;
        }
        if (nombreImpair) {
            this.typeNombre = 1;
        }
        if (nombreImpair && nombrePair) {
            this.typeNombre = 2;
        }
        this.calcChaine=c;

    }
}