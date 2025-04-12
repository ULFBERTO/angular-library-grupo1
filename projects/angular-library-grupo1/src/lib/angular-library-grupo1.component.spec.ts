import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibraryGrupo1Component } from './angular-library-grupo1.component';

describe('AngularLibraryGrupo1Component', () => {
  let component: AngularLibraryGrupo1Component;
  let fixture: ComponentFixture<AngularLibraryGrupo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibraryGrupo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLibraryGrupo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
