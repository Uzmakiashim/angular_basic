import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from 'src/app/services/item.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class DataHandlerService {

  items = [];
  constructor(private http: HttpClient) {
    (this.getJSON()).subscribe(data => {
      console.log(data);
    });

  }

  getJSON(): Observable<any> {
    return this.http.get("http://localhost:3000/getitems");
  }

  postJSON(items:Item[]):Observable<any>{
    return this.http.post("http://localhost:3000/additem",items,httpOptions);
  }

}
