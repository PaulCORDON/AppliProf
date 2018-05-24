export class ParamEl1{
    /**
     * nom du parametre donner par le prof
     */
    public nom:String;
    /**
     * Nombre de mots contenue dans l'émoncé
     */
    public nbEnonce:Number;

    /**
     * Temps d'apparition de chaque proposition de réponces
     */
    public tempsApparution:Number;

    /**
     * Nombre de proposition qui seront faite à l'élève
     */
    public nbApparition:Number;

    /**
     * Vrai : Les propositions pourront apparaitre en meme temps ou pendant qu'une autre est encore affichée.
     * Faux : Les propositions apparaitront les unes apprait les autres.
     */
    public  multipleApparution:Boolean;

    /**
     * Si multipleApparution est égale à vrai on pourra choisir le nombre d'apparition simultanée
     */
    public nbAparitionSimultanee:Number;

    /**
     * Vrai : L'énoncé disparaitra au bout d'un certain temps.
     * Faux : L'énoncé ne disparaitra pas.
     */
    public  enonceDisparait:Boolean;

    /**
     * Temps au bout duquel l'énoncé disparaitra si elle peut disparaitre.
     */
    public tempsEnonce:Number;


    /**
     * Constructeur de ParamEl1 il permet de récupérer les infos saisi dans ModifParamEl1Activity.
     *
     * @param nbEnonce           Nombre de mots contenue dans l'émoncé
     * @param tempsApparution    Temps d'apparition de chaque proposition de réponces
     * @param nbApparution       Nombre de proposition qui seront faite à l'élève
     * @param multipleApparution Vrai : Les propositions pourront apparaitre en meme temps ou pendant qu'une autre est encore affichée.
     *                           Faux : Les propositions apparaitront les unes apprait les autres.
     * @param enonceDisparait    Vrai : L'énoncé disparaitra au bout d'un certain temps.
     *                           Faux : L'énoncé ne disparaitra pas.
     */
    public constructor(nom:String, nbEnonce:Number,tempsApparution:Number,nbApparution:Number,multipleApparution:Boolean,enonceDisparait:Boolean,nbAparitionSimultanee:Number) {
        this.nom=nom;
        this.enonceDisparait = enonceDisparait;
        this.multipleApparution = multipleApparution;
        this.nbApparition = nbApparution;
        this.tempsApparution = tempsApparution;
        this.nbEnonce = nbEnonce;
        this.nbAparitionSimultanee = nbAparitionSimultanee;
    }

   
}