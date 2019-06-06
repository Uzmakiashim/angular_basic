import { Injectable } from '@angular/core';
import {Item} from 'src/app/services/item.service';
@Injectable({
  providedIn: 'root'
})
export class ArrItemService {
  //Java Script Object Notation (JSON) array => an array of JSON object
  items:Item[] 

  constructor() {  


   }
}
