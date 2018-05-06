import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardAccueuil } from '../../model/CardAccueil';
import { ModifParamEm1Page } from '../modif-param-em1/modif-param-em1';
import { ModifParamEm2Page } from '../modif-param-em2/modif-param-em2';
import { ModifParamEl1Page } from '../modif-param-el1/modif-param-el1';
import { ParamEnregistresPage } from '../param-enregistres/param-enregistres';

/**
 * Generated class for the PageMenuParamExoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-menu-param-exo',
  templateUrl: 'page-menu-param-exo.html',
})
export class PageMenuParamExoPage {
  listeCard: CardAccueuil[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listeCard = [];   
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Exercice 1 Calcul",ModifParamEm1Page));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Exercice 2 Calcul",ModifParamEm2Page));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Exercice 1 Lecture",ModifParamEl1Page));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Paramètres enregistrés",ParamEnregistresPage));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageMenuParamExoPage');
  }

  onClickCardAccueil(card:CardAccueuil){
    this.navCtrl.push(card.page);
  }
}
