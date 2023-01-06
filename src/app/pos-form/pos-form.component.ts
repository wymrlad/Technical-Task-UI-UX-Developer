import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl } from '@angular/forms';
import { type } from 'os';

@Component({
  selector: 'app-pos-form',
  templateUrl: './pos-form.component.html',
  styleUrls: ['./pos-form.component.css']
})
export class PosFormComponent implements OnInit {

  totalData = 0;
  printVisible: boolean = false;
  addCart: boolean = true
  item: productType[] = []

  // Data For the Table
  items: productType[] = [
    { id: 1, items: 'Chocolate', price: 5, select: false },
    { id: 2, items: 'Biscuits', price: 10, select: false },
    { id: 3, items: 'Icecreams', price: 40, select: false },
    { id: 4, items: 'Milks', price: 22, select: false }

  ];

  constructor() {
  }

  ngOnInit(): void {
    this.cal();
  }
  public cal(): void {
    let total = 0;
    this.items.forEach((responce) => {
      if (responce.select)
        total += responce.price;

    });
    this.totalData = total;
    //console.log(this.grandtotal);
  }
  //Print Preview
  printPreview() {
    this.printVisible = true;
    this.addCart = false;
    for (let i in this.items) {

      if (this.items[i].select) {
        this.items = [{
          id: this.items[i].id,
          items: this.items[i].items,
          price: this.items[i].price
        }];
      }
      this.items.push();

    }
  }
  //Print The Data
  print() {
    this.printVisible = true
    for (let i in this.items) {

      if (this.items[i].select) {
        this.items = [{
          id: this.items[i].id,
          items: this.items[i].items,
          price: this.items[i].price
        }];
       // this.items.push();
      }
      window.print();
    }
  }
}

type productType = {
  id?: any;
  items?: any;
  price: number;
  select?: any
};