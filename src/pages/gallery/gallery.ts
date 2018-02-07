import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "rxjs/add/operator/map";
import { Http } from '@angular/http';
import { GalleryService } from '../../services/gallery.service';
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
    private galleryService:GalleryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch(){
    this.galleryService.chercher(this.motCle, this.size,this.currentPage)
    .subscribe(data=>{
      this.totalPages = data.totalHits / this.size;
      if(data.totalHits % this.size !=0) ++this.totalPages;
      data.hits.forEach(h => {
        this.images.hits.push(h);
      });
    },err=>{
      console.log(err);
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
      this.onSearch();
      infinite.complete();
    }
    
  }

}
