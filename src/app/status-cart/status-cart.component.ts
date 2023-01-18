import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css'],
})
export class StatusCartComponent implements OnInit /* DoCheck */ /*OnChanges*/ {
  @Input() price: number;
  @Input() shopModel: Product[];
  @Output() add: EventEmitter<null> = new EventEmitter();

  constructor() {
    this.price = 0;
    this.shopModel = [];
  }

  ngOnInit(): void {}

  confirm() {
    this.add.emit();
  }
}
