import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabuleiroComponent } from './tabuleiro.component';

describe('TabuleiroComponent', () => {
  let component: TabuleiroComponent;
  let fixture: ComponentFixture<TabuleiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabuleiroComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabuleiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
