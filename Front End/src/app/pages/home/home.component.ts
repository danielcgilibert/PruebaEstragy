import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  paises: Paises[] = [];
  paisesMostrar: Paises[] = [];
  posicion: number = 0;
  paisesNoGuardados: { nombrePais: string; nombreCapital: string }[] = [];
  error: boolean = false;
  ok: boolean = false;

  constructor(private paisService: PaisesService) {}

  guardarTabla() {
    this.paisService.guardarTablaApi(this.paisesMostrar).subscribe(
      (resul) => {
        if (resul.noSave.length > 0) {
          this.paisesNoGuardados = resul.noSave;
        } else {
          if (resul.ok) {
            this.ok = true;
          }
          this.paisesNoGuardados = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ordenarPais() {
    this.paisesMostrar = this.paisesMostrar.sort((a, b) => {
      return this.compararString(a.nombrePais, b.nombrePais);
    });
  }

  ordenarCiudad() {
    this.paisesMostrar = this.paisesMostrar.sort((a, b) => {
      return this.compararString(a.nombreCapital, b.nombreCapital);
    });
  }

  compararString(a: string, b: string) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  }

  cargarPaises() {
    this.paisesMostrar = this.paises.slice(this.posicion, this.posicion + 10);
    this.posicion = this.posicion + 10;
    this.ok = false; //Borro las notificaciones cada vez que actualiza la página
  }

  simplificarArray(arrayPaises: any) {
    return arrayPaises.map((pais: any, index: number) => ({
      nombrePais: pais.name.common,
      nombreCapital: pais.capital ? pais.capital[0] : 'error capital',
    }));
  }

  ngOnInit(): void {
    this.paisService.cargarPaises().subscribe(
      (paises) => {
        this.paises = this.simplificarArray(paises);
        this.cargarPaises();
      },
      (err) => {
        console.log(err);
        this.error = true;
        this.paises = [];
      }
    );
  }
}
