import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "rxjs/add/operator/map";
import { Http } from '@angular/http';
import { GalleryService } from '../../services/gallery.service';
import { DetailImagePage } from '../detail-image/detail-image';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
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
  motCle:string="";
  size:number=10;
  currentPage:number=1;
  totalPages:number;
  images:any={hits:[]};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,  
              private galleryService:GalleryService,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch(){
    
    this.images.hits = [];
    this.doSearch();

   
  }

  doSearch(){
    let loading = this.loadingCtrl.create({
      content : "Kharal some....."
    });
    loading.present();
    this.galleryService.chercher(this.motCle, this.size,this.currentPage)
    .subscribe(data=>{
      this.totalPages = data.totalHits / this.size;
      if(data.totalHits % this.size !=0) ++this.totalPages;
      data.hits.forEach(h => {
        this.images.hits.push(h);
      });
      setTimeout(() => {
        loading.dismiss();
      }, 3000);
    },err=>{
      console.log(err);
      setTimeout(() => {
        loading.dismiss();
      }, 3000);
    })
//Methode sans utilisation de services
  //   this.http.get("https://pixabay.com/api/?key=7956418-3b0c223fece3d6a14ce0a6e8e&q="+this.motCle+"&per_page=10&page=1")
  //   .map(resp=>resp.json())
  //   .subscribe(data=>{
  //     this.images = data;
  //   },err=>{
  //     console.log(err);
  //   })
  }

  doInfinite(infinite){
    if(this.currentPage < this.totalPages){
      ++this.currentPage;
      this.doSearch();
      infinite.complete();
    }
    
  }

  onDetailImage(im){
    this.navCtrl.push(DetailImagePage, {myImage:im}); 
  }

}
