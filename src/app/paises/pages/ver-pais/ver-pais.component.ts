import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisesResponse } from '../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  public pais!: PaisesResponse;
  @ViewChild('map') mapElement: any;
  map!: google.maps.Map;
  constructor(private activedRoute: ActivatedRoute, private PaisService: PaisService) { }

  ngOnInit(): void {
    //trabajando con swithcMap
    this.activedRoute.params.pipe(
      //operador de transformacion , permite recibir un observable y regresar otro observable
      switchMap( (param: any) => this.PaisService.BuscarPorCodigo(param.CountryId)),
      tap( resp => console.log('tap', resp) )
    ).subscribe( pais => {
      this.pais = pais;
      
    })



    //ejemplo nomral 
    // this.activedRoute.params.subscribe(
    //   ({CountryId})  => { // se realiza la desestrcuturacion para solo obtener el id
    //       console.log(CountryId);
    //       this.PaisService.BuscarPorCodigo(CountryId).subscribe(
    //         pais => {
    //           console.log('resp metodo 1',pais);
    //         }
    //       )
    //   }
    // )

  }

}
