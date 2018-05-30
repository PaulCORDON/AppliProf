import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Classe } from '../../model/Classe';
import { Eleve } from '../../model/Eleve';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Competence } from '../../model/Competence';
import { SousCompetence } from '../../model/SousCompetence';

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
  listeSousCompetenceCourent: SousCompetence[] = [];
  listeSousCompetence: SousCompetence[] = [];
  listeCompetence: Competence[] = [];
  listeClasse: Classe[] = [];
  listeEleve: Eleve[] = [];
  eleve: String;
  classe: String;
  classeSelect: Classe;
  nomCompMereCourent: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice: ApiServiceProvider, public alert: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageConsultationCompPage');

    this.apiservice.getAllClasse()
      .then((rep) => {
        this.listeClasse = rep;
        console.log(`getClasse ${JSON.stringify(this.listeClasse)}`);
      })
      .catch((err) => {
        console.log(`getClasse ${JSON.stringify(err)}`);
      });
  }

  onChangeClasse() {
    console.log(`onChange classe nom de la classe: ${JSON.stringify(this.classe)}`);
    this.listeClasse.forEach(cl => {
      if (cl.nom == this.classe) {
        this.classeSelect = cl;
        this.listeEleve = cl.listeEleve;
      }
    });
    console.log(`onChange classe la liste d'eleve : ${JSON.stringify(this.listeEleve)}`);
  }

  onChangeEleve() {
    this.listeCompetence = [];
    this.listeSousCompetence = [];
    this.listeEleve.forEach(el => {
      if (el.nomPrenom == this.eleve) {
        this.apiservice.getSousCompetencesEleve(el, this.classeSelect).then((rep) => {
          this.listeSousCompetence = rep;
          if (this.listeSousCompetence.length != 0) {
            console.log(`onChange eleve la liste de SousCompetence : ${JSON.stringify(this.listeSousCompetence)}`);
            this.nomCompMereCourent = this.listeSousCompetence[0].nomCompetenceMere;
            this.listeSousCompetence.forEach(sc => {
              if (this.nomCompMereCourent == sc.nomCompetenceMere) {
                this.listeSousCompetenceCourent.push(sc);
              }
              else {
                let c: Competence = new Competence(this.nomCompMereCourent, this.listeSousCompetenceCourent);
                this.listeCompetence.push(c);
                this.nomCompMereCourent = sc.nomCompetenceMere;
                this.listeSousCompetenceCourent = [];
                this.listeSousCompetenceCourent.push(sc);
              }

            });
            let c: Competence = new Competence(this.nomCompMereCourent, this.listeSousCompetenceCourent);
            this.listeCompetence.push(c);
            this.listeSousCompetenceCourent = [];
            console.log(`OnChange eleve ListeCompetence ${JSON.stringify(this.listeCompetence)}`);
          }
        })
      }
    });
  }

  onClickCardComp(comp) {
    console.log(`OnClick Card ${JSON.stringify(this.eleve)}`);
    this.navCtrl.push(`ConsultationSouscompetencePage`,{competence:comp,eleve:this.eleve});

  }
}
