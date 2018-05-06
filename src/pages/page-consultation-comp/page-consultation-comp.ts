import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Classe } from '../../model/Classe';
import { Eleve } from '../../model/Eleve';

/**
 * Generated class for the PageConsultationCompPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-consultation-comp',
  templateUrl: 'page-consultation-comp.html',
})
export class PageConsultationCompPage {
  listeClasse: Classe[] = [];
  listeEleve: Eleve[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageConsultationCompPage');
  }

}
