import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../interfaces/IProperties.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number):Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=> {
        const propertiesArray: Array<IProperty> = [];
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
