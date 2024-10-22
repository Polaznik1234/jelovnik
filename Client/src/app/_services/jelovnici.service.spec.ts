import { TestBed } from '@angular/core/testing';

import { JelovniciService } from './jelovnici.service';

describe('JelovniciService', () => {
  let service: JelovniciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JelovniciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
