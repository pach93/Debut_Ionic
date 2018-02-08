import { DetailPlacePage } from './../pages/detail-place/detail-place';
import { PlacesPage } from './../pages/places/places';
import { MeteoPage } from './../pages/meteo/meteo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { HttpModule } from '@angular/http';
import { GalleryService } from '../services/gallery.service';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { MeteoService } from '../services/meteo.service';
import { PlacesService } from '../services/places.service';
import { NewPlacePage } from '../pages/new-place/new-place';

@NgModule({
  declarations: [
    MyApp,
    HomePage, GalleryPage, MeteoPage, PlacesPage, DetailImagePage, NewPlacePage, DetailPlacePage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOMtuzXsuIJwHFshCSQyM8d6---NxhWxM'
    }),
    IonicStorageModule.forRoot({
      name: '__PlacesData',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, GalleryPage, MeteoPage, PlacesPage, DetailImagePage, NewPlacePage, DetailPlacePage
  ],
  providers: [
    StatusBar, GalleryService,MeteoService,PlacesService,Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
