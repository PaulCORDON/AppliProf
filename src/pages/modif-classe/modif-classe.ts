import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Classe } from '../../model/Classe';
import { Eleve } from '../../model/Eleve';

/**
 * Generated class for the ModifClassePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-classe',
  templateUrl: 'modif-classe.html',
})
export class ModifClassePage {
  classe : Classe;
  listeEleve : Eleve[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.classe=this.navParams.get("classe")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifClassePage');
  }

}
