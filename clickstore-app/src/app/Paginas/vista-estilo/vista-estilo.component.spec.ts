import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEstiloComponent } from './vista-estilo.component';

describe('VistaEstiloComponent', () => {
  let component: VistaEstiloComponent;
  let fixture: ComponentFixture<VistaEstiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEstiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
