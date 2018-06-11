import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Enonce } from '../../model/Enonce';
import { ParamEl1 } from '../../model/ParamEl1';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { EnonceAEnvoyer } from '../../model/EnonceAEnvoyer';

/**
 * Generated class for the AppliquerEnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appliquer-enonce',
  templateUrl: 'appliquer-enonce.html',
})

export class AppliquerEnoncePage {
  listeEnonce:Array<Enonce>;
  enonceFinal:Array<String>;
  enon:EnonceAEnvoyer;
  listeParam:Array<ParamEl1>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice:ApiServiceProvider) {
    this.listeEnonce=navParams.get("listeEnonce");
  }

  ionViewDidLoad() {
    this.apiservice.getAllParamEl1()
    .then((rep) => {
      this.listeParam = rep;
      console.log(`getParamEl1 ok`);
    })
    .catch((err) => {
      console.log(`getParamEl1 ${JSON.stringify(err)}`);
    });
  }
  onClickAppliToParamEl1(){
    this.listeEnonce.forEach(enonce => {
      this.enonceFinal=[];
      enonce.listeMots.forEach(mot => {
        if(mot!=""){
          this.enonceFinal.push(mot);
        }
       
      });
      this.enon= new EnonceAEnvoyer(this.enonceFinal);
      this.listeParam.forEach(param => {
        if(param.isclicked){
          this.apiservice.applyEnonceParam(this.enon,param.nom).then(()=>{
          })
        }          
      });
    });
    this.navCtrl.popToRoot();
  }
  onClickparam(param:ParamEl1){
    if(param.isclicked){
      param.isclicked=false;
    }
    else{
      param.isclicked=true;
    }
  }
}
