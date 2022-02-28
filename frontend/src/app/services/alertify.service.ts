import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

successAlert(message: string){
  alertify.success(message);
}
errorAlert(message: string){
  alertify.error(message);
}
warningAlert(message: string){
  alertify.warning(message);
}


}
