import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageConsultationCompPage } from '../pages/page-consultation-comp/page-consultation-comp';
import { PageMenuParamExoPage } from '../pages/page-menu-param-exo/page-menu-param-exo';
import { PageScannerTextePage } from '../pages/page-scanner-texte/page-scanner-texte';
import { PageConsultationHistActPage } from '../pages/page-consultation-hist-act/page-consultation-hist-act';
import { PageParamSyExpertPage } from '../pages/page-param-sy-expert/page-param-sy-expert';
import { PageGestionEffPage } from '../pages/page-gestion-eff/page-gestion-eff';
import { ModifParamEm1Page } from '../pages/modif-param-em1/modif-param-em1';
import { ModifParamEm2Page } from '../pages/modif-param-em2/modif-param-em2';
import { ModifParamEl1Page } from '../pages/modif-param-el1/modif-param-el1';
import { ParamEnregistresPage } from '../pages/param-enregistres/param-enregistres';
import { AjoutClassePage } from '../pages/ajout-classe/ajout-classe';
import { ModifClassePage } from '../pages/modif-classe/modif-classe';
import { ApiServiceProvider } from '../providers/api-service/api-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageConsultationCompPage,
    PageMenuParamExoPage,
    PageScannerTextePage,
    PageConsultationHistActPage,
    PageGestionEffPage,
    PageParamSyExpertPage,
    ModifParamEm1Page,
    ModifParamEm2Page,
    ModifParamEl1Page,
    ParamEnregistresPage,
    AjoutClassePage,
    ModifClassePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageConsultationCompPage,
    PageMenuParamExoPage,
    PageScannerTextePage,
    PageConsultationHistActPage,
    PageGestionEffPage,
    PageParamSyExpertPage,
    ModifParamEm1Page,
    ModifParamEm2Page,
    ModifParamEl1Page,
    ParamEnregistresPage,
    AjoutClassePage,
    ModifClassePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider
  ]
  
})
export class AppModule {}
