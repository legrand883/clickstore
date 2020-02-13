import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosExternosComponent } from './modulos-externos.component';

describe('ModulosExternosComponent', () => {
  let component: ModulosExternosComponent;
  let fixture: ComponentFixture<ModulosExternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulosExternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
