import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIdentificadorComponent } from './vista-identificador.component';

describe('VistaIdentificadorComponent', () => {
  let component: VistaIdentificadorComponent;
  let fixture: ComponentFixture<VistaIdentificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaIdentificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaIdentificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
