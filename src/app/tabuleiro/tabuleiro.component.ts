import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { BlocoComponent } from '../bloco/bloco.component';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss'],
})
export class TabuleiroComponent implements OnInit {

  private blocos = [];
  @Input() private lines: number;
  @ViewChildren('blc') components: QueryList<BlocoComponent>;

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.lines; index++) {
      this.blocos.push(index);
    }
  }

  ngAfterViewInit(){
    console.log(this.components.toArray());
}

}
