import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-buscar',
  templateUrl: './input-buscar.component.html',
  styleUrls: ['./input-buscar.component.css']
})
export class InputBuscarComponent implements OnInit {
  termino: string = '';
  @Input() place: string = '';
  @Output() buscarEmit: EventEmitter<string> = new EventEmitter();
  @Output() onDeBounce: EventEmitter<string> = new EventEmitter();

  //crear observable manual
  deBouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.deBouncer.pipe(
      //emite el suscribe hasta que terminen los 300 milesimas de segundo
      debounceTime(300)
    ).subscribe( terminoBusqueda => {
       this.onDeBounce.emit( terminoBusqueda );
    })
  }

  buscar() {
    this.buscarEmit.emit(this.termino);
  }

  teclaPresionada(event: any) {
    const valor =  event.target.value;
    //esto emite un valor
    this.deBouncer.next(this.termino);  
    


  }

}
