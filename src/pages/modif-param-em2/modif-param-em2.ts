import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParamEm2 } from '../../model/ParamEm2';

/**
 * Generated class for the ModifParamEm2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-param-em2',
  templateUrl: 'modif-param-em2.html',
})
export class ModifParamEm2Page {
  
  typeRep:any="deuxBtn";
  nbQuest:Number=10;
  valMaxOpp:Number=20;
  usePair:Boolean=true;
  useImpair:Boolean=true;
  usePlus:Boolean=true;
  useMoins:Boolean=true;
  useMult:Boolean=false;
  useDiv:Boolean=false;
  tpsRep:Number=20;
  param:ParamEm2;
  repDeuxB=false;
  repQuatreB=false;
  repPaveNum=false;
  pairOnly: boolean=false;
  tabOpp:Boolean[] = [false,false,false,false];
  nom:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifParamEm2Page');
  }
  onClickEnregistrerParam(){
    if(this.typeRep=="deuxBtn"){
      this.repDeuxB=true;
      
    }
    else if(this.typeRep=="quatreBtn"){
      this.repQuatreB=true;
      
    }
    else{
      this.repPaveNum=true;
    }
    if(this.usePair && !this.useImpair){
      this.pairOnly=true;
    }
    if(this.usePlus){
      this.tabOpp[0]=true;
    }
    if(this.useMoins){
      this.tabOpp[1]=true;
    }
    if(this.useMult){
      this.tabOpp[2]=true;
    }
    if(this.useDiv){
      this.tabOpp[3]=true;
    }
    this.param= new ParamEm2(this.nom,this.typeRep,this.nbQuest,this.valMaxOpp,this.usePair,this.useImpair,this.repDeuxB,this.repQuatreB,this.repPaveNum,this.tpsRep,this.pairOnly,this.tabOpp);
    console.log(JSON.stringify(this.param));
  }

}
