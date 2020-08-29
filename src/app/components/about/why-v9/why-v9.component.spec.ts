import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyV9Component } from './why-v9.component';

describe('WhyV9Component', () => {
  let component: WhyV9Component;
  let fixture: ComponentFixture<WhyV9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyV9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyV9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
