import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-error',
  templateUrl: './div-error.component.html',
  styleUrls: ['./div-error.component.css']
})
export class DivErrorComponent implements OnInit {
  @Input() showError: boolean = false;
  @Input() class: string = '';
  @Input() data: any;
  @Input() propierty_msj: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
