import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ParamEm1 } from '../../model/ParamEm1';
import { ParamEm2 } from '../../model/ParamEm2';
import { ParamEl1 } from '../../model/ParamEl1';
import { Classe } from '../../model/Classe';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the AppliquerParamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appliquer-param',
  templateUrl: 'appliquer-param.html',
})
export class AppliquerParamPage {
  paramEm1:ParamEm1;
  paramEm2:ParamEm2;
  paramEl1:ParamEl1;
  listeClasse:Array<Classe>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice:ApiServiceProvider, public alert: AlertController) {
    this.paramEl1=this.navParams.get("paramEl1");
    this.paramEm1=this.navParams.get("paramEm1");
    this.paramEm2=this.navParams.get("paramEm2");
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppliquerParamPage');
    this.apiservice.getAllClasse()
    .then((rep) => {
      this.listeClasse=rep;
      console.log(`getParamEm2 ok`);
  
    })
    .catch((err) => {
      console.log(`getParamEm2 ${JSON.stringify(err)}`);
    });
  }

}
