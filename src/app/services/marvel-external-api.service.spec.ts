import { TestBed } from '@angular/core/testing';

import { MarvelExternalApiService } from './marvel-external-api.service';

describe('MarvelExternalApiService', () => {
  let service: MarvelExternalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelExternalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
