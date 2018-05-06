import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Classe } from '../../model/Classe';
import { AjoutClassePage } from '../ajout-classe/ajout-classe';
import { ModifClassePage } from '../modif-classe/modif-classe';


/**
 * Generated class for the PageGestionEffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-gestion-eff',
  templateUrl: 'page-gestion-eff.html',
})
export class PageGestionEffPage {
  listeClasse: Classe[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageGestionEffPage');
  }
  onClickModifClasse(c:Classe){
    this.navCtrl.push(ModifClassePage,{classe:c});
  }
  onClickSupprClasse(c:Classe){
     //**TODO suprimmer une classe */
  }
  onClickAddClasse(){
    this.navCtrl.push(AjoutClassePage);
  }
}
