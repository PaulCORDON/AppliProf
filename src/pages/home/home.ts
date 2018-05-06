import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { CardAccueuil } from '../../model/CardAccueil';
import { PageConsultationCompPage } from '../page-consultation-comp/page-consultation-comp';
import { PageMenuParamExoPage } from '../page-menu-param-exo/page-menu-param-exo';
import { PageScannerTextePage } from '../page-scanner-texte/page-scanner-texte';
import { PageConsultationHistActPage } from '../page-consultation-hist-act/page-consultation-hist-act';
import { PageGestionEffPage } from '../page-gestion-eff/page-gestion-eff';
import { PageParamSyExpertPage } from '../page-param-sy-expert/page-param-sy-expert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listeCard: CardAccueuil[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.listeCard = [ {imgSource:"assets/imgs/ardoise.jpg", title:"Consultation des compétences", page:"PageConsultation"} 
    //];
    this.listeCard = [];   
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Consultation des compétences",PageConsultationCompPage));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Paramètrer les exercices",PageMenuParamExoPage));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Importer texte",PageScannerTextePage));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Historique activités élèves",PageConsultationHistActPage));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Gestion de l'effectif",PageGestionEffPage));
    this.listeCard.push(new CardAccueuil("assets/imgs/ardoise.jpg","Gestion du système expert",PageParamSyExpertPage));   
  }

  onClickCardAccueil(card:CardAccueuil){
    this.navCtrl.push(card.page);
  }

}
