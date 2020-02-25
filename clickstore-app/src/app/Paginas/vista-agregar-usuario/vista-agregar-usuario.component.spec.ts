import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAgregarUsuarioComponent } from './vista-agregar-usuario.component';

describe('VistaAgregarUsuarioComponent', () => {
  let component: VistaAgregarUsuarioComponent;
  let fixture: ComponentFixture<VistaAgregarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAgregarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAgregarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
