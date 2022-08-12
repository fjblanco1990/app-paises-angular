import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { PaisesResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com/v2';

  
  public get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,population,flag');  
  }
  

  constructor(private http: HttpClient) { }

  BuscarPais(termino: string): Observable<PaisesResponse[]> {
    return this.http.get<PaisesResponse[]>(`${this.apiUrl}/name/${termino}`, { params: this.httpParams });
  }

  BuscarCapital( termino: string): Observable<any>{
    return this.http.get<PaisesResponse[]>(`${this.apiUrl}/capital/${termino}`, { params: this.httpParams });
  }

  BuscarPorCodigo(termino: string): Observable <PaisesResponse> {
    return this.http.get<PaisesResponse>(`${this.apiUrl}/alpha/${termino}`);
  }

  BuscarPorRegion(termino: string): Observable <PaisesResponse[]> {
     
    return this.http.get<PaisesResponse[]>(`${this.apiUrl}/regionalbloc/${termino}`, { params: this.httpParams });
  }
}
