import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MeteoService } from '../../services/meteo.service';

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  meteo: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private meteoService: MeteoService,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }

  onGetMeteo(dataForm) {
    let loading = this.loadingCtrl.create({
      content : "Kharal some....."
    });
    loading.present();
    this.meteoService.chercher(dataForm.ville)
      .subscribe(data => {
        this.meteo = data;
        console.log(this.meteo);
        setTimeout(() => {
          loading.dismiss();
        }, 3000);
      }, err => {
        console.log(err);
        setTimeout(() => {
          loading.dismiss();
        }, 3000);
      })
  }

}
