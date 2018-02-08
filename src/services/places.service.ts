import { Injectable } from "@angular/core";
import { Place } from "../model/place.model";
import { PlacesPage } from "../pages/places/places";
import { Storage } from "@ionic/storage/dist/storage";


@Injectable()
export class PlacesService {

    constructor(public storage:Storage){

    }

    private places: Array<Place> = [
        { title: "A" }, { title: "B" }, { title: "C" }
    ];

    addPlace(place: Place) {
        place.timestamp = new Date().getTime();
        this.places.push(place);
        this.storage.set('places',this.places);
    }

    getAllPlaces() {
        return this.storage.get('places')
        .then(data=>{
            this.places = data!=null?data:[];
            return this.places;
        })
        
    }
}