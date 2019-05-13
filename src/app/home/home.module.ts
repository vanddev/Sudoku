import { BlocoNumberComponent } from './../bloco-number/bloco-number.component';
import { BlocoComponent } from './../bloco/bloco.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TabuleiroComponent } from '../tabuleiro/tabuleiro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TabuleiroComponent, BlocoComponent, BlocoNumberComponent]
})
export class HomePageModule {}
