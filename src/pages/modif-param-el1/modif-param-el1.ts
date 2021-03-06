import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParamEl1 } from '../../model/ParamEl1';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the ModifParamEl1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-param-el1',
  templateUrl: 'modif-param-el1.html',
})
export class ModifParamEl1Page {
  isMultipleAppSimult: Boolean = false;
  isDispEnonce: Boolean = false;
  tpsRep: number = 7;
  nbMotTotal: Number = 20;
  nbProp: Number = 2;
  param: ParamEl1;
  tempsApp:Number;
  nom:String="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice:ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifParamEl1Page');
  }
  onClickEnregistrerParam() {
    if(!this.isMultipleAppSimult){
      this.nbProp=1;
    }
    
    this.tempsApp = this.tpsRep * 1000;
    this.param = new ParamEl1(this.nom,1, this.tempsApp, this.nbMotTotal, this.isMultipleAppSimult, this.isDispEnonce, this.nbProp);
    console.log(JSON.stringify(this.param));
    this.apiservice.addParamEl1(this.param).then(() => {
      console.log("ok");
      this.navCtrl.pop();
    })
  }
}
