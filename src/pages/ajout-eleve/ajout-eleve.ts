import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Classe } from '../../model/Classe';
import { Eleve } from '../../model/Eleve';
import { Competence } from '../../model/Competence';


/**
 * Generated class for the AjoutElevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-eleve',
  templateUrl: 'ajout-eleve.html',
})
export class AjoutElevePage {
  classe:Classe;
  eleve:Eleve;
  nomPrenom:String;
  dateNaissance:Date;
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiservice:ApiServiceProvider, public alert: AlertController) {
    this.classe=this.navParams.get("classe")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutElevePage');
  }
  onClickSaveEleve(){
    this.eleve=new Eleve(this.nomPrenom,this.classe.id,this.dateNaissance,this.classe.nom,new Array<Competence>());
    console.log(JSON.stringify(this.eleve));
    this.apiservice.addEleve(this.eleve).then(()=>{
      this.classe.listeEleve.push(this.eleve);
      this.navCtrl.pop();
    })
      

  }
}
