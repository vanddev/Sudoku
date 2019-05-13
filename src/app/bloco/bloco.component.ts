import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-bloco',
  templateUrl: './bloco.component.html',
  styleUrls: ['./bloco.component.scss'],
})
export class BlocoComponent implements OnInit {

  private blocos = [];
  private pickedNumber = [];

 constructor() { }

  ngOnInit() {
    for (let index = 0; index < 3; index++) {
      this.blocos.push(index);
    }
  }

  randomizeNumber() {
    if (Math.floor(Math.random() * 100) + 1 >= 11) {
      let valor;
      do {
        valor = Math.floor(Math.random() * 10);
      } while (this.pickedNumber.indexOf(valor) > -1);
      this.pickedNumber.push(Validators);
      return valor;
    }
    return '';
  }

}
