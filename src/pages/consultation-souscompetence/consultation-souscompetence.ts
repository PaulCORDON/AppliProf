import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Competence } from '../../model/Competence';
import { Eleve } from '../../model/Eleve';

/**
 * Generated class for the ConsultationSouscompetencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultation-souscompetence',
  templateUrl: 'consultation-souscompetence.html',
})
export class ConsultationSouscompetencePage {
  eleve:Eleve;
  comp:Competence;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comp=this.navParams.get("competence")
    this.eleve=this.navParams.get("eleve")
  }

  ionViewDidLoad() {
    console.log(`Onconsultation SousCompetence ${JSON.stringify(this.eleve)}`);
    
  }

}
