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
  listeParamEl1:Array<ParamEl1>;
  listeParamEm1:Array<ParamEm1>;
  listeParamEm2:Array<ParamEm2>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice:ApiServiceProvider, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamEnregistresPage');
    this.apiservice.getAllParamEl1()
    .then((rep) => {
      this.listeParamEl1=rep;
      console.log(`getParamEl1 ok`);
  
    })
    .catch((err) => {
      console.log(`getParamEl1 ${JSON.stringify(err)}`);
    });

    this.apiservice.getAllParamEm1()
    .then((rep) => {
      this.listeParamEm1=rep;
      console.log(`getParamEm1 ok`);
  
    })
    .catch((err) => {
      console.log(`getParamEm1 ${JSON.stringify(err)}`);
    });

    this.apiservice.getAllParamEm2()
    .then((rep) => {
      this.listeParamEm2=rep;
      console.log(`getParamEm2 ok`);
  
    })
    .catch((err) => {
      console.log(`getParamEm2 ${JSON.stringify(err)}`);
    });
  }

}
