import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCicloComponent } from './vista-ciclo.component';

describe('VistaCicloComponent', () => {
  let component: VistaCicloComponent;
  let fixture: ComponentFixture<VistaCicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
