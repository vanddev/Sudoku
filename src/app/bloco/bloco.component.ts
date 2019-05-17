import { Component, OnInit, QueryList, ViewChildren, Input, Output, EventEmitter } from '@angular/core';
import { BlocoNumberComponent } from '../bloco-number/bloco-number.component';
import { EstruturaService } from '../estrutura.service';
import _ from "lodash";
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-bloco',
  templateUrl: './bloco.component.html',
  styleUrls: ['./bloco.component.scss'],
})
export class BlocoComponent implements OnInit {

  private blocos = [];
  private linhas = [];
  private colunas = [];
  private range = [];
  @Input() public numero: number;
  @ViewChildren('bn') components: QueryList<BlocoNumberComponent>;
  @Output() hasSelected: EventEmitter<any> = new EventEmitter();

 constructor(private service: EstruturaService) { }

  ngOnInit() {
    let estrutura = this.service.gerarEstrutura(3, 3);
    this.linhas = estrutura.horizontal;
    this.colunas = estrutura.vertical;
    this.range = _.range(3);
    this.randomizeNumber();
  }

  clean(ignore) {
    if(ignore != null) {
      this.components.toArray().filter(c=>c.numero!==ignore).forEach(c => {
        c.clean();
      })
    } else {
      this.components.toArray().forEach(c => {
        c.clean();
      })
    }
  }

  randomizeNumber() {
    let positions = [];
    let valores = [];
    let startedNumbers = Math.floor(Math.random() * 3) + 1;
    while(positions.length < startedNumbers) {
      let position = Math.floor(Math.random() * 9);
      let valor = Math.floor(Math.random() * 9) + 1;
      if (positions.indexOf(position) === -1) {
        positions.push(position);
      }
      if(valores.indexOf(valor) === -1) {
        valores.push(valor);
      }
    }

    for (let index = 0; index < 9; index++) {
        let positionIndex = positions.indexOf(index);
        if (positionIndex != -1) {
          this.blocos.push(valores[positionIndex]);
        } else {
          this.blocos.push('');
        }
    }

    this.fixBlocos();

    // console.log(this.blocos);
  }

  onSelected(event) {
    this.clean(event);
    this.components.toArray().filter(c => c.numero !== event).forEach(c => c.markNumber());
    this.hasSelected.emit({'bloco': this.numero, 'posicao': event});
  }

  toMark(posicao) {
    this.components.toArray()[posicao].markNumber();
  }

  toMarkLine(posicao) {
    let linha = this.service.extrairEstrutura(this.linhas, posicao);
    this.components.filter(c=> linha.indexOf(c.numero) > -1).forEach(c=> c.markNumber());
  }

  toMarkColumn(posicao) {
    let coluna = this.service.extrairEstrutura(this.colunas, posicao);
    this.components.filter(c=> coluna.indexOf(c.numero) > -1).forEach(c=> c.markNumber());
  }

  fixBlocos() {
    let line1 = this.blocos.splice(0,3);
    let line2 = this.blocos.splice(0,3);
    let line3 = this.blocos.splice(0,3);

    this.blocos = [line1, line2, line3];
  }

}