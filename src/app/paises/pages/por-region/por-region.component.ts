import { Component, OnInit } from '@angular/core';
import { PaisService } from './../../services/pais.service';
import { PaisesResponse } from './../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC'
  ];
  regionActiva: string = '';
  dataRegion: PaisesResponse[] = [];
  showError: boolean = false;
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCss(region: string) : string {
    return ( region === this.regionActiva ) ? 'btn-primary': 'btn-outline-primary';
  }

  activarRegion(region:string) {
    if( region  === this.regionActiva) { return; }
    this.showError = false;
    this.regionActiva = region;
    //TODO: Hacer el llamado al cervicio
    this.paisService.BuscarPorRegion(region).subscribe(
      (response) => {
        this.dataRegion  = response;
      },
      error => {
        this.showError = true;
        this.dataRegion  = [];
      }
    )
  }

}
