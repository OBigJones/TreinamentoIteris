import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImovelModel } from './imovel-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImoveisApiService {

  constructor(private httpClient: HttpClient) { }


  public List():Observable<ImovelModel[]>{

    return this.httpClient.get<ImovelModel[]>('https://it3imoveis.firebaseio.com/vendas.json');


  }
}
