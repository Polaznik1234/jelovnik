import { TestBed } from '@angular/core/testing';

import { JelaService } from './jela.service';

describe('JelaService', () => {
  let service: JelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
