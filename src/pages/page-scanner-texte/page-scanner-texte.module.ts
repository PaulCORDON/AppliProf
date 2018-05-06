import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageScannerTextePage } from './page-scanner-texte';

@NgModule({
  declarations: [
    PageScannerTextePage,
  ],
  imports: [
    IonicPageModule.forChild(PageScannerTextePage),
  ],
})
export class PageScannerTextePageModule {}
