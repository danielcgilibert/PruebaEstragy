import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {


  @Output("cargarPaises") cargarPaises: EventEmitter<any> = new EventEmitter();
  @Output("ordenarPais") ordenarPais: EventEmitter<any> = new EventEmitter();
  @Output("ordenarCiudad") ordenarCiudad: EventEmitter<any> = new EventEmitter();
  @Output("guardarTabla") guardarTabla: EventEmitter<any> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  actualizarTabla() {
    this.cargarPaises.emit()
  }

  eventoOrdenarPais() {
    this.ordenarPais.emit()
  }

  eventoOrdenarCiudad() {
    this.ordenarCiudad.emit()
  }

  eventoGuardarTabla() {
    this.guardarTabla.emit()

  }
}
