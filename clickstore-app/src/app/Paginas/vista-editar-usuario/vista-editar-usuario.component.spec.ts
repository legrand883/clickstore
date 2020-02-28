import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEditarUsuarioComponent } from './vista-editar-usuario.component';

describe('VistaEditarUsuarioComponent', () => {
  let component: VistaEditarUsuarioComponent;
  let fixture: ComponentFixture<VistaEditarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEditarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
