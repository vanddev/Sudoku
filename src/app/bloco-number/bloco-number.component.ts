import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloco-number',
  templateUrl: './bloco-number.component.html',
  styleUrls: ['./bloco-number.component.scss'],
})
export class BlocoNumberComponent implements OnInit {

  @Input() private valor: number;

  constructor() { }

  ngOnInit() {}

}
