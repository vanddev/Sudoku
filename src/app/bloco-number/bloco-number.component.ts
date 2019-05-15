import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloco-number',
  templateUrl: './bloco-number.component.html',
  styleUrls: ['./bloco-number.component.scss'],
})
export class BlocoNumberComponent implements OnInit {

  @Input() private valor: number;
  @Input() private selected: boolean;

  constructor() { }

  ngOnInit() {}

  selectNumber() {
    this.selected = true;
  }

  clean() {
    this.selected = false;
  }

}
