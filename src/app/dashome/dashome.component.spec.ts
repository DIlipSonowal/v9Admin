import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashomeComponent } from './dashome.component';

describe('DashomeComponent', () => {
  let component: DashomeComponent;
  let fixture: ComponentFixture<DashomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
