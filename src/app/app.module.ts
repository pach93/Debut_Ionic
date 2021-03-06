import { PlacesPage } from './../pages/places/places';
import { MeteoPage } from './../pages/meteo/meteo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { HttpModule } from '@angular/http';
import { GalleryService } from '../services/gallery.service';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { MeteoService } from '../services/meteo.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage, GalleryPage, MeteoPage, PlacesPage, DetailImagePage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, GalleryPage, MeteoPage, PlacesPage, DetailImagePage
  ],
  providers: [
    StatusBar, GalleryService,MeteoService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
