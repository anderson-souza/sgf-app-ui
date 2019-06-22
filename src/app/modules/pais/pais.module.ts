import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisComponent } from './pages/pais/pais.component';

@NgModule({
  declarations: [PaisComponent],
  imports: [
    CommonModule,
    PaisRoutingModule
  ]
})
export class PaisModule { }
