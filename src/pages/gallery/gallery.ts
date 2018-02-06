import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "rxjs/add/operator/map";
import { Http } from '@angular/http';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motCle:String="";
  images:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch(){
    this.http.get("https://pixabay.com/api/?key=7956418-3b0c223fece3d6a14ce0a6e8e&q="+this.motCle+"&per_page=10&page=1")
    .map(resp=>resp.json())
    .subscribe(data=>{
      this.images = data;
      console.log(this.motCle)
    },err=>{
      console.log("fii"+err);
    })
  }

}
