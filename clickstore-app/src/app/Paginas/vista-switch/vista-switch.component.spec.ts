import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSwitchComponent } from './vista-switch.component';

describe('VistaSwitchComponent', () => {
  let component: VistaSwitchComponent;
  let fixture: ComponentFixture<VistaSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
