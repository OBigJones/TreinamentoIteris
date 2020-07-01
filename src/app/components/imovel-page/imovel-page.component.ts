import { Component, OnInit } from '@angular/core';
import { ImoveisApiService } from 'src/app/services/imoveis-api/imoveis-api.service';
import { ImovelModel } from 'src/app/services/imoveis-api/imovel-model';

@Component({
  selector: 'app-imovel-page',
  templateUrl: './imovel-page.component.html',
  styleUrls: ['./imovel-page.component.css']
})
export class ImovelPageComponent implements OnInit {

  listaImoveis: ImovelModel[];

  constructor(private imovelApi:ImoveisApiService) {

  }

  ngOnInit(): void {
    this.imovelApi.List().subscribe((lista) => {
      this.listaImoveis = lista;
    })
  }

}
