import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { PaisesResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-lis-sugerencias',
  templateUrl: './lis-sugerencias.component.html',
  styleUrls: ['./lis-sugerencias.component.css']
})
export class LisSugerenciasComponent implements OnInit {
  @Input() dataSugerida: PaisesResponse[] = [];
  @Output() terminoSugerencia: EventEmitter<string> = new EventEmitter();
  @Input() typeSearch!: string;
  constructor() { }

  ngOnInit(): void {
  }

  buscarSugerencia(termino: any) {
    if (this.typeSearch === 'P') {
      this.terminoSugerencia.emit(termino.name);
    } else if (this.typeSearch === 'C') {
      this.terminoSugerencia.emit(termino.capital);
    }
    
  }
}
