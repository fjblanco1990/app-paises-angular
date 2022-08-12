import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { InputBuscarComponent } from './components/input-buscar/input-buscar.component';
import { TablaComponent } from './components/tabla-paises/tabla.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { DivErrorComponent } from './components/div-error/div-error.component'
import { LisSugerenciasComponent } from './components/lis-sugerencias/lis-sugerencias.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    InputBuscarComponent,
    TablaComponent,
    DivErrorComponent,
    LisSugerenciasComponent,
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    InputBuscarComponent,
    TablaComponent,
    DivErrorComponent
  ],
  imports: [

  CommonModule,
    FormsModule,
    RouterModule,
    GoogleMapsModule,
    BrowserModule,
    
  ]
})
export class PaisesModule { }
