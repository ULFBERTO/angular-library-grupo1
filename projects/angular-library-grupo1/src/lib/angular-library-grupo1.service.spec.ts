import { TestBed } from '@angular/core/testing';

import { AngularLibraryGrupo1Service } from './angular-library-grupo1.service';

describe('AngularLibraryGrupo1Service', () => {
  let service: AngularLibraryGrupo1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularLibraryGrupo1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
