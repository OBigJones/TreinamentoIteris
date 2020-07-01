import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olacomp',
  templateUrl: './olacomp.component.html',
  styleUrls: ['./olacomp.component.css']
})
export class OlacompComponent implements OnInit {

  titulo: string = 'Meu primeiro componente.';
  dados: string;
  imgUrl: string = "/assets/guts.png";

  mostrarImagem = false;

  constructor() { }

  ngOnInit(): void {
  }

  executar(): void{
    this.dados = this.titulo
  }

}
