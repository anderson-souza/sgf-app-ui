import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisComponent } from './pages/pais/pais.component';
import { PaisCadastroComponent } from './pages/pais-cadastro/pais-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: PaisComponent
  },
  {
    path: 'add',
    component: PaisCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule {}
