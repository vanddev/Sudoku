import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstruturaService {

  constructor() { }

  public gerarEstrutura(linhas: number, colunas: number) {
    let numero = 0;
    let horizontal = [];
    let vertical = [];

    // preencher horizontal
    for (let i = 0; i < linhas; i++) {
      let linha = [];
      for(let j = 0; j < colunas; j++) {
        linha.push(numero);
        numero++;
      }
      horizontal.push(linha);
    }

    // preencher vertical
    for (let i = 0; i < colunas; i++) {
      let coluna = [];
      for(let j = 0; j < linhas; j++) {
        coluna.push(horizontal[j][i]);
      }
      vertical.push(coluna);
    }

    return {'horizontal': horizontal, 'vertical': vertical};
  }

  public extrairEstrutura(macro, posicao) {
    return macro.filter(l => l.indexOf(posicao) > -1)[0];
  }
}
