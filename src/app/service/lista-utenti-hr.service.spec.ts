import { TestBed } from '@angular/core/testing';

import { ListaUtentiHrService } from './lista-utenti-hr.service';

describe('ListaUtentiHrService', () => {
  let service: ListaUtentiHrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaUtentiHrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
