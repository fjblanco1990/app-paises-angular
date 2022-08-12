import { Component, OnInit } from '@angular/core';
import { PaisesResponse } from '../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  showError: boolean = false;
  paisesResponse: PaisesResponse[] = [];
  placeholder: string = 'pais';
  paisesSugeridos: PaisesResponse[] = [];
  constructor(private paiseService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.showError = false; 
    this.termino = termino; 
    this.paiseService.BuscarPais(termino).subscribe(
      (response) => {
        console.log(response)
         this.paisesResponse = response;
         this.paisesSugeridos = [];
      },
      error => {
         this.showError = true;     
         this.paisesResponse = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.showError = false; 
    if( termino === '') {
      this.paisesSugeridos = [];
    }
    this.paiseService.BuscarPais(termino).subscribe(
      response => {
        this.paisesSugeridos = response.splice(0,5);
      },
      error => {
        this.paisesSugeridos = [];
      }
    )
  }

}
