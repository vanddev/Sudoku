import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { BlocoComponent } from '../bloco/bloco.component';
import { EstruturaService } from '../estrutura.service';
import _ from "lodash";

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

  constructor(private service: EstruturaService) { }

  ngOnInit() {
    let estrutura = this.service.gerarEstrutura(3, 3);
    this.linhas = estrutura.horizontal;
    this.colunas = estrutura.vertical;
    this.range = _.range(this.lines);
  }

  onSelected(event) {
    let linha = this.service.extrairEstrutura(this.linhas, event.bloco);
    let coluna = this.service.extrairEstrutura(this.colunas, event.bloco);
    console.log(event);
    this.components
        .filter(c => linha.indexOf(c.numero) > -1)
        .forEach(c=> c.toMarkLine(event.posicao));
    this.components
        .filter(c => coluna.indexOf(c.numero) > -1)
        .forEach(c=> c.toMarkColumn(event.posicao));
  }

}
