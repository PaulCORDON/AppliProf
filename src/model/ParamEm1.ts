import { ParamMath } from "./ParamMath";

export class ParamEm1 extends ParamMath{
	public  nbBornes:Number;
    /**
     * Nombre de bornes
     */

    public nbQuestions:Number;
    /**
     * Nombre de question
     */

    /*TODO modifier pour l'associer à ordre d'apparition,
        calcul apparait disparait puis borne apparait
        OU
        bornes apparaissent disparaissent puis calcul apparait
     */
    public  disparition:Boolean;
    /**
     * Vrai : le premier element disparait, Faux : les deux elements s'affiche en meme temps
     */

    public tempsRestantApparant:Number;
    /**
     * temps pendant lequel le premier element affiché reste apparant dans le cas ou il disparait
     */

    public ordreApparition:Boolean;
    /**
     * Vrai : calcul puis bornes, Faux : bornes puis calcul
     */

    public borneSelectionnable:Boolean;
    /**
     * Vrai : la borne peut etre le resultat où il faut cliquer, Faux : les bornes ne seront jamais egales aux resultats
     */

    public borneEqualsOp:Boolean;
    /**
     * Vrai : une bornes est toujours egale à un opérande à +/- distance , Faux : les bornes sont aléatoires
     */
    //TODO paramètre distance entre borne et opérande dans le cas où une borne doit etre proche d'un opérande

    public valMax:Number;

    /**
     * Valeur maximale présente dans l'exercice
     */
    //TODO ajouter valMin, valeur minimum présente dans l'exercice

    public frise:Boolean;

    /**
     * boolean pour dire si l'exercice utilisera une frise ou des boutons
     */   

    public constructor(f:Boolean ,t:Number,p:Boolean,o:Boolean[],nbb:Number,nbq:Number,d:Boolean,tra:Number,oa:Boolean,bs:Boolean,beo:Boolean,vm:Number)
    /**
     * Constructeur de paramètres personalisés
     */
    {
        super(t, p, o);
        this.frise = f;
        this.nbBornes = nbb;
        this.nbQuestions = nbq;
        this.disparition = d;
        this.tempsRestantApparant = tra;
        this.ordreApparition = oa;
        this.borneSelectionnable = bs;
        this.borneEqualsOp = beo;
        this.valMax = vm;
    }

}