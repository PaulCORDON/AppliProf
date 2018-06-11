import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ParamEm2 } from '../../model/ParamEm2';
import { ParamEl1 } from '../../model/ParamEl1';
import { ParamEm1 } from '../../model/ParamEm1';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the ParamEnregistresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-param-enregistres',
  templateUrl: 'param-enregistres.html',
})
export class ParamEnregistresPage {
  listeParamEl1: Array<ParamEl1>;
  listeParamEm1: Array<ParamEm1>;
  listeParamEm2: Array<ParamEm2>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice: ApiServiceProvider, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamEnregistresPage');
    this.apiservice.getAllParamEl1()
      .then((rep) => {
        this.listeParamEl1 = rep;
        console.log(`getParamEl1 ok`);
      })
      .catch((err) => {
        console.log(`getParamEl1 ${JSON.stringify(err)}`);
      });

    this.apiservice.getAllParamEm1()
      .then((rep) => {
        this.listeParamEm1 = rep;
        console.log(`getParamEm1 ok`);
      })
      .catch((err) => {
        console.log(`getParamEm1 ${JSON.stringify(err)}`);
      });

    this.apiservice.getAllParamEm2()
      .then((rep) => {
        this.listeParamEm2 = rep;
        console.log(`getParamEm2 ok`);

      })
      .catch((err) => {
        console.log(`getParamEm2 ${JSON.stringify(err)}`);
      });
  }
  onClickAppliParamEl1(param: ParamEl1) {
    this.navCtrl.push(`AppliquerParamPage`, { paramEl1: param, paramEm1: null, paramEm2: null });
  }
  onClickAppliParamEm1(param: ParamEm1) {
    this.navCtrl.push(`AppliquerParamPage`, { paramEl1: null, paramEm1: param, paramEm2: null });
  }
  onClickAppliParamEm2(param: ParamEm2) {
    this.navCtrl.push(`AppliquerParamPage`, { paramEl1: null, paramEm1: null, paramEm2: param });
  }
  onClickSuppParamEm1(param: ParamEm1) {
    this.apiservice.deleteParam("paramEm1", param.nom).then(() => {
      this.listeParamEm1.splice(this.listeParamEm1.indexOf(param), 1);
      console.log(param.nom + " est supprimé")
    });
  }
  onClickSuppParamEm2(param: ParamEm2) {
    this.apiservice.deleteParam("paramEm2", param.nom).then(() => {
      this.listeParamEm2.splice(this.listeParamEm2.indexOf(param), 1);
      console.log(param.nom + " est supprimé")
    });
  }
  onClickSuppParamEl1(param: ParamEl1) {
    this.apiservice.deleteParam("paramEl1", param.nom).then(() => {
      this.listeParamEl1.splice(this.listeParamEl1.indexOf(param), 1);
      console.log(param.nom + " est supprimé")
    });
  }
}
