import { Component, OnInit } from '@angular/core';
import {ArrItemService} from 'src/app/services/arr-item.service';
import {Item} from 'src/app/services/item.service';
import { DataHandlerService } from 'src/app/services/data-handler.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  item_name:string;
  price:string;
  shop_name:string;
  violated:boolean = false;

  items:Item[]; //an array of item object
  constructor(private arr_item:ArrItemService, private dataHandler: DataHandlerService) {
      //this.items= this.arr_item.items; //hardcoded way of getting data

      //dynamic way of getting data 

      this.dataHandler.getJSON().subscribe(data=>{
        this.items = data;  //when the data comes we run the function (data)=>
      });
   }
  ngOnInit() {
  }

  addTodo(){
    if(!Number.isNaN(parseFloat(this.price))){
    let item:Item = {

      name: this.item_name,
      shop: this.shop_name,
      price: this.price
    }
    this.items.push(item);
    this.violated = false;
    this.dataHandler.postJSON(this.items);
  }
  else{
    this.violated = true;

  }
}

  removeTodo(){

  }

}