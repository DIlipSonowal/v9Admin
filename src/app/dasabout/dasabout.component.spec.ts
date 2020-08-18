import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasaboutComponent } from './dasabout.component';

describe('DasaboutComponent', () => {
  let component: DasaboutComponent;
  let fixture: ComponentFixture<DasaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
