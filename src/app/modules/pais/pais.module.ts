import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisComponent } from './pages/pais/pais.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [PaisComponent],
  imports: [
    CommonModule,
    PaisRoutingModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule
  ]
})
export class PaisModule { }
