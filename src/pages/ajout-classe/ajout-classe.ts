import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Classe } from '../../model/Classe';


/**
 * Generated class for the AjoutClassePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-classe',
  templateUrl: 'ajout-classe.html',
})
export class AjoutClassePage {
  nom:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiservice:ApiServiceProvider, public alert: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutClassePage');
  }
  onClickSaveClasse(){
    this.apiservice.addClasse(new Classe(this.nom,null))
    .then(() => {
      console.log(`addClasse ok`);

    })
    .catch((err) => {
      console.log(`addClasse ${JSON.stringify(err)}`);
    });
  }
}
