import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoNumberComponent } from './bloco-number.component';

describe('BlocoNumberComponent', () => {
  let component: BlocoNumberComponent;
  let fixture: ComponentFixture<BlocoNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocoNumberComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
