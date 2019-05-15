import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlocoNumberComponent } from '../bloco-number/bloco-number.component';

@Component({
  selector: 'app-bloco',
  templateUrl: './bloco.component.html',
  styleUrls: ['./bloco.component.scss'],
})
export class BlocoComponent implements OnInit {

  private blocos = [];
  private lines = [0,1,2];
  private pickedNumber = [];
  @ViewChildren('bn') components: QueryList<BlocoNumberComponent>;

 constructor() { }

  ngOnInit() {
    this.randomizeNumber();
  }

  clean() {
    this.components.toArray().forEach(c => {
      c.clean();
    })
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

    console.log(this.blocos);
  }

  fixBlocos() {
    let line1 = this.blocos.splice(0,3);
    let line2 = this.blocos.splice(0,3);
    let line3 = this.blocos.splice(0,3);

    this.blocos = [line1, line2, line3];
  }

}
