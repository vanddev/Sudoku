import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstruturaService {
  
  horizontalValor = [];
  verticalValor = [];

  constructor() { }

  public gerarEstrutura(linhas: number, colunas: number, keepValue: boolean) {
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
      if (keepValue)
        this.horizontalValor.push([].constructor(linha.length));
    }

    // preencher vertical
    for (let i = 0; i < colunas; i++) {
      let coluna = [];
      for(let j = 0; j < linhas; j++) {
        coluna.push(horizontal[j][i]);
      }
      vertical.push(coluna);
      if (keepValue)
        this.verticalValor.push([].constructor(coluna.length));
    }
    return {'horizontal': horizontal, 'vertical': vertical};
  }

  private converterEstrutura(bloco) {
    let horizontal = [];
    let vertical = [];

    // preencher horizontal
    for (let i = 0; i < bloco.length; i++) {
      let linha = [];
      for(let j = 0; j < bloco[0].length; j++) {
        linha.push(bloco[i][j]);
      }
      horizontal.push(linha);
    }

    // preencher vertical
    for (let i = 0; i < bloco[0].length; i++) {
      let coluna = [];
      for(let j = 0; j < bloco.length; j++) {
        coluna.push(horizontal[j][i]);
      }
      vertical.push(coluna);
    }

    return {'horizontal': horizontal, 'vertical': vertical};
  }

  validateAndSave(bloco) {
    const estrutura = this.converterEstrutura(bloco);
  }

  public extrairEstrutura(macro, posicao) {
    return macro.filter(l => l.indexOf(posicao) > -1)[0];
  }
}
