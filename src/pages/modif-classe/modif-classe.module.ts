import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifClassePage } from './modif-classe';

@NgModule({
  declarations: [
    ModifClassePage,
  ],
  imports: [
    IonicPageModule.forChild(ModifClassePage),
  ],
})
export class ModifClassePageModule {}
