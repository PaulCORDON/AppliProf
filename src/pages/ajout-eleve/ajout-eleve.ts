import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Classe } from '../../model/Classe';
import { Eleve } from '../../model/Eleve';

/**
 * Generated class for the AjoutElevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-eleve',
  templateUrl: 'ajout-eleve.html',
})
export class AjoutElevePage {
  classe:Classe;
  eleve:Eleve;
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiservice:ApiServiceProvider, public alert: AlertController) {
    this.classe=this.navParams.get("classe")
    this.eleve=this.navParams.get("eleve")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutElevePage');
  }
  onClickSaveClasse(){
   
  }
}
