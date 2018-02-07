import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class MeteoService {
    constructor(private http: Http) {

    }

    chercher(ville){
      return  this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+ville+"&APPID=03f55c4de1dddf28d42b78325d44545d")
        .map(resp=>resp.json());
    }
}