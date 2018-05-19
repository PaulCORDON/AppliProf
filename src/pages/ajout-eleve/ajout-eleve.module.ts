import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutElevePage } from './ajout-eleve';

@NgModule({
  declarations: [
    AjoutElevePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutElevePage),
  ],
})
export class AjoutElevePageModule {}
