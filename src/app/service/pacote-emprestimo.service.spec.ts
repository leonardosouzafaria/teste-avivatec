import { TestBed, inject } from '@angular/core/testing';

import { PacoteEmprestimoService } from './pacote-emprestimo.service';

describe('PacoteEmprestimoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacoteEmprestimoService]
    });
  });

  it('should be created', inject([PacoteEmprestimoService], (service: PacoteEmprestimoService) => {
    expect(service).toBeTruthy();
  }));
});
