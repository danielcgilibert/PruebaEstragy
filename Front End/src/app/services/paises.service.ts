import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private apiUrl: String = 'https://restcountries.com/v3.1';
  private apiBackend: String = 'http://localhost:3002/pais';

  constructor(private http: HttpClient) {}

  cargarPaises(): Observable<Paises[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Paises[]>(url);
  }

  guardarTablaApi(paises: Paises[]): Observable<any> {
    const url = `${this.apiBackend}/save`;
    let results = { data: paises };
    return this.http.post(url, results);
  }
}
