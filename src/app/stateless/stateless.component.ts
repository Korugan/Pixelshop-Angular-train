import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatelessComponent {
  @Output() cursomatriculado: EventEmitter<Product>;
  @Input() product: Product;
  public matricula: string;
  private disable: boolean;

  constructor() {
    this.cursomatriculado = new EventEmitter();
    this.product = {};
    this.matricula = '';
    this.disable = false;
  }
  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursomatriculado.emit(this.product);
  }
  isDisabled() {
    console.log(this.product.title);
    return this.disable;
  }
  mensaje() {
    alert('¿No te vas a descargar la imagen verdad?');
  }
}
