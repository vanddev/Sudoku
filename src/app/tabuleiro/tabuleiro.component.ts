import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { BlocoComponent } from '../bloco/bloco.component';
import { EstruturaService } from '../estrutura.service';
import _ from "lodash";
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss'],
})
export class TabuleiroComponent implements OnInit {

  private range = [];
  @Input() private lines: number;
  @ViewChildren('blc') components: QueryList<BlocoComponent>;
  private linhas = [];
  private colunas = [];
  private areaSelecionada: any;
  private areaMarcada = {'linha': [], 'coluna': []};

  constructor(private service: EstruturaService) { }

  ngOnInit() {
    let estrutura = this.service.gerarEstrutura(3, 3, true);
    this.linhas = estrutura.horizontal;
    this.colunas = estrutura.vertical;
    this.range = _.range(this.lines);
  }

  onSelected(event) {
    this.clean(event.bloco);
    let linha = this.service.extrairEstrutura(this.linhas, event.bloco);
    let coluna = this.service.extrairEstrutura(this.colunas, event.bloco);
    this.components
        .filter(c => linha.indexOf(c.numero) > -1 && c.numero !== event.bloco)
        .forEach(c=> {
          c.toMarkLine(event.posicao);
          this.areaMarcada.linha.push(c);
        });
    this.components
        .filter(c => coluna.indexOf(c.numero) > -1  && c.numero !== event.bloco)
        .forEach(c=> {
          c.toMarkColumn(event.posicao)
          this.areaMarcada.coluna.push(c);
        });
    this.areaSelecionada = event;
  }

  clean(bloco) {
    if (this.areaSelecionada && this.areaSelecionada.bloco !== bloco) {
      this.components.toArray()[this.areaSelecionada.bloco].clean(null);
    }
    this.areaMarcada.linha.forEach(c=> c.clean());
    this.areaMarcada.coluna.forEach(c=> c.clean());
    this.areaMarcada.linha = [];
    this.areaMarcada.coluna = [];
  }

}
