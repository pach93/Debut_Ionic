import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class GalleryService{
    public host:string="https://pixabay.com/api";
    constructor(private http:Http){

    }

    chercher(query:string, size:number, page:number){
        return this.http.get(this.host+"?key=7956418-3b0c223fece3d6a14ce0a6e8e&q="
        +query+"&per_page="+size+"&page="+page)
        .map(resp=>resp.json()); 
    }
}