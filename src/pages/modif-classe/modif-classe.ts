import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Classe } from '../../model/Classe';
import { Eleve } from '../../model/Eleve';
import { AjoutElevePage } from '../ajout-eleve/ajout-eleve';

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
  listeEleve : Array<Eleve>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.classe=this.navParams.get("classe")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifClassePage');
    this.listeEleve=this.classe.listeEleve;
    console.log(`getClasse ${JSON.stringify(this.classe.listeEleve)}`);
  }
  onClickAddEleve(eleve){
    this.navCtrl.push(AjoutElevePage,{classe:this.classe,eleve:eleve});
  }
  onClickModifEleve(eleve){}
  onClickSupprEleve(eleve){}
}
