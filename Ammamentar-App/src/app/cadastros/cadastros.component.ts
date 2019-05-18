import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {


  cadastros: any = [
    {
    PessoaId: 1,
    Nome: 'Maria',
    Sexo: 'F'
  },
  {
    PessoaId: 2,
    Nome: 'Isadora',
    Sexo: 'F'
  }, {
    PessoaId: 3,
    Nome: 'Fernanda',
    Sexo: 'F'
  }

  ];

  constructor() { }

  ngOnInit() {
  }

}
