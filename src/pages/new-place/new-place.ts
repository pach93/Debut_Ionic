import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { PlacesService } from '../../services/places.service';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public placeService: PlacesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(place: Place) {
    this.placeService.addPlace(place);
    this.navCtrl.pop();
  }

}
