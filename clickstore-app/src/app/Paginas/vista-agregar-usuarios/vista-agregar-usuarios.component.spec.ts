import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAgregarUsuariosComponent } from './vista-agregar-usuarios.component';

describe('VistaAgregarUsuariosComponent', () => {
  let component: VistaAgregarUsuariosComponent;
  let fixture: ComponentFixture<VistaAgregarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAgregarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAgregarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
