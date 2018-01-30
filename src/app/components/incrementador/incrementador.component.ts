import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})

export class IncrementadorComponent implements OnInit {

  @Input() leyenda = 'Leyenda'
  @Input() porcentaje = 50

  @Output() cambioValor: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(newValue: number) {

    if (newValue >= 100) {
      this.porcentaje = 100;
    }else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    }else {
      this.porcentaje = newValue;
    }

    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor) {
    if ((this.porcentaje === 0 && valor < 0) || (this.porcentaje === 100 && valor > 0)) {
      return
    }else {
    this.porcentaje = this.porcentaje + valor;
    }

    this.cambioValor.emit(this.porcentaje)
  }
}
