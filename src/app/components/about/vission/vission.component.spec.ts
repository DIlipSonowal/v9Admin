import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VissionComponent } from './vission.component';

describe('VissionComponent', () => {
  let component: VissionComponent;
  let fixture: ComponentFixture<VissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
