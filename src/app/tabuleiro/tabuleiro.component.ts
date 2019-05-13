import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss'],
})
export class TabuleiroComponent implements OnInit {

  private blocos = [];
  @Input() private lines: number;

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.lines; index++) {
      this.blocos.push(index);
    }
  }

}
