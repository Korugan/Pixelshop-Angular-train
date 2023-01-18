import {
  Component,
  OnInit,
  OnDestroy,
  ContentChildren,
  ViewChild,
} from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.css'],
})
export class StatefullComponent implements OnInit, OnDestroy {
  shopModel: Shop;
  boughtItems: Product[];
  priceItems: any;
  @ViewChild(ConfirmComponent, { static: false })
  confirmChild: any;
  errorHttp: boolean;
  private shopSubscription: any;

  constructor(private http: HttpClient) {
    this.shopModel = new Shop();
    this.shopModel = { shopItems: [] };
    this.boughtItems = [];
    this.priceItems = 0;
    this.errorHttp = false;
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: any) => {
        this.shopModel.shopItems = respuesta;
      },
      (respuesta: any) => {
        this.errorHttp = true;
      }
    );
  }

  ngOnDestroy() {
    this.shopSubscription.unsubscribe();
  }

  clickItem(_curso: Product) {
    this.boughtItems.push(_curso);
    this.priceItems += _curso.price;
    console.log(_curso);
  }
  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
    this.onConfirm();
    this.confirmChild.isDisabled = false;
  }

  onConfirm() {
    console.log('Has añadido un nuevo curso');
  }

  onKeyboard(_event: KeyboardEvent) {
    if (_event.key === 'Enter') {
      console.log('ohsi');
    }
    console.log(_event);
  }

  // finalPrice() {
  //   if (this.boughtItems) {
  //     return this.boughtItems.reduce(
  //       (prev: number, item: Product) => prev + item.price,
  //       0
  //     );
  //   }
  // }
}
