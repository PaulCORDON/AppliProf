import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParamEm1 } from '../../model/ParamEm1';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the ModifParamEm1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-param-em1',
  templateUrl: 'modif-param-em1.html',
})
export class ModifParamEm1Page {
  typeRep: any = "boutton";
  nbBornes: Number = 1;
  nbBoutons: Number = 2;
  ordreBtn: Boolean = false;
  ordreFrise: Boolean = false;
  nbQuest: Number = 10;
  isDispAllow: Boolean = true;
  isPairAllow: Boolean = true;
  isBorneSelectAllow: Boolean = false;
  isBorneEgualOppAllow: Boolean = false;
  tpsRep: Number = 20;
  tpsAvDisp: Number = 10;
  valMaxRes: Number = 50;
  usePlus: Boolean = true;
  useMoins: Boolean = true;
  useMult: Boolean = false;
  useDiv: Boolean = false;
  isFrise: Boolean = true;
  tabOpp: Boolean[] = [false, false, false, false];
  nbb: Number;
  oa: Boolean;
  param: ParamEm1;
  nom: String="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiservice: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifParamEm1Page');
  }
  onchangeTpsRep() {

    if (this.tpsRep < this.tpsAvDisp) {
      this.tpsAvDisp = this.tpsRep
    }
  }
  onClickEnregistrerParam() {

    if (this.typeRep == "boutton") {
      this.isFrise = false;
      this.nbb = this.nbBoutons;
      this.oa = this.ordreBtn;
      this.isBorneSelectAllow = false;
      this.isBorneEgualOppAllow = false;
    }
    else {
      this.isFrise = true;
      this.nbb = this.nbBornes;
      this.oa = this.ordreFrise;
    }
    if (this.usePlus) {
      this.tabOpp[0] = true;
    }
    if (this.useMoins) {
      this.tabOpp[1] = true;
    }
    if (this.useMult) {
      this.tabOpp[2] = true;
    }
    if (this.useDiv) {
      this.tabOpp[3] = true;
    }

    this.param = new ParamEm1(this.nom, this.isFrise, this.tpsRep, this.isPairAllow, this.tabOpp, this.nbb, this.nbQuest, this.isDispAllow, this.tpsAvDisp, this.oa, this.isBorneSelectAllow, this.isBorneEgualOppAllow, this.valMaxRes);
    console.log(JSON.stringify(this.param));
    this.apiservice.addParamEm1(this.param).then(() => {
      console.log("ok");
      this.navCtrl.pop();
    })
  }


}
