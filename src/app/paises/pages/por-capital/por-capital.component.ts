import { Component, OnInit } from '@angular/core';
import { PaisesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  showError: boolean = false;
  capitalesResponse: PaisesResponse[] = [];
  placeholder: string = 'capital';
  capitalesSugeridas: PaisesResponse[] = [];
  constructor(private paiseService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.showError = false; 
    this.termino = termino; 
    this.paiseService.BuscarCapital(termino).subscribe(
      (response) => {
        console.log(response)
         this.capitalesResponse = response;
         this.capitalesSugeridas = [];
      },
      error => {
         this.showError = true;     
         this.capitalesResponse = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.showError = false; 
    if( termino === '') {
      this.capitalesSugeridas = [];
    }
    this.paiseService.BuscarCapital(termino).subscribe(
      response  => {
        this.showError = false;
        this.capitalesSugeridas = response.splice(0,5);
      }, error => {
        this.showError = true;
        this.capitalesSugeridas = [];
      }
    )
    //TODO: crear sugerencias
  }
}
