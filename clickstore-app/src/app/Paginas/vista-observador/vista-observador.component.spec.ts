import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaObservadorComponent } from './vista-observador.component';

describe('VistaObservadorComponent', () => {
  let component: VistaObservadorComponent;
  let fixture: ComponentFixture<VistaObservadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaObservadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaObservadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
