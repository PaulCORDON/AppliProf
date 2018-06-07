import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ParamEm1 } from '../../model/ParamEm1';
import { ParamEm2 } from '../../model/ParamEm2';
import { ParamEl1 } from '../../model/ParamEl1';
import { Classe } from '../../model/Classe';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Eleve } from '../../model/Eleve';

/**
 * Generated class for the AppliquerParamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appliquer-param',
  templateUrl: 'appliquer-param.html',
})
export class AppliquerParamPage {
  paramEm1: ParamEm1;
  paramEm2: ParamEm2;
  paramEl1: ParamEl1;
  nomParam: String;
  typeParam: String;
  listeClasse: Array<Classe>;
  listeDesElevesQuiOntLeParametre: Array<Eleve>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice: ApiServiceProvider, public alert: AlertController) {
    this.paramEl1 = this.navParams.get("paramEl1");
    this.paramEm1 = this.navParams.get("paramEm1");
    this.paramEm2 = this.navParams.get("paramEm2");
  }

  ionViewDidLoad() {
    if (this.paramEm1 != null) {
      this.nomParam = this.paramEm1.nom;
      this.typeParam = "paramEm1";
    }
    else if (this.paramEm2 != null) {
      this.nomParam = this.paramEm2.nom;
      this.typeParam = "paramEm2";
    }
    else {
      this.nomParam = this.paramEl1.nom;
      this.typeParam = "paramEl1";
    }

    console.log("TypeParam : " + JSON.stringify(this.typeParam) + "nomParam : " + JSON.stringify(this.nomParam));

    this.apiservice.getAllClasse()
      .then((rep) => {
        this.listeClasse = rep;
        console.log(`getAllClasse ok`);
        this.apiservice.getElevesAvecParam(this.nomParam, this.typeParam)
          .then((rep) => {
            this.listeDesElevesQuiOntLeParametre = rep;
            console.log(`getEleveParam ok`);
            this.listeDesElevesQuiOntLeParametre.forEach(eleve => {
              this.listeClasse.forEach(classe => {
                classe.listeEleve.forEach(e => {
                  if (eleve.nomPrenom == e.nomPrenom && eleve.dateDeNaissance == e.dateDeNaissance && e.classeName == eleve.classeName) {
                    e.haveTheParam = true;
                  }
                });

              });
              eleve.haveTheParam = true;
            });

          })
          .catch((err) => {
            console.log(`getEleveParam ${JSON.stringify(err)}`);
          });

      })
      .catch((err) => {
        console.log(`getAllClasse ${JSON.stringify(err)}`);
      });



  }
  onClickremoveEleve(eleve: Eleve) {
    eleve.haveTheParam = false;
  }
  onClickaddEleve(eleve: Eleve) {
    eleve.haveTheParam = true;
  }
  onClickaddClasse(cl: Classe) {
    cl.listeEleve.forEach(eleve => {
      eleve.haveTheParam = true;
    });
  }


  onValider() {
    this.apiservice.disapplyParam(this.typeParam, this.nomParam).then(() => {
      this.listeClasse.forEach(classe => {
        classe.listeEleve.forEach(eleve => {
          if (eleve.haveTheParam) {
            this.apiservice.applyParam(this.typeParam, this.nomParam, classe.nom, eleve.nomPrenom).then(() => {
              console.log(eleve.nomPrenom + " a recu " + this.nomParam + " comme paramètre " + this.typeParam);
            });
          }
        });
      });
    });
    this.navCtrl.pop();
  }
}
