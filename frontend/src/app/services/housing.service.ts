import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPropertyBase } from '../interfaces/IPropertiebase.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number):Observable<IPropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=> {
        const propertiesArray: Array<IPropertyBase> = [];
        console.log();

        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
