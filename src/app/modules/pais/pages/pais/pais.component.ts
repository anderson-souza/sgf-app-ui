import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/core/services/pais.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers: [ConfirmationService]
})
export class PaisComponent implements OnInit {
  constructor(
    private paisService: PaisService,
    private confirmationService: ConfirmationService
  ) {}

  public paises: any;

  ngOnInit() {
    this.listarPaises();
  }

  listarPaises() {
    this.paisService.getPaises().subscribe(
      response => {
        this.paises = response;
      },
      error => {
        alert('Deu pau na hora de pegar os paises viu');
      }
    );
  }

  editarPais(id: number){

  }

  deletarPais(id: number) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este registro?',
      accept: () => {
        this.paisService.deletarPais(id).subscribe(
          response => {
            this.listarPaises();
          },
          error => {
            alert('Deu um erro para deletar');
          }
        );
      }
    });
  }
}
