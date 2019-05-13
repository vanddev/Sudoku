import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoComponent } from './bloco.component';

describe('BlocoComponent', () => {
  let component: BlocoComponent;
  let fixture: ComponentFixture<BlocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
