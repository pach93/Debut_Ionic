import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact = {
    name : "pach",
    email: "dergui@sqkjk",
    photo : "assets/imgs/logo.png"
  }

  constructor(public navCtrl: NavController) {

  }

}
