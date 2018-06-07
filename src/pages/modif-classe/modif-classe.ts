import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Classe } from '../../model/Classe';
import { Eleve } from '../../model/Eleve';
import { AjoutElevePage } from '../ajout-eleve/ajout-eleve';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiservice:ApiServiceProvider, public alert: AlertController) {
    this.classe=this.navParams.get("classe")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifClassePage');
    this.listeEleve=this.classe.listeEleve;
    console.log(`getClasse ${JSON.stringify(this.classe.listeEleve)}`);
  }

  onClickAddEleve(){
    this.navCtrl.push(AjoutElevePage,{classe:this.classe});
  }

  onClickSupprEleve(eleve){
    this.apiservice.deleteEleve(eleve,this.classe).then(()=>{
      console.log(eleve.nomPrenom+' à bien été supprimé');
      this.apiservice.getClasses(this.classe.nom).then((rep)=>{
        this.classe=rep;
        this.navCtrl.push(ModifClassePage,{classe:this.classe});
        this.navCtrl.pop();
      });
    });
  }
}
