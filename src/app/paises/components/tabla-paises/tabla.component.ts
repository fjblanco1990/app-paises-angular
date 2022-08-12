import { Component, Input, OnInit } from '@angular/core';
import { PaisesResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() paisesResponse: PaisesResponse[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
