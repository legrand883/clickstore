import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComponentComponent } from './vista-component.component';

describe('VistaComponentComponent', () => {
  let component: VistaComponentComponent;
  let fixture: ComponentFixture<VistaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
