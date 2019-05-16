import { TestBed } from '@angular/core/testing';

import { EstruturaService } from './estrutura.service';

describe('EstruturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstruturaService = TestBed.get(EstruturaService);
    expect(service).toBeTruthy();
  });
});
