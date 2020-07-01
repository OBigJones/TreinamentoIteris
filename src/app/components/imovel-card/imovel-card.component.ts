import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImovelModel } from 'src/app/services/imoveis-api/imovel-model';

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})

export class ImovelCardComponent implements OnChanges {

  @Input() imovel: ImovelModel;

  imgUrl: string;
  adress : string;
  price : number;
  owner : string;
  type : string;

  constructor() { }

  ngOnChanges(): void {

    if(this.imovel != null){
      this.imgUrl = this.imovel.image
      this.adress = this.imovel.address
      this.price = this.imovel.price
      this.owner = this.imovel.owner
      this.type = this.imovel.type
    }
  }

}
