import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutryGraphComponent } from './coutry-graph.component';

describe('CoutryGraphComponent', () => {
  let component: CoutryGraphComponent;
  let fixture: ComponentFixture<CoutryGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
