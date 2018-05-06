import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutClassePage');
  }
  onClickSaveClasse(){
    /**TODO sauvegarder classe */
  }
}
