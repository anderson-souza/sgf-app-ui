import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisComponent } from './pages/pais/pais.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaisCadastroComponent } from './pages/pais-cadastro/pais-cadastro.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [PaisComponent, PaisCadastroComponent],
  imports: [
    CommonModule,
    PaisRoutingModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DropdownModule,
    FormsModule,
    InputTextModule
  ]
})
export class PaisModule {}
