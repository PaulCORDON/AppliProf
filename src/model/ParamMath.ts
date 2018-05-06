export abstract class ParamMath {
    /**
    * Temps avant de passer à la question suivante
    */
   public tempsRep:Number;

   /**
    * Vrai : on ne choisira que des nombres pair, Faux : les nombres impairs sont autorisés
    */
   public pairOnly:Boolean ;

   /**
    * Vrai : on peut choisir l'opérateur, Faux : on ne choisira pas cet opérateur
    * 0 : +
    * 1 : -
    * 2 : *
    * 3 : /
    */
   public operateur:Boolean[];

   /**
    * constructeur des paramètres personnalisés
    */
   constructor(t:Number,p:Boolean,o:Boolean[]) {
       this.tempsRep = t;
       this.pairOnly = p;
       this.operateur = o;
   }

}