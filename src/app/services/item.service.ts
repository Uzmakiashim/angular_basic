import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Item {
  name:string;
  shop:string;
  price:string;
  constructor() { }
}
