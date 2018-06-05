import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Enonce } from '../../model/Enonce';

/**
 * Generated class for the PageScannerTextePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-scanner-texte',
  templateUrl: 'page-scanner-texte.html',
})
export class PageScannerTextePage {
  listeEnonce:Array<Enonce>=[];
  texte:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiservice:ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageScannerTextePage');
  }
  onClickPaper(){
    this.listeEnonce=[];
    this.texte.replace("."," ").replace(","," ").replace("?"," ").replace("!"," ").replace(";"," ").replace(":"," ").replace("\'"," ").split(" ").forEach(el => {
      if(el.length>= 4){
        this.apiservice.getEnonce(el).then((rep)=>{
        let en:Enonce= new Enonce(rep);
        this.listeEnonce.push(en);
        console.log(JSON.stringify(this.listeEnonce));
      })
      }
      
    });
   
  }
  onClickValider(){
    console.log(JSON.stringify(this.listeEnonce));
  }
  onClickSupprEnonce(enonc){
    let liste:Array<Enonce> = this.listeEnonce;
    this.listeEnonce=[];
    liste.forEach(el =>{
      if(el!=enonc){
        this.listeEnonce.push(el);
      }
    })
  }

  onChangeEnonce(enonc,value){
    enonc=value;
    console.log("coucou");
  }
}
