import { Component, OnInit } from '@angular/core';
import { Pais } from '../../pais';
import { SelectItem } from 'primeng/api';
import { PaisService } from 'src/app/core/services/pais.service';

@Component({
  selector: 'app-pais-cadastro',
  templateUrl: './pais-cadastro.component.html',
  styleUrls: ['./pais-cadastro.component.css']
})
export class PaisCadastroComponent implements OnInit {
  public pais: Pais = new Pais();
  paisDropdown: SelectItem[];

  constructor(private paisService: PaisService) {
    this.paisDropdown = [
      { label: 'Ativo', value: 1 },
      { label: 'Inativo', value: 0 }
    ];
  }

  ngOnInit() {}

  salvarPais() {
    this.paisService.inserirPais(this.pais).subscribe(
      response => {
        alert('País salvo com sucesso');
      },
      error => {
        alert('Deu erro ao inserir um país');
        console.log(error);
      }
    );
  }
}
