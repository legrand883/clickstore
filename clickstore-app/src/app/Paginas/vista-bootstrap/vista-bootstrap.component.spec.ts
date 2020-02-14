import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBootstrapComponent } from './vista-bootstrap.component';

describe('VistaBootstrapComponent', () => {
  let component: VistaBootstrapComponent;
  let fixture: ComponentFixture<VistaBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
