import { Injectable } from '@angular/core';
import _ from "lodash";

@Injectable({
  providedIn: 'root'
})

class Estrutura {
  horizontal = [];
  vertical = [];

  constructor(horizontal, vertical) {
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
}

export class EstruturaService {
  
  matriz: Estrutura[] = [].constructor(9);
  horizontalPos = [];
  verticalPos = [];

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
      if (keepValue){
        this.horizontalPos.push(linha);
      }
    }

    // preencher vertical
    for (let i = 0; i < colunas; i++) {
      let coluna = [];
      for(let j = 0; j < linhas; j++) {
        coluna.push(horizontal[j][i]);
      }
      vertical.push(coluna);
      if (keepValue){
        this.verticalPos.push(coluna);
      }
    }
    return new Estrutura(horizontal, vertical);
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

    return new Estrutura(horizontal, vertical);
  }

  validateAndSave(bloco, numero) {
    const estrutura = this.converterEstrutura(bloco);
    const linha = this.extrairEstrutura(this.horizontalPos, numero);
    const coluna = this.extrairEstrutura(this.verticalPos, numero);
    // const matrizFiltered = this.matriz.filter(pos => _.includes(linha, pos.horizontal) && pos !== numero);
    for (const pos of linha) {
      for (let i=0; i < estrutura.horizontal.length; i++) {
          const matrizBloco = this.matriz[pos];
          if (matrizBloco) {
                const intersection = _.intersection(
                                        _.without(estrutura.horizontal[i], ''),
                                        _.without(matrizBloco.horizontal[i], ''));
                if (intersection.length > 0) {
                  console.log(`Achei conflito no bloco ${numero + 1} na linha ${i + 1}`);
                  return false;
                }
          }
      }
    }
    for (const pos of coluna) {
      for (let i=0; i < estrutura.vertical.length; i++) {
        const matrizBloco = this.matriz[pos];
          if (matrizBloco) {
                const intersection = _.intersection(
                                        _.without(estrutura.vertical[i], ''),
                                        _.without(matrizBloco.vertical[i], ''));
                if (intersection.length > 0) {
                  console.log(`Achei conflito no bloco ${numero + 1} na coluna ${i + 1}`);
                  return false;
                }
          }
      }
    }
    this.matriz[numero] = estrutura;
    return true;
  }

  public extrairEstrutura(macro, posicao) {
    return macro.filter(l => l.indexOf(posicao) > -1)[0];
  }
}
