import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Ipropertybase } from '../models/iproperty-base';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:number): Observable<Ipropertybase[]>{
   return this.http.get('data/properties.json').pipe(
    map(data=>{
      const propertiesArray:Array<Ipropertybase>=[];
      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].SellRent ===SellRent){
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    }));
  }
}
