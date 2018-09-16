import { TestBed } from '@angular/core/testing';

import { GetPhotosService } from './get-photos.service';

describe('GetPhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPhotosService = TestBed.get(GetPhotosService);
    expect(service).toBeTruthy();
  });
});
