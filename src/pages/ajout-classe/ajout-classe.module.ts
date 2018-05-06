import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutClassePage } from './ajout-classe';

@NgModule({
  declarations: [
    AjoutClassePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutClassePage),
  ],
})
export class AjoutClassePageModule {}
