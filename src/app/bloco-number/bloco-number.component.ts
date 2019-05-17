import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bloco-number',
  templateUrl: './bloco-number.component.html',
  styleUrls: ['./bloco-number.component.scss'],
})
export class BlocoNumberComponent implements OnInit {

  @Input() public numero: number;
  @Input() private valor: number;
  @Input() private selected: boolean;
  private marked: boolean;
  @Output() hasSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  selectNumber() {
    if(!this.selected) {
      this.selected = true;
      this.marked = false;
      this.hasSelected.emit(this.numero);
    }
  }

  public markNumber() {
    if(!this.selected) this.marked = true;
  }

  clean() {
    this.selected = false;
    this.marked = false;
  }

}
