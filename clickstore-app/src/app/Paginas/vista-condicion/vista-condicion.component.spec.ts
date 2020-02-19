import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCondicionComponent } from './vista-condicion.component';

describe('VistaCondicionComponent', () => {
  let component: VistaCondicionComponent;
  let fixture: ComponentFixture<VistaCondicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCondicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCondicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
